import './NavItem.less'
import { useState } from 'react'
import { NavLink } from 'react-router'
import type { NavNode } from '../../docs/types.ts'

export interface NavItemProps {
    node: NavNode
}

// get the NavItem data
function NavItem({ node }: NavItemProps) {

  // check if the node contains children
  const hasChildren = node.children && node.children.length > 0
  const [ isOpen, setIsOpen ] = useState<boolean>(false)

  return (
    <li className={`Nav-list-item ${isOpen ? 'open' : ''}`}>

        <div className={`Nav-section ${isOpen ? 'open' : ''}`} onClick={() => {if(hasChildren) {setIsOpen(!isOpen)}}}>
            <NavLink className="Nav-list-item-link" to={`/${node.route}`} end={node.route === ''}>{node.title}</NavLink>
            {hasChildren && (
                <button className="Nav-list-item-toggle" type="button" aria-label="Toggle Item Navigation">
                    <svg className="chevron-down" width="24px" height="24px" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </button>
            )}
        </div>
        {hasChildren && isOpen && (
            <ul className="Nav-list-item-children">
                {node.children?.map((child) => (
                    <NavItem key={child.route} node={child} />
                ))}
            </ul>
        )}

    </li>
  )}

  export default NavItem