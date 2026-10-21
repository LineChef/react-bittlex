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
export interface Heading {
  level: number
  text: string
  id: string
}

// PageEntry
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
export interface Manifest {
  version: string
  built: string
  repo: string | null
  branch: string
  base: string
  assetsUrl: string
  pages: PageEntry[]
  nav: NavNode[]
  assets: Asset[]
}

// SearchRecord
export interface SearchRecord {
  route: string
  title: string
  section: Section
  headings: string[]
  text: string
}

/** API RESPONSE TYPES **/
