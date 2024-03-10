import './styles.scss'
import Avaliacao from '../../assets/services-avaliacao.jpg'
import Cardio from '../../assets/service-cardio.png'
import Curativo from '../../assets//service-curativo.jpg'

const Dedicated = () => {
  return (
    <section className='section-dedicated'>
      <h2 className='subtitle'>Dedicada a promover o melhor tratamento</h2>
      <p>Cuidando da sua saúde com carinho e expertise.A Enfermeira Victoria oferece serviços de enfermagem personalizados para você e sua família.</p>
      <div className='cards'>
        <article className='card'>
          <img src={Avaliacao} alt="imagem de uma enfermeira fazendo avaliação de um paciênte" />
          <h3>Avaliação de saúde</h3>
        </article>

        <article className='card'>
          <img src={Cardio} alt="imagem de uma enfermeira com um equipamento" />
          <h3>cardiologia</h3>
        </article>

        <article className='card'>
          <img src={Curativo} alt="imagem de uma enfermeira fazendo um curativo" />
          <h3>Curativos</h3>
        </article>
      </div>
    </section>
  )
}

export default Dedicated