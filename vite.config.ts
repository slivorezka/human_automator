import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from '@tailwindcss/vite'
import { resolve } from "path"
import { viteStaticCopy } from "vite-plugin-static-copy"

export default defineConfig({
  plugins: [
    tailwindcss(),
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    viteStaticCopy({
      targets: [
        {
          src: "src/assets",
          dest: ""
        }
      ],
    }),
  ],
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
  build: {
    emptyOutDir: true,
    outDir: "dist",
    lib: {
      entry: resolve(__dirname, "src/main.tsx"),
      name: "app",
      fileName: "app",
      formats: ["es"],
    },
    rollupOptions: {
      input: {
        background: resolve(__dirname, "src/background.js"),
        main: resolve(__dirname, "src/main.tsx"),
      },
      output: {
        inlineDynamicImports: false,
        entryFileNames: "[name].js",
        assetFileNames: "assets/[name].[ext]",
      },
    },
  },
})