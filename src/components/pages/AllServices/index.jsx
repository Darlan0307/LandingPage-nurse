import './styles.scss'
import { DataServices } from '../../../DB/DataServices';
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
import HeaderTop from '../../AppHeader/HeaderTop';
import { useEffect,useRef } from 'react';
import { IoHomeSharp } from "react-icons/io5";

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const AllServices = () => {

  const container = useRef(null)

  useGSAP(() => {
    gsap.fromTo(container.current.querySelectorAll('.card'), {
      opacity: 0,
      x:500,
    }, {
      x: 0, 
      opacity: 1,
      ease: "back.inOut",
      duration: 1,
      stagger: .3
    });
  }, []);



  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <>
      <HeaderTop textTitle='Todos os Serviços de Victoria'/>
      <section className='all-services' >
      <div className='cards' ref={container}>
      {DataServices.map(service => (
        <article key={service.id} className="card">
          <h3 className='title-card'>{service.title}</h3>
          <p className='text-card'>{service.description}</p>
          <a className='link-card' href={service.link} target='_blank'  rel='noreferrer'>
            <FaArrowRight/>
          </a>
        </article>
      ))}
      
      </div>
      <Link to="/" className='link-back'>
        <IoHomeSharp/>
      </Link>
    </section>
    </>
  )
}

export default AllServices