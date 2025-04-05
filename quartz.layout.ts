import { title } from "node:process"
import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { QuartzPluginData } from "./quartz/plugins/vfile"

// constant configs


const explorerConfig = {
  filterFn: (node: FileTrieNode) => !(node.data?.tags.includes("explorer-exclude") === true),
  mapFn: (node: FileTrieNode) => {
    // dont change name of root node
    if (!node.isFolder) {
      // set emoji for file/folder      
        node.displayName = "🔸 " + node.displayName
    }
  },
  sortFn: (a: FileNode, b: FileNode) => {
    const dateA = a.file?.frontmatter?.["date modified"]
      ? new Date(a.file.frontmatter["date modified"])
      : new Date(0);
    const dateB = b.file?.frontmatter?.["date modified"]
      ? new Date(b.file.frontmatter["date modified"])
      : new Date(0);
    return dateB.getTime() - dateA.getTime(); 
  },
  folderDefaultState: "collapsed", 
}


const recentNotesConfig = {
  showTags: false, 
  title: "Recently modified notes", 
  showDate: true,
  excludeTags: ["recents-exclude"],
  filter: 
  (f: QuartzPluginData) => !f.slug!.startsWith("tags/") && !f.slug!.endsWith("/index") && !f.filePath!.endsWith("index.md")
}



// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.OnlyFor(
      { titles: ["welcome to my own corner on the web"] },
      Component.RecentNotes(recentNotesConfig)
    )], 
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/Shinenite/playground",
      "Portfolio": "https://lainesdesigned.com/",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
      ],
    }),
    Component.Explorer(explorerConfig),
  ],
  right: [
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
      ],
    }),
    Component.Explorer(explorerConfig),
  ],
  right: [
    Component.OnlyFor(
      { titles: ["avoidance journey"] },
      Component.DesktopOnly(Component.TableOfContents()),
      Component.Backlinks(),
    )
  ],
}
