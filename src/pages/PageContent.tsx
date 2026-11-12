import { useState, useEffect } from 'react'
import { loadPage, BUNDLE } from '../docs/bundle.ts'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import type { Components } from 'react-markdown'
import { Link } from 'react-router'
import './PageContent.less'

export interface PageContentProps {
    route: string
}

// temp fix for links
const pageLinkPrefix = '/docs'
const fileLinkPrefix = '/docs/_assets'
const components: Components = { // the object
  a: ({ href, children }) => { // the key `a`, and its arrow function
    // what it returns
    if (!href) {
        return <a>{children}</a>
    }
    // if it starts with a file link
    if (href.startsWith(fileLinkPrefix)) {
        const fileUrl = `${BUNDLE}/assets${href.slice(fileLinkPrefix.length)}`
        return <a target="_blank" rel="noopener noreferrer" href={fileUrl}>{children}</a>
    }
    // if it starts with a page link
    if (href.startsWith(pageLinkPrefix)) {
        const pageUrl = href.slice(pageLinkPrefix.length) || '/'
        return <Link to={pageUrl}>{children}</Link>
    }

    return <a href={href}>{children}</a>
  },
}

// get the PageContent data
function PageContent({ route }: PageContentProps) {
  const [ content, setContent ] = useState<string | null>(null)
  const [ error, setError ] = useState<Error | null>(null)

  useEffect(() => {
    let ignore = false
    loadPage(route).then((text) => {if(!ignore){setContent(text)}}).catch((e) => {
        if (!ignore) {
            if (e instanceof Error) {
                setError(e)
                console.log('an error occured:' + e)
            } else {
                setError(new Error(String(e)))
            }
        }
    })
        return () => { ignore = true }
    }, [route])

    if (error) {
        return <p>{error.message}</p>
    }

    if (content === null) {
        return <p>loading...</p>
    }

  return (
    <div className="Page-content">
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}  >
            {content}
        </ReactMarkdown>
    </div>
  )}

  export default PageContent