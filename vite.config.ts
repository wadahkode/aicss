import { defineConfig } from 'vite'
import AicssPlugin from './plugins/vite-plugin-aicss'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    AicssPlugin({
      dir: 'aicss',
    }),
    tailwindcss(),
  ],
})
