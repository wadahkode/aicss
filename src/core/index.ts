import { readAICSSFile } from '../utils/fileReader'
import { formatAICSS } from '../utils/formater'

export async function processAICSS(filePath?: string) {
  try {
    const rawContent = await readAICSSFile(filePath)
    const formattedContent = formatAICSS(rawContent)
    console.log('Formatted AICSS Output:\n', formattedContent)
  } catch (error: any) {
    console.error(error.message)
  }
}
