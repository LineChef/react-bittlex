import './NavItem.less'
import type { NavNode } from '../../docs/types.ts'

export interface NavItemProps {
    node: NavNode
}

// get the NavItem data
function NavItem({ node }: NavItemProps) {

  // check if the node contains children
  const hasChildren = node.children && node.children.length > 0

  return (
    <li className="Nav-list-item">
        <a className="Nav-list-item-link" href={node.route}>{node.title}</a>
        {hasChildren && (
            <ul className="Nav-list-item-children">
                {node.children?.map((child) => (
                    <NavItem key={child.route} node={child} />
                ))}
            </ul>
        )}
    </li>
  )}

  export default NavItem