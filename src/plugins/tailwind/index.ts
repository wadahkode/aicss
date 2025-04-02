import { execSync } from 'child_process'
import path from 'path'
import { Plugins } from '../types'

const TW_PLUGIN_PATH = path.resolve(__dirname)
const NODE_MODULES_PATH = path.resolve(
  path.join(TW_PLUGIN_PATH, 'node_modules')
)

export default {
  init(plugins?: Plugins | Plugins[]) {
    console.log('✅ TailwindCSS plugin is active.')

    if (Array.isArray(plugins)) {
      plugins.map((plugin) => {
        if (plugin.mode !== 'production') {
          this.installTailwind(plugin.version)
        }
      })
    } else {
      if (plugins?.mode !== 'production') {
        this.installTailwind(plugins?.version)
      }
    }
  },

  // Install tailwind
  installTailwind(version: string | undefined) {
    if (!this.isTailwindInstalled()) {
      console.log('🔧 Installing TailwindCSS...')

      execSync(
        `npm install tailwindcss@${version} postcss autoprefixer @tailwindcss/postcss`,
        { cwd: TW_PLUGIN_PATH, stdio: 'inherit' }
      )
    }
  },

  // Cek! Apakah tailwindcss sudah terinstall?
  isTailwindInstalled(): boolean {
    try {
      require.resolve('tailwindcss', {
        paths: [NODE_MODULES_PATH],
      })

      return true
    } catch (error) {
      return false
    }
  },

  processRules(rules: Record<string, string[]>) {
    const processedRules: Record<string, string> = {}

    Object.entries(rules).forEach(([selector, classList]) => {
      if (Array.isArray(classList)) {
        processedRules[selector] = classList.join(' ')
      }
    })

    return processedRules
  },
}
