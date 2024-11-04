import '../navbar/navbar.css';

import React, { useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import { BsFillTelephoneFill } from "react-icons/bs";
import Logo from '../../assets/logoEF.png';


import { Divider } from '@nextui-org/react';

const Navigation = () => {

  const redirection = () =>{

    window.location = "#tlfs";

  }


  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNav = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        // Hacia abajo
        setShowNav(false);
      } else {
        // Hacia arriba
        setShowNav(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNav);
    return () => {
      window.removeEventListener('scroll', controlNav);
    };
  }, [lastScrollY]);

  return (

    <div className="nav-container">
      
      <h1 className='title-nav'>Info Dana Valencia</h1>

      <img src={Logo} className='logo-navbar'></img>

      {/* Botón ayuda */}
     
      <Button className='button-nav' onClick={redirection}  variant="contained">Ayuda<BsFillTelephoneFill />
    </Button>
   

      {/* <nav className={`navigation ${showNav ? 'nav-visible' : 'nav-hidden'}`}>
        <ul>
          <li>
            <a href="#home">Inicio</a>
          </li>
          <Divider orientation="vertical" className="divi" />

          <li>
            <a href="#about">Puntos de encuentro</a>
          </li>
          <Divider orientation="vertical" className="divi" />
          <li>
            <a href="#projects">Materiales</a>
          </li>
          <Divider orientation="vertical" className="divi" />
          <li>
            <a href="#projects">Contactos</a>
          </li>
         
        </ul>
      </nav> */}

    
    </div>
  );
};

export default Navigation;
