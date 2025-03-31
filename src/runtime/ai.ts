import { AIStore } from './store'

export const ai = new Proxy(
  {},
  {
    get(_, prop: string) {
      return (styles: Record<string, string>) => AIStore.set(prop, styles)
    },
  }
)
