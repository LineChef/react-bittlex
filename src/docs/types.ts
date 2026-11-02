/** API RESPONSE TYPES **/

// Section
export type Section =
  | 'overview'
  | 'guides'
  | 'hardware'
  | 'vision'
  | 'rl'
  | 'research'
  | 'plan-detail'
  | 'planned'
  | 'archive'
  | 'blueprints'
  | 'code'
  | 'legal'
  | 'about'

// Heading
// a single heading inside PageEntry
export interface Heading {
  level: number
  text: string
  id: string
}

// PageEntry
// One item in the manefest's pages list
export interface PageEntry {
  route: string
  title: string
  section: Section
  source: string
  updated: string
  summary: string
  headings: Heading[]
  parent: string | null
  order: number
  group?: string
}

// NavNode
// one node in the manifest's nav tree
export interface NavNode {
  route: string
  title: string
  section: Section
  order: number
  folder?: boolean
  group?: string
  children?: NavNode[]
}

// AssetType (asset type)
export type AssetType =
  | 'png'
  | 'jpg'
  | 'jpeg'
  | 'gif'
  | 'svg'
  | 'pdf'
  | 'html'

// Asset
// one item from the manifest's assets list
export interface Asset {
  path: string
  kind: AssetType
  size: number
}

// Latest

export interface Latest {
  version: string
  built: string
  manifest: string
  search: string
  schema: string
  pageCount: number
  assetCount: number
}

// Manifest
// The site's table of contents (nav tree, pages, assets)
export interface Manifest {
  version: string
  built: string
  repo: string | null
  branch: string
  base: string // url path links use
  assetsUrl: string // where assets are
  pages: PageEntry[] // a flat list of pages
  nav: NavNode[] // data for the navigation
  assets: Asset[]
}

// SearchRecord
// one record from search.json
export interface SearchRecord {
  route: string
  title: string
  section: Section
  headings: string[]
  text: string
}

/** API RESPONSE TYPES **/
