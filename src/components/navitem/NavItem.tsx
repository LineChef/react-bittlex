import './NavItem.less'
import type { NavNode } from '../../docs/types.ts'

export interface NavItemProps {
    node: NavNode
}

// get the NavItem data
function NavItem({ node }: NavItemProps) {

  return (
    <li className="Nav-list-item">
        <a href={node.route}>{node.title}</a>
    </li>
  )}

  export default NavItem