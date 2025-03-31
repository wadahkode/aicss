import { writeFileSync } from 'fs'

export function writeCSS(filePath: string, content: string) {
  writeFileSync(filePath, content)
  console.log(`✅ File berhasil disimpan di ${filePath}`)
}
