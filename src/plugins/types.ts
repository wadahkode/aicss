export type Plugins = {
  name: string
  version: string
  mode: string
}

export type Setup = {
  plugins?: Plugins | Plugins[]
}
