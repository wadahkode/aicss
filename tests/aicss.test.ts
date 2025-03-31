import { Aicss } from '../src/index'
import { readFileSync, unlinkSync } from 'fs'

describe('Aicss Compiler', () => {
  const testFilePath = 'tests/sample.aicss'
  const outputFilePath = 'dist/output.css'

  beforeAll(() => {
    // Simpan contoh file AICSS
    require('fs').writeFileSync(
      testFilePath,
      `ai.button = {
        background: "black";
        color: "white";
      }`
    )
  })

  afterAll(() => {
    // Hapus file setelah pengujian
    unlinkSync(testFilePath)
    unlinkSync(outputFilePath)
  })

  test('Aicss should compile AI-CSS file into valid CSS', async () => {
    await Aicss(testFilePath) // Jalankan kompilasi

    // Baca hasil output
    const compiledCSS = readFileSync(outputFilePath, 'utf8')

    // Periksa apakah CSS yang dihasilkan sesuai dengan harapan
    expect(compiledCSS).toContain('.button {')
    expect(compiledCSS).toContain('  background: black;')
    expect(compiledCSS).toContain('  color: white;')
  })
})
