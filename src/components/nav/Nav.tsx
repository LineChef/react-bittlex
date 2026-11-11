import './Nav.less'
import { useState, useEffect } from 'react'
import { loadManifest } from '../../docs/bundle.ts'
import type { Manifest } from '../../docs/types.ts'
import NavItem from '../navitem/NavItem.tsx'

// get the Nav data
function Nav() {
  const [ error, setError ] = useState<Error | null>( null )
  const [ manifest, setManifest ] = useState<Manifest | null>( null )
  const [ isCollapsed, setIsCollapsed ] = useState<boolean>(false)

  useEffect(() => {
    loadManifest().then(setManifest).catch((e) => {
      if (e instanceof Error) {
        setError(e)
        console.log('an error occured:' + e)
      } else {
        setError(new Error(String(e)))
      }
     })
  }, [])

  // console.log(manifest)

  if (error) {
    return <p>{error.message}</p>
  }

  if (manifest === null) {
    return <p>loading...</p>
  }

  console.log('Navigation')
  console.log(manifest.nav)

  return (
    <nav className={`Nav ${isCollapsed ? 'closed' : ''}`} aria-label="Primary Navigation">
      <div className="Nav-header" onClick={() => setIsCollapsed(!isCollapsed)}>
         <h2 className="Nav-title">G2 BittleX</h2>
         <button
           type="button"
           className="Nav-toggle"
           aria-label="Toggle Navigation"
        >
          <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 18L20 18" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
            <path d="M4 12L20 12" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
             <path d="M4 6L20 6" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      <ul className="Nav-list">
        {/* create an li for each Nav node */}
        {manifest.nav.map((node) => (
          <NavItem key={node.route} node={node} />
        ))}
      </ul>
    </nav>
  )}

  export default Nav