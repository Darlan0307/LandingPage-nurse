import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import HeaderTop from './AppHeader/HeaderTop'
import Home from './pages/Home'


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <HeaderTop/>

      <Routes>
        <Route path='/'  element={<Home/>}></Route>
      </Routes>

    </BrowserRouter>
  )
}

export default AppRoutes