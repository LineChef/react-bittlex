import { Routes, Route } from 'react-router'
import Nav from './components/nav/Nav.tsx'
import Page from './pages/Page.tsx'
import './App.less'

// get the Page data
function App() {

    return (
        <div className="App">
            <Nav />
            <main className="App-content">
                <Routes>
                    <Route path="*" element={<Page />} />
                </Routes>
            </main>
        </div>
    )
}

export default App