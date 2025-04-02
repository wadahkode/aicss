import { getLoadedPlugins } from '../plugins'

/**
 * Memproses aturan AICSS untuk plugin tertentu
 */
export function parsePluginRules(
  pluginName: string,
  rules: Record<string, string | string[] | Record<string, string>>
) {
  const plugin = getLoadedPlugins(pluginName)

  if (!plugin) {
    console.warn(`⚠️ Plugin "${pluginName}" tidak ditemukan.`)
    return null
  }

  if (typeof plugin.processRules === 'function') {
    return plugin.processRules(normalizeRules(rules))
  }

  console.warn(`⚠️ Plugin "${pluginName}" tidak mendukung parsing aturan.`)
  return null
}

/**
 * Menormalkan aturan agar selalu dalam bentuk array string
 */
function normalizeRules(rules: Record<string, any>) {
  return Object.entries(rules).reduce(
    (acc, [selector, value]) => {
      if (typeof value === 'string') {
        acc[selector] = value.split(' ') // String diubah jadi array
      } else if (Array.isArray(value)) {
        acc[selector] = value // Langsung array
      } else if (typeof value === 'object') {
        acc[selector] = Object.values(value) // Object jadi array nilai
      }
      return acc
    },
    {} as Record<string, string[]>
  )
}
