import { useEffect } from 'react'
import HeaderBottom from '../../AppHeader/HeaderBottom'
import HeaderTop from '../../AppHeader/HeaderTop'
import Dedicated from '../../Dedicated'
import HomeServices from '../../HomeServices'

const Home = () => {

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <>
      <HeaderTop/>
      <HeaderBottom/>
      <Dedicated/>
      <HomeServices/>
    </>
  )
}

export default Home