import { parse } from './core/parser'
import { transform } from './core/transformer'
import { writeCSS } from './core/writer'
import { setupAiCss } from './runtime/setup'
import { AIStore } from './runtime/store'
import { readAICSSFile } from './utils/fileReader'

async function Aicss(filePath?: string) {
  try {
    const rawContent = await readAICSSFile(filePath)

    // Proses AI-CSS menjadi struktur data, dan secara otomatis menyimpan ke AIStore
    const parsed = parse(rawContent)

    // (Opsional) Gunakan data dari AIStore untuk debugging atau pemrosesan lebih lanjut
    console.log('AIStore data:', AIStore.getAll())

    // Terapkan konfigurasi AI-css
    setupAiCss()

    // Lakukan transformasi aturan menjadi CSS standar
    const transformed = transform(parsed)

    // Tulis hasilnya ke file output
    writeCSS('runtime/output.css', transformed)

    console.log('✅ AI-CSS berhasil dikompilasi!')
  } catch (error: any) {
    console.error('Compile failed: ', error.message)
  }
}

export { Aicss }
