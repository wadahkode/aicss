import Tailwind from './tailwind'
import Bootstrap from './bootstrap'
import Bulma from './bulma'
import { Plugins } from './types'

const availablePlugins: Record<string, PluginFunc> = {
  tailwindcss: Tailwind,
  bootstrap: Bootstrap,
  bulma: Bulma,
}

type PluginFunc = {
  init: (plugins?: Plugins | Plugins[]) => void
  processRules: (rules: any) => void
} | null

export function getLoadedPlugins(pluginName: string): PluginFunc {
  if (!availablePlugins[pluginName]) {
    console.warn(`⚠️ Plugin "${pluginName}" tidak ditemukan.`)
    return null
  }

  return availablePlugins[pluginName]
}
