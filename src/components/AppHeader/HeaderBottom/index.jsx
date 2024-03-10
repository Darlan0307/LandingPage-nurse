import './styles.scss'
import imgPerson from '../../../assets/person.png'

const HeaderBottom = () => {
  return (
    <section className='header-bottom'>
      <img className='img-person' src={imgPerson} alt="Imagem de victoria" />
      <div className='info'>
        <span className='welcome'>Seja bem-vindo(a)!</span>
        <h1>Enfermeira <span>Victoria Beatriz</span> pronta para ajudar!</h1>
        <p>Cuidados de saúde de qualidade em que você pode confiar</p>
        <a href="#">Descubra Mais</a>
      </div>
    </section>
  )
}

export default HeaderBottom