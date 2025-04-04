export function transformAICSS(code: string): string {
  // Ubah "export default { ... }" menjadi "return ({ ... })"
  return code.replace(/export\s+default\s+/, '(') + ')'
}
