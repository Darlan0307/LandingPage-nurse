import './styles.scss'
import img from '../../assets/vivi-2.png'
import { BiSolidCheckboxChecked } from "react-icons/bi";

const ChooseUs = () => {
  return (
    <section className='ChooseUs'>
      <img className='img-ChooseUs' src={img} alt="Choose Us" />
      <div className='info-ChooseUs'>
        <h2>Porque escolher os serviços de Victoria?</h2>
        <p>
          <BiSolidCheckboxChecked/>
          <span>Capacitada para realizar diversos procedimentos.</span>
        </p>
        <p>
          <BiSolidCheckboxChecked/>
          <span>Acolhimento e respeito ao paciente.</span>
        </p>
        <p>
          <BiSolidCheckboxChecked/>
          <span>Comunicação clara e transparente.</span>
        </p>
        <p>
          <BiSolidCheckboxChecked/>
          <span>Atendimento em domicílio ou no consultório.</span>
        </p>
        <p>
          <BiSolidCheckboxChecked/>
          <span>Horários flexíveis para atender às suas necessidades.</span>
        </p>
      </div>  
    </section>
  )
}

export default ChooseUs