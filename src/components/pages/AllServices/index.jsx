import './styles.scss'
import { DataServices } from '../../../DB/DataServices';
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
import HeaderTop from '../../AppHeader/HeaderTop';
import { useEffect } from 'react';
import { IoHomeSharp } from "react-icons/io5";

const AllServices = () => {

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <>
      <HeaderTop textTitle='Todos os Serviços de Victoria'/>
      <section className='all-services'>
      <div className='cards'>
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