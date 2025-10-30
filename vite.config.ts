import { Dirent, existsSync, readdir, readFileSync, writeFileSync } from 'node:fs'
import path, { join, resolve } from 'node:path'

import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin, type ResolvedConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

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

      let contentJsFile = 'content.js'
      let styleCssFile = 'style.css'

      for (const fileName of await walk(outDir)) {
        const baseName = path.basename(fileName)

        if (baseName.startsWith('content-') && baseName.endsWith('.js')) {
          contentJsFile = baseName
        }

        if (baseName.startsWith('style-') && baseName.endsWith('.css')) {
          styleCssFile = baseName
        }
      }

      const manifest = JSON.parse(readFileSync(manifestPath, 'utf-8'))

      if (Array.isArray(manifest.content_scripts)) {
        manifest.content_scripts = manifest.content_scripts.map((cs: any) => {
          if (cs.js && Array.isArray(cs.js)) {
            cs.js = cs.js.map((f: string) =>
              /content/i.test(f) ? contentJsFile : f
            )
          }
          if (cs.css && Array.isArray(cs.css)) {
            cs.css = cs.css.map((f: string) =>
              /style/i.test(f) ? styleCssFile : f
            )
          }
          return cs
        })
      }

      const contentScriptsPath = join(outDir, contentJsFile)

      if (!existsSync(contentScriptsPath)) {
        console.error(
          `\x1b[31m✗ content.js or content-[hash].js not found at ${manifestPath}\x1b[0m`
        )
        return
      }

      writeFileSync(
        contentScriptsPath,
        readFileSync(contentScriptsPath, 'utf-8')
          .replace(/"index\.js"/g, `"${contentJsFile}"`)
          .replace(/"style\.css"/g, `"${styleCssFile}"`)
      )

      writeFileSync(manifestPath, JSON.stringify(manifest, null, 2))

      console.log('\x1b[32m✓ Updated manifest.json with hashed filenames\x1b[0m')
    },
  }
}

export default defineConfig(() => {
  const dev = process.env.DEV === 'true'

  return {
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
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    define: {
      'process.env.NODE_ENV': JSON.stringify('production'),
    },
    build: {
      chunkSizeWarningLimit: 2000,
      emptyOutDir: true,
      outDir: 'dist',
      minify: 'terser',
      terserOptions: !dev
        ? {
            compress: {
              drop_console: true,
              drop_debugger: true,
            },
          }
        : undefined,
      rollupOptions: {
        input: {
          content: resolve(__dirname, 'src/content.tsx'),
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
  }
})
