import tailwindPlugin from '../src/plugins/tailwind'

function installTailwind() {
  test('Install tailwindcss when running installTailwind()', () => {
    if (tailwindPlugin.isTailwindInstalled()) {
      console.log('✅ Tailwindcss sudah diinstall.')
      return
    }

    expect(tailwindPlugin.isTailwindInstalled()).toBe(false)
    tailwindPlugin.installTailwind('latest')
  })

  test('Checking tailwindcss has installed after running installTailwind()', () => {
    expect(tailwindPlugin.isTailwindInstalled()).toBe(true)
    console.log('✅ Tailwindcss berhasil diinstall.')
  }, 60000)
}

describe('TailwindCSS installed', installTailwind)
