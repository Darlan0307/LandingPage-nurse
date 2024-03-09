import './styles.scss'
import { useMediaQuery } from 'react-responsive';
import logo from '../../../assets/logo.png'
import { TiThMenu } from "react-icons/ti";
import { IoIosCloseCircle } from "react-icons/io";
import { useRef } from 'react';

const HeaderTop = () => {
  
  const isMobile = useMediaQuery({ query: '(max-width: 800px)' });

  const refMenu = useRef()

  const handleMenu = () => {
    refMenu.current.classList.toggle('open')
  }
  return (
    <header className='header-top'>
      <img className='logo' src={logo} alt="logo do website" />

      {isMobile && <button
      className='btn-open'
      onClick={()=>handleMenu()}
      ><TiThMenu/></button>}

      <nav ref={refMenu} className={`navigation ${isMobile ?  "mobile" : ""}`}>

        {isMobile && <button
        className='btn-close'
        onClick={()=>handleMenu()}  
        ><IoIosCloseCircle/></button>}

        <ul className='menu'>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Serviços</a>
          </li>
          <li>
            <a href="#">Depoimentos</a>
          </li>
          <li>
            <a href="#">Contatos</a>
          </li>
        </ul>

        <a href="#" className='link-phone'>Fale Comigo</a>
      </nav>
    </header>
  )
}

export default HeaderTop