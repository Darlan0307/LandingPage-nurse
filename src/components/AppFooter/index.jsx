import './styles.scss'

import logo from '../../assets/logo.png';
import { FaWhatsapp,FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";

const Rodape = () => {
  return (
    <footer className='footer' id='contatos'>
      <a href="#home" className='link-logo'>
        <img src={logo} alt="Logo" />
      </a>

      <p className='slogan'> Cuidando da sua saúde com carinho e expertise.</p>

      <ul className='redesSociais'>
        <li>
          <a href="https://api.whatsapp.com/send?phone=5581989402021&text=Oii!%20tudo%20bom?" target='_blank' rel="noopener noreferrer">
          <FaWhatsapp/>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/this_is_bea_/" target='_blank' rel="noopener noreferrer">
          <FaInstagram/>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/Bea__vic?t=IME0eG_zoApl5lf5C5b82g" target='_blank' rel="noopener noreferrer">
          <CiTwitter/>
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Rodape