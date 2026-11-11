import { useState, useEffect } from 'react'
import { loadPage } from '../docs/bundle.ts'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import './PageContent.less'

export interface PageContentProps {
    route: string
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
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {content}
        </ReactMarkdown>
    </div>
  )}

  export default PageContent