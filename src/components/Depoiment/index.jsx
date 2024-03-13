import './styles.scss'
import { Swiper, SwiperSlide } from 'swiper/react'

import { DataDepoiment } from '../../DB/DataDepoiment'
import { useMediaQuery } from 'react-responsive';


const Depoiment = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 500px)' });

  return (
    <section className='depoiment'>
      <h2 className='subtitle'>Veja alguns depoimentos dos clientes</h2>

      <Swiper
          slidesPerView={1}
          loop= {true}
          navigation = {isMobile ? false :  true}
          autoplay={{
            delay:2500,
            disableOnInteraction: true
          }
          }
          >
            {DataDepoiment.map((depoiment,index)=>(
              <SwiperSlide className='container-card' key={index}>
                <article className='card'>
                  <img className='img-person' src={depoiment.image} alt={depoiment.name} />
                  <div className='content-card'>
                    <p className='depoiment-content'>{depoiment.description}</p>
                    <h3 className='name-content'>{depoiment.name}</h3>
                  </div>
                </article>
              </SwiperSlide> 
            ))}
      </Swiper>   
    </section>
  )
}

export default Depoiment