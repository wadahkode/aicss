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

  if (setupConfig.plugins && setupConfig.plugins?.name) {
    const plugin = getLoadedPlugins(setupConfig.plugins.name)
    if (plugin) {
      return plugin.init()
    }

    console.warn(`⚠️ Plugin "${setupConfig.plugins?.name}" tidak ditemukan.`)
  }
}
