/** API RESPONSE TYPES **/

// Section
export type Section =
  | 'overview'
  | 'guides'
  | 'hardware'
  | 'vision'
  | 'rl'
  | 'blueprints'
  | 'code'
  | 'legal'
  | 'about'

// who a page is written for
export type Audience = 'visitor' | 'builder' | 'contributor'

// what a page is
export type Kind = 'overview' | 'guide' | 'reference' | 'concept'

// sidebar group on a top-level nav node
export type TopGroup =
  | 'Start here'
  | 'Build and operate'
  | 'Under the hood'
  | 'About'

// a single heading inside PageEntry
export interface Heading {
  level: number
  text: string
  id: string
}

// One item in the manifest's pages list
export interface PageEntry {
  route: string
  title: string
  section: Section
  source: string
  updated: string
  audience: Audience
  kind: Kind
  summary: string
  headings: Heading[]
  parent: string | null
  order: number
  group?: string // a TopGroup on top-level pages, a folder README group label on children
}

// NavNode
// one node in the manifest's nav tree
export interface NavNode {
  route: string
  title: string
  section: Section
  order: number
  folder?: boolean
  group?: string // a TopGroup on top-level nodes, a folder README group label on children
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
