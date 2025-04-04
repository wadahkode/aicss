import { getEventHandlers } from './eventHandlers'
import { transformAICSS } from './transformer'

export async function loadAICSS(file: string) {
  try {
    const moduleUrl = `/public/aicss/${file}.aicss?timestamp=${Date.now()}`
    const response = await fetch(moduleUrl)
    let text = await response.text()
    text = transformAICSS(text)

    return new Function(`return ${text}`)()
  } catch (error) {
    console.error(`❌ Error loading ${file}.aicss:`, error)
    return null
  }
}

export async function applyAICSS(config: any) {
  if (!config || !config.component) return

  const eventHandlers = await getEventHandlers()

  config.component.forEach((comp: any) => {
    //const classElements = document.querySelectorAll<HTMLElement>(
    //`.${comp.name}`
    //)
    const elements = document.querySelectorAll<HTMLElement>(
      `[v-ai="${comp.name}"]`
    )

    //const elements = [...classElements, ...attrElements]

    elements.forEach((el) => {
      el.setAttribute('data-aicss', 'applied')
      el.setAttribute('v-ai', 'applied')

      Object.assign(el.style, comp.styles)

      Object.entries(eventHandlers).forEach(([prop, eventName]) => {
        if (comp[prop]) {
          el.removeEventListener(eventName, comp[prop])
          el.addEventListener(eventName, comp[prop])
        }
      })
    })
  })
}

// 🔄 Watch perubahan file AICSS
export function watchAICSS() {
  setInterval(async () => {
    const config = await loadAICSS('globals')
    if (config) applyAICSS(config)
  }, 2000)
}
