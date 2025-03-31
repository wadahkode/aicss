import fs from 'fs/promises'
import path from 'path'

export async function readAICSSFile(
  filePath: string = 'styles/global.aicss'
): Promise<string> {
  try {
    const resolvedPath = path.resolve(filePath)
    const content = await fs.readFile(resolvedPath, 'utf-8')
    return content
  } catch (error: any) {
    throw new Error(`Failed to read AICSS file: ${error.message}`)
  }
}
