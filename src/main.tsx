import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const rootElement = document.getElementById('root')

// throw an error if the root element is not defined
if (rootElement === null) {
  throw new Error('root element is not defined')
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
