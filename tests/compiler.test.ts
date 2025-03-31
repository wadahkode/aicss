import { parse } from '../src/core/parser'
import { transform } from '../src/core/transformer'

const sampleAICSS = `
ai.button = {
  background: "black";
  color: "white";
}
`

describe('AICSS Parser and Transformer', () => {
  test('Parser should extract rules correctly', () => {
    const parsed = parse(sampleAICSS)

    expect(parsed).toHaveProperty('button') // Sekarang harus benar
    expect(parsed['button']).toHaveProperty('background', 'black')
    expect(parsed['button']).toHaveProperty('color', 'white')
  })

  test('Transformer should compile parsed rules into valid CSS', () => {
    const parsed = parse(sampleAICSS)
    const cssOutput = transform(parsed)

    expect(cssOutput).toContain('.button {')
    expect(cssOutput).toContain('  background: black;')
    expect(cssOutput).toContain('  color: white;')
    expect(cssOutput).toContain('}')
  })
})
