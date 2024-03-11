import './styles.scss'
import { useMediaQuery } from 'react-responsive';
import logo from '../../../assets/logo.png'
import { TiThMenu } from "react-icons/ti";
import { IoIosCloseCircle } from "react-icons/io";
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const HeaderTop = ({textTitle=""}) => {
  
  const isMobile = useMediaQuery({ query: '(max-width: 900px)' });

  const refMenu = useRef()

  const handleMenu = () => {
    refMenu.current.classList.toggle('open')
  }

  return (
    <header className={`header-top ${textTitle ? 'header-services' : ''}`} id='home'>
      <Link to="/" className='link-logo'>
        <img className='logo' src={logo} alt="logo do website" />
        <span className='text-logo'>Enfermeira</span>
      </Link>

      {textTitle ? (
        <>
          <h1>{textTitle}</h1>
          <a href="#" className='link-phone'>Fale Comigo</a>
        </>
      ):(
        <>
          {isMobile && <button
      className='btn-open'
      onClick={()=>handleMenu()}
      ><TiThMenu/></button>}

      <nav ref={refMenu} className={`navigation ${isMobile ?  "mobile" : ""}`}
      >
        {isMobile && <button
        className='btn-close'
        onClick={()=>handleMenu()}  
        ><IoIosCloseCircle/></button>}

        <ul className='menu' onClick={()=>handleMenu()}>
          <li>
          <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">Serviços</a>
          </li>
          <li>
            <a href="#depoimentos">Depoimentos</a>
          </li>
          <li>
            <a href="#contatos">Contatos</a>
          </li>
        </ul>

        <a href="#" className='link-phone' onClick={()=>handleMenu()}>Fale Comigo</a>
      </nav>
        </>
      )}
    </header>
  )
}

export default HeaderTop