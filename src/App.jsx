import { Fragment, useState } from 'react'

import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import List from './components/List'

function App() {

  return (
    <Fragment>
          <BrowserRouter>
          <Routes>
            <Route path="/*" element={<Home/>} >
              <Route path='' element={<List/>} />
              </Route>

          </Routes>
          </BrowserRouter>
    </Fragment>
  )
}

export default App
