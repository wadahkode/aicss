export function formatAICSS(input: string): string {
  return input
    .replace(/,\s*/g, ';') // Ubah koma menjadi titik koma
    .replace(/\s*:\s*/g, ': ') // Pastikan ada spasi setelah titik dua
    .replace(/\s*{\s*/g, ' {\n  ') // Tambahkan newline setelah `{`
    .replace(/\s*}\s*/g, '\n}') // Tambahkan newline sebelum `}`
    .replace(/-\s*/g, '  ') // Gantilah `- ` di awal properti menjadi indentasi
    .trim()
}
