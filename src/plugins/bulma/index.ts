import { Plugins } from '../types'

export default {
  init(plugins?: Plugins | Plugins[]) {
    console.log('🔌 Loading plugin: bulma')
    console.log('✅ Bulma plugin is active.')
  },
  processRules(rules: any) {
    return rules
  },
}
