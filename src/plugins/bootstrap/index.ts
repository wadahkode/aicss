import { Plugins } from '../types'

export default {
  init(plugins?: Plugins | Plugins[]) {
    console.log('🔌 Loading plugin: bootstrap')
    console.log('✅ Bootstrap plugin is active.')
  },
  processRules(rules: any) {
    return rules
  },
}
