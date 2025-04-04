export async function loadConfig() {
  try {
    const response = await fetch('/aicss.config.json?' + Date.now()) // Hindari cache
    if (!response.ok) throw new Error('Failed to load config')
    return await response.json()
  } catch (error) {
    console.warn('⚠️ Config not found, using defaults.')
    return {}
  }
}
