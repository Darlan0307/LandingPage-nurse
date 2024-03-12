import { useEffect,useRef } from 'react'
import HeaderBottom from '../../AppHeader/HeaderBottom'
import HeaderTop from '../../AppHeader/HeaderTop'
import Dedicated from '../../Dedicated'
import HomeServices from '../../HomeServices'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Home = () => {
  const container = useRef(null)

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  useGSAP(() => {
    gsap.fromTo(container.current, {
      opacity:0,
      x:-window.innerWidth
    },{
      opacity:1,
      x:0,
      ease: "back.inOut",
      duration: 1.5,
    });
  
  }, { scope: container });

  return (
    <>
      <HeaderTop/>
      <div ref={container}>
        <HeaderBottom/>
        <Dedicated/>
        <HomeServices/>
      </div>
    </>
  )
}

export default Home