import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import HeaderTop from './AppHeader/HeaderTop'
import Home from './pages/Home'
import AllServices from './pages/AllServices'


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'  element={<Home/>}></Route>
        <Route path='allservices' element={<AllServices/>}/>
      </Routes>

    </BrowserRouter>
  )
}

export default AppRoutes