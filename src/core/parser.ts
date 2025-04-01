import { AIStore } from '../runtime/store'

export function parse(input: string): Record<string, Record<string, string>> {
  const output: Record<string, Record<string, string>> = {}
  const lines = input.split('\n').map((line) => line.trim())
  let currentSelector = ''
  let currentValue = ''

  for (const line of lines) {
    const selectorMatch = line.match(/^ai\.(\w+)\s*=\s*\{$/) // Tangkap selector
    if (selectorMatch) {
      currentSelector = selectorMatch[1] // Ambil hanya nama class (tanpa "ai." dan "=")
      currentValue = selectorMatch[2]

      if (currentSelector === 'setup') {
        AIStore.setSetup(JSON.parse(currentValue))
      } else {
        output[currentSelector] = {}
      }
    } else if (line.includes(':') && currentSelector) {
      const [prop, value] = line
        .replace(';', '')
        .split(':')
        .map((s) => s.trim())
      output[currentSelector][prop] = value.replace(/"/g, '') // Hapus tanda kutip
    }
  }

  for (const selector in output) {
    AIStore.set(selector, output[selector])
  }

  return output
}
