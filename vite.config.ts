import { defineConfig } from 'vite'
import AicssPlugin from './plugins/vite-plugin-aicss'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const fileName = (format: string) => {
  return format === 'umd' ? 'aicss.min.js' : 'aicss.js'
}

export default defineConfig({
  plugins: [
    AicssPlugin(),
    {
      ...AicssPlugin({ dir: 'public' }),
      apply: 'build',
    },
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'Aicss',
      // the proper extensions will be added
      fileName,
      // formats: ['es', 'cjs'],
    },
    copyPublicDir: false,
    minify: 'terser',
    sourcemap: true,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
      format: {
        comments: false,
      },
    },
    rollupOptions: {
      external: ['vite'],
      output: {
        globals: {
          aicss: 'AicssPlugin',
        },
      },
      treeshake: true,
    },
  },
})
