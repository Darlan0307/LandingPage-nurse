import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import HeaderTop from './AppHeader/HeaderTop'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <HeaderTop/>

      {/* <Routes>
        <Route path='/'  element={<Home />}></Route>
      </Routes> */}

    </BrowserRouter>
  )
}

export default AppRoutes