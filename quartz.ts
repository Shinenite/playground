import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import * as ExternalPlugin from "./.quartz/plugins"
import { registerCondition } from "./quartz/plugins/loader/conditions" //index-only condition
registerCondition("index-only", (props) => props.fileData.slug === "index") 

// Advanced: pass callback functions that can't be expressed in YAML
ExternalPlugin.Explorer({
  filterFn: (node) => {
    // set containing names of everything you want to filter out
    const omit = new Set(["_secrets"])
 
    // can also use node.slug or by anything on node.data
    // note that node.data is only present for files that exist on disk
    // (e.g. implicit folder nodes that have no associated index.md)
    return !omit.has(node.displayName.toLowerCase())
  },
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
