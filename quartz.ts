import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import * as ExternalPlugin from "./.quartz/plugins"
//index-only for config
import { registerCondition } from "./quartz/plugins/loader/conditions"
registerCondition("index-only", (props) => props.fileData.slug === "index") 

// Advanced: pass callback functions that can't be expressed in YAML

const mapFn: ExplorerOptions["mapFn"] = (node) => {
  if (node.isFolder) {
      node.displayName
    } else {
      node.displayName = "🔸 " + node.displayName
    }
}
const filterFn: ExplorerOptions["filterFn"] = (node) => {
    const omit = new Set(["_secrets", "all posts"])
 
    // can also use node.slug or by anything on node.data
    // note that node.data is only present for files that exist on disk
    // (e.g. implicit folder nodes that have no associated index.md)
    return !omit.has(node.displayName.toLowerCase())
}
const sortFn: ExplorerOptions["sortFn"] = (a, b) => {
    //Two files: newest created date first
    const aDate = a.data?.date
    const bDate = b.data?.date
    if (aDate && bDate) return new Date(bDate).getTime() - new Date(aDate).getTime()
    if (aDate) return -1
    if (bDate) return 1
}

ExternalPlugin.Explorer({
  // ... your other options
  mapFn,
  filterFn,
  sortFn,
})

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()
