import type { Latest, Manifest } from './types.ts'

// the base URL of the docs bundle, from .env
export const BUNDLE = import.meta.env.VITE_DOCS_BUNDLE_URL

// fetch a URL and return its JSON as type T
async function getJson<T>(url: string, init?: RequestInit): Promise<T> {
    // fetch, throw an error if the response isn't 200, return the parsed JSON
    const response = await fetch(url, init)
    if (!response.ok) throw new Error(`${response.status} for ${url}`)
    return response.json() as Promise<T>
}

// fetch latest.json to get the version, then fetch the manifest with that version
export async function loadManifest(): Promise<Manifest> {
    const latest = await getJson<Latest>(`${BUNDLE}/latest.json`, { cache: 'no-cache' })
    return getJson<Manifest>(`${BUNDLE}/${latest.manifest}?v=${latest.version}`)
}

// fetch a single page
export async function loadPage(route: string): Promise<string> {
    const manifest = await loadManifest()
    const name = route || 'index'
    const response = await fetch(`${BUNDLE}/pages/${name}.md?v=${manifest.version}`)

    if (response.status === 404) {
        throw Error('not-found')
    }

    if (!response.ok) {
        throw Error('response.status')
    }

    return response.text()
}