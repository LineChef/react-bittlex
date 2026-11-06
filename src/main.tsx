import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.less'
import Nav from './components/nav/Nav.tsx'
// import { loadManifest } from './docs/bundle.ts'
// import { loadPage } from './docs/bundle.ts'

// console.log("Vite Docs Bundle Url = " + import.meta.env.VITE_DOCS_BUNDLE_URL)
// loadManifest().then(console.log)
// console.log('loadPage results = ')
// loadPage('').then(console.log)


const rootElement = document.getElementById('root')

// throw an error if the root element is not defined
if (rootElement === null) {
  throw new Error('root element is not defined')
}

createRoot(rootElement).render(
  <StrictMode>
    <Nav />
  </StrictMode>,
)
