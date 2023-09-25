import React from 'react'
import { useState } from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faBars} from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import Logo from '../IMG/logo.png'
import { Link } from 'react-router-dom'


function Header() {

  const [isMenuActived, setIsMenuActived] = useState(false);

  function barsActived() {
    setIsMenuActived(!isMenuActived); // Inverta o estado do menu
  }
  function barsDesactived() { 
    setIsMenuActived(!isMenuActived); // Inverta o estado do menu
  }

  function scrollToTop(){
    window.scrollTo(0, 0)
  }
  

  return (
    <div>
      <header >
      <div className="header-container">
        <Link onClick={scrollToTop} to= '/'><img src={Logo} alt="Logo"/></Link>
        <nav onClick={scrollToTop} className={`nav-menu ${isMenuActived ? 'active' : ''}`}>
          <ul>
            <li>
              <Link to= '/' >Inicio</Link>
            </li>
            <li>
              <Link to= 'produtos'>Produtos</Link>
            </li>
            <li>
              <Link to= 'nossaMarca'>Nossa marca</Link>
            </li>
            <li>
              <Link to= 'contato'>Contato</Link>
            </li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li>
              <button>
                <Link onClick={scrollToTop} to= 'favoritos'><FontAwesomeIcon icon={faHeart} /></Link>
              </button>
            </li>
            <li>
              <button>
                <Link onClick={scrollToTop} to= 'user'><FontAwesomeIcon icon={faCircleUser} /></Link>
              </button>
            </li>
            <li>
              <button>
                <Link onClick={scrollToTop} to= 'carrinhoDeCompras'><FontAwesomeIcon icon={faCartShopping} /></Link>
              </button>
            </li>
          </ul>
        </nav>
        <div className="menu-mobile-icon">
          <button className= {`bars ${isMenuActived ? 'active' : ''}`}
          onClick={barsActived}>
            <FontAwesomeIcon icon={faBars} />
            </button>
          <button className={`close ${isMenuActived ? 'active' : ''}`}
          onClick={barsDesactived}>
            <FontAwesomeIcon icon={faXmark} /></button>
        </div>
      </div>
      
        {/* MENU RESPONSIVO  */}
      <div onClick={scrollToTop} className={`menu-mobile ${isMenuActived ? 'active' : ''} `}>
        <ul>
          <li>
            <Link  to= '/'>Inicio</Link>
          </li>
          <li>
            <Link to= 'produtos'>Produtos</Link>
          </li>
          <li>
            <Link to= 'nossaMarca'>Nossa marca</Link>
          </li>
          <li>
            <Link to= 'contato'>Contato</Link>
          </li>
        </ul>
        <nav className="iconMobile">
          <ul>
            <li>
              <button>
                <a href="#"><FontAwesomeIcon icon={faHeart} /></a>
              </button>
            </li>
            <li>
              <button>
                <a href="#"><FontAwesomeIcon icon={faCircleUser} /></a>
              </button>
            </li>
            <li>
              <button>
                <a href="#"><FontAwesomeIcon icon={faCartShopping} /></a>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    </div>
  )
}

export default Header
