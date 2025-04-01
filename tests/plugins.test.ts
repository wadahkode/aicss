import { getLoadedPlugins } from '../src/plugins'

describe('AICSS Plugin System', () => {
  test('Should load TailwindCSS plugin', () => {
    const plugin = getLoadedPlugins('tailwindcss')
    expect(plugin).not.toBeNull() // Plugin harus ditemukan
    expect(typeof plugin?.init).toBe('function') // Harus memiliki method `init`
    expect(typeof plugin?.processRules).toBe('function') // Harus memiliki method `processRule`
  })

  test('Should load Bootstrap plugin', () => {
    const plugin = getLoadedPlugins('bootstrap')
    expect(plugin).not.toBeNull()
    expect(typeof plugin?.init).toBe('function')
    expect(typeof plugin?.processRules).toBe('function')
  })

  test('Should load Bulma plugin', () => {
    const plugin = getLoadedPlugins('bulma')
    expect(plugin).not.toBeNull()
    expect(typeof plugin?.init).toBe('function')
    expect(typeof plugin?.processRules).toBe('function')
  })

  test('Should return null for unknown plugin', () => {
    console.warn = jest.fn() // Mock console.warn
    const plugin = getLoadedPlugins('unknown-plugin')

    expect(console.warn).toHaveBeenCalledWith(
      '⚠️ Plugin "unknown-plugin" tidak ditemukan.'
    )
    expect(plugin).toBeNull() // Harus null jika plugin tidak ditemukan
  })
})
