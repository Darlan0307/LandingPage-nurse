import { useEffect,useRef } from 'react'
import HeaderBottom from '../../AppHeader/HeaderBottom'
import HeaderTop from '../../AppHeader/HeaderTop'
import Dedicated from '../../Dedicated'
import HomeServices from '../../HomeServices'
import ChooseUs from '../../ChooseUs'
import Depoiment from '../../Depoiment'

const Home = () => {
  const container = useRef(null)

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])


  return (
    <>
      <HeaderTop/>
      <div>
        <HeaderBottom/>
        <Dedicated/>
        <HomeServices/>
        <ChooseUs/>
        <Depoiment/>
      </div>
    </>
  )
}

export default Home