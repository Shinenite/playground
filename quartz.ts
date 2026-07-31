import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"

import * as ExternalPlugin from "./.quartz/plugins"
 
// Advanced: pass callback functions that can't be expressed in YAML
ExternalPlugin.Explorer({
  mapFn: (node) => {
    if (node.isFolder) {
      node.displayName
    } else {
      node.displayName = "🔸 " + node.displayName
    }
  },
})

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()

