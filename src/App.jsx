import { Fragment } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'

function App() {

  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Home />} >
          </Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  )
}

export default App
