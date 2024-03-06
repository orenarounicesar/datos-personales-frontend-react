import React, { Fragment } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../views/Home'
import Error_404 from '../views/Error_404'

const AppRoutes = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="*" element={<Error_404/>} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  )
}

export default AppRoutes
