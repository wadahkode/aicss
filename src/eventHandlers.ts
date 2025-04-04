import { loadConfig } from './config'

type EventHandlers = { [key: string]: string }

const defaultHandlers = {
  onClick: 'click',
  onMouseOver: 'mouseover',
  onMouseOut: 'mouseout',
  onFocus: 'focus',
  onBlur: 'blur',
  onKeyDown: 'keydown',
  onKeyUp: 'keyup',
}

let eventHandlers: EventHandlers = { ...defaultHandlers }

export async function getEventHandlers() {
  const config = await loadConfig()

  // Gabungkan event default dengan event custom dari user
  eventHandlers = {
    ...defaultHandlers,
    ...(config.eventMap || {}),
  }

  return eventHandlers
}
