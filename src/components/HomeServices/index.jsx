import './styles.scss'
import { DataServices } from '../../DB/DataServices'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";

const HomeServices = () => {

  const PrimaryServices = DataServices.slice(0,4)

  return (
    <section className='home-services' id="services">
      <p>Serviços e Tratamentos</p>
      <h2 className='title'>Veja os principais serviços de Victoria</h2>
      <div className='cards'>
      {PrimaryServices.map(service => (
        <article key={service.id} className="card">
          <span className='title-card'>
            {service.icon}
            <h4>{service.title}</h4>
          </span>
          <p className='text-card'>{service.description}</p>
          <a className='link-card' href={service.link} target='_blank'  rel='noreferrer'>
            <FaArrowRight/>
          </a>
        </article>
      ))}
      </div>
      <Link to="/allservices" className='link-more'>
        Ver todos os Serviços
      </Link>
    </section>
  )
}

export default HomeServices