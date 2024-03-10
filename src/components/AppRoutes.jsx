import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import HeaderTop from './AppHeader/HeaderTop'
import HeaderBottom from './AppHeader/HeaderBottom'


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <HeaderTop/>

      <Routes>
        <Route path='/'  element={
          <HeaderBottom />
          // Home
        }></Route>
      </Routes>

    </BrowserRouter>
  )
}

export default AppRoutes