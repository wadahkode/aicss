/**
 * Pengaturan
 *
 * Untuk mendeteksi plugin, fitur, konfigurasi gaya.
 *
 * ai.setup = {}
 */
import { AIStore } from '../runtime/store'
import { getLoadedPlugins } from '../plugins'

export function setupAiCss() {
  const setupConfig = AIStore.getSetup()

  if (!setupConfig?.plugins) {
    return false
  }

  if (Array.isArray(setupConfig.plugins)) {
    setupConfig.plugins.map((setup) => {
      const plugin = getLoadedPlugins(setup.name)
      if (plugin) {
        return plugin.init(setup)
      }
    })
  } else {
    const plugin = getLoadedPlugins(setupConfig?.plugins?.name)
    if (plugin) {
      return plugin.init(setupConfig?.plugins)
    }

    console.warn(`⚠️ Plugin "${setupConfig?.plugins?.name}" tidak ditemukan.`)
  }
}
