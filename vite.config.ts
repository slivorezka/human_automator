import { defineConfig, type Plugin, type ResolvedConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path, { resolve, join } from 'node:path'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import { readFileSync, writeFileSync, existsSync, readdir, Dirent } from 'node:fs'

function updateManifest(): Plugin {
  let viteConfig: ResolvedConfig
  return {
    name: 'update-manifest',
    apply: 'build',
    configResolved(resolved) {
      viteConfig = resolved
    },
    async closeBundle() {
      const root = viteConfig.root ?? process.cwd()
      const outDir = path.resolve(root, viteConfig.build.outDir)

      const manifestPath = join(outDir, 'manifest.json')

      if (!existsSync(manifestPath)) {
        console.error(`\x1b[31m✗ Manifest not found at ${manifestPath}\x1b[0m`)
        return
      }

      async function walk(dir: string): Promise<string[]> {
        const entries = await new Promise<Dirent[]>((resolve, reject) => {
          readdir(dir, { withFileTypes: true }, (err, files) => {
            if (err) {
              reject(err)
            } else {
              resolve(files)
            }
          })
        })

        const files = await Promise.all(
          entries.map(async (entry: Dirent) => {
            const res = path.resolve(dir, entry.name)
            return entry.isDirectory() ? walk(res) : res
          })
        )

        return files.flat()
      }

      let backgroundJsFile = 'background.js'
      let indexJsFile = 'index.js'
      let styleCssFile = 'style.css'

      for (const fileName of await walk(outDir)) {
        const baseName = path.basename(fileName)

        if (baseName.startsWith('background-') && baseName.endsWith('.js')) {
          backgroundJsFile = baseName
        }

        if (baseName.startsWith('index-') && baseName.endsWith('.js')) {
          indexJsFile = baseName
        }

        if (baseName.startsWith('style-') && baseName.endsWith('.css')) {
          styleCssFile = baseName
        }
      }

      const manifest = JSON.parse(readFileSync(manifestPath, 'utf-8'))

      if (manifest.background?.service_worker) {
        manifest.background.service_worker = backgroundJsFile
      }

      const backgroundPath = join(outDir, backgroundJsFile)

      if (!existsSync(backgroundPath)) {
        console.error(
          `\x1b[31m✗ background.js or background-[hash].js not found at ${manifestPath}\x1b[0m`
        )
        return
      }

      writeFileSync(
        backgroundPath,
        readFileSync(backgroundPath, 'utf-8')
          .replace(/"index\.js"/g, `"${indexJsFile}"`)
          .replace(/"style\.css"/g, `"${styleCssFile}"`)
      )

      writeFileSync(manifestPath, JSON.stringify(manifest, null, 2))

      console.log('\x1b[32m✓ Updated manifest.json with hashed filenames\x1b[0m')
    },
  }
}

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets/icons',
          dest: '',
        },
        {
          src: 'manifest.json',
          dest: '',
        },
      ],
    }),
    updateManifest(),
  ],
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  build: {
    emptyOutDir: true,
    outDir: 'dist',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      input: {
        background: resolve(__dirname, 'src/background.ts'),
        index: resolve(__dirname, 'src/index.tsx'),
      },
      output: {
        inlineDynamicImports: false,
        format: 'es',
        entryFileNames: '[name]-[hash].js',
        chunkFileNames: '[name]-[hash].js',
        assetFileNames: ({ names }) =>
          names[0]?.endsWith('.css') ? 'style-[hash].[ext]' : '[name]-[hash].[ext]',
      },
    },
  },
})
