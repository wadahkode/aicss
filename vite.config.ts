import { defineConfig } from 'vite'
import AicssPlugin from './plugins/vite-plugin-aicss'

export default defineConfig({
  plugins: [
    AicssPlugin({
      dir: 'aicss',
    }),
  ],
})
