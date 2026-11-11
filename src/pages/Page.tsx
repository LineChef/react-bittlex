import { useParams } from 'react-router'
import PageContent from './PageContent.tsx'

// get the Page data
function Page() {
    const params= useParams()
    const route = params['*'] ?? ''
    console.log('route = ' + route)

    return (
        <PageContent route={route} key={route} />
    )}

export default Page