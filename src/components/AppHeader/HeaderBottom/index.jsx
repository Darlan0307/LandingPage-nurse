import './styles.scss'
import imgPerson from '../../../assets/Group 36.png'

const HeaderBottom = () => {
  return (
    <section className='header-bottom'>
      <img className='img-person' src={imgPerson} alt="Imagem de victoria" />
      <div className='info'>
        <span className='welcome'>Seja bem-vindo(a)!</span>
        <h1>Victoria Beatriz <span>Tec. Enfermagem</span>pronta para ajudar!</h1>
        <p>Cuidados de saúde de qualidade em que você pode confiar</p>
        <a href="https://www.instagram.com/this_is_bea_/" target='_blank' rel="noopener noreferrer">Descubra Mais</a>
      </div>
    </section>
  )
}

export default HeaderBottom