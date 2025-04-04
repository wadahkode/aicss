import { Plugin } from 'vite'
import { transformAICSS } from '../src/transformer'
import path from 'path-browserify'

interface AICSSOptions {
  dir?: string // Direktori file .aicss
}

export default function AicssPlugin(options: AICSSOptions = {}): Plugin {
  const aicssDir = options.dir || ''

  return {
    name: 'vite-plugin-aicss',
    enforce: 'pre',
    configureServer(server) {
      server.watcher.on('change', (file) => {
        if (
          file.startsWith(path.resolve(aicssDir)) &&
          file.endsWith('.aicss')
        ) {
          console.log(`🔄 Reloading ${file}`)
          server.ws.send({ type: 'full-reload' })
        }
      })
    },
    transform(code: string, id: string) {
      if (id.startsWith(path.resolve(aicssDir)) && id.endsWith('.aicss')) {
        return transformAICSS(code)
      }
    },
  }
}
