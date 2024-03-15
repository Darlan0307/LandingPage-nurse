import { useEffect,useRef } from 'react'
import HeaderBottom from '../../AppHeader/HeaderBottom'
import HeaderTop from '../../AppHeader/HeaderTop'
import Dedicated from '../../Dedicated'
import HomeServices from '../../HomeServices'
import ChooseUs from '../../ChooseUs'
import Depoiment from '../../Depoiment'
import Location from '../../Location'
import Rodape from '../../AppFooter'

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
        <Location/>
        <Rodape/>
      </div>
    </>
  )
}

export default Home