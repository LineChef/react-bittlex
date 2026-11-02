import './Nav.less'

function Nav() {
  return (
    <nav className="Nav" aria-label="Main Navigation">
      <div className="Nav-header">
        <h3 className="Nav-title">G2 BittleX</h3>
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

      <div className="Nav-section">
        <h2 className="Nav-heading">Overview</h2>
        <ul className="Nav-list">
          <li>
            <a className="Nav-link Nav-link-active" href="#">
              <div className="Nav-icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24px" viewBox="0 0 24 24"><title>home</title><path fill="#fff" d="M4 21V9l8-6l8 6v12h-6v-7h-4v7z"/></svg>
              </div>
              <span className="Nav-label">Home</span>
            </a>
          </li>
          <li>
            <a className="Nav-link" href="#">
              <span className="Nav-icon" aria-hidden="true">📟</span>
              <span className="Nav-label">Status</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="Nav-section">
        <h2 className="Nav-heading">Build</h2>
        <ul className="Nav-list">
          <li>
            <a className="Nav-link" href="#">
              <span className="Nav-icon" aria-hidden="true">🔧</span>
              <span className="Nav-label">Hardware</span>
            </a>
          </li>
          <li>
            <a className="Nav-link" href="#">
              <span className="Nav-icon" aria-hidden="true">🐕</span>
              <span className="Nav-label">Walking</span>
            </a>
          </li>
          <li>
            <a className="Nav-link" href="#">
              <span className="Nav-icon" aria-hidden="true">🎙️</span>
              <span className="Nav-label">Pipeline</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
