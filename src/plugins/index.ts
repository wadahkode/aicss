import Tailwind from './tailwind'
import Bootstrap from './bootstrap'
import Bulma from './bulma'

const availablePlugins: Record<string, Plugins> = {
  tailwindcss: Tailwind,
  bootstrap: Bootstrap,
  bulma: Bulma,
}

type Plugins = {
  init: () => void
  processRules: (rules: any) => void
} | null

export function getLoadedPlugins(pluginName: string): Plugins {
  if (!availablePlugins[pluginName]) {
    console.warn(`⚠️ Plugin "${pluginName}" tidak ditemukan.`)
    return null
  }

  return availablePlugins[pluginName]
}
