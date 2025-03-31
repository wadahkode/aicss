export function transform(
  parsed: Record<string, Record<string, string>>
): string {
  let cssOutput = ''

  for (const selector in parsed) {
    cssOutput += `.${selector} {\n`

    for (const prop in parsed[selector]) {
      // Periksa apakah nilai harus tetap menggunakan tanda kutip
      if (!shouldKeepQuotes(parsed[selector][prop])) {
        cssOutput += `  ${prop}: ${parsed[selector][prop].replace(/^"(.*)"$/, '$1')};\n` // Hapus tanda kutip hanya jika tidak diperlukan
      } else {
        cssOutput += `  ${prop}: ${parsed[selector][prop]};\n`
      }
    }

    cssOutput += `}\n`
  }

  return cssOutput
}

// Fungsi untuk menentukan apakah nilai harus tetap menggunakan tanda kutip
function shouldKeepQuotes(value: string): boolean {
  // Jika nilai mengandung spasi atau titik koma di dalamnya, pertahankan tanda kutip
  if (/\s/.test(value) || /;/.test(value)) return true

  // Jika nilai adalah warna CSS umum atau angka/unit, tidak perlu tanda kutip
  const cssKeywords = [
    'black',
    'white',
    'red',
    'blue',
    'green',
    'yellow',
    'transparent',
    'inherit',
    'initial',
    'unset',
  ]
  const isColor = cssKeywords.includes(value.toLowerCase())

  const isNumberOrUnit = /^[0-9]+(px|em|rem|vh|vw|%)?$/.test(value)

  return !(isColor || isNumberOrUnit)
}

//export function transform(
//parsed: Record<string, Record<string, string>>
//): string {
//let css = ''

//for (const selector in parsed) {
//css += `${selector} {\n`
//for (const prop in parsed[selector]) {
//css += `  ${prop}: ${parsed[selector][prop]};\n`
//}
//css += `}\n\n`
//}

//return css
//}
