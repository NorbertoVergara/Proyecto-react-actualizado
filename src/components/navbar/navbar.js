import React from 'react';
import './Navbar.css';
import logo from './logo.png';
import Boton from './BurguerBotton';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <a href="/" className="navbar__logo-link">
          <div className="navbar__logo-container">
            <img src={logo} alt="Logo" className="navbar__logo-img" />
            <div className='nombreLogo'>DIGIBOOTCAMP</div>
          </div>
        </a>
      </div>
      <div className="navbar__buttons">
        <a href='/' className="titulo">Inicio</a>
        <a href='/'>Campamento</a>
        <a href='/'>Bootcamp</a>
        <a href='/'>Boletines</a>
        <a href='/' className="navbar__login">Inicio de Sesión</a>
        <a href='/' className='navbar__registrer'>Registrarse</a>
      </div>
        <div className="burguer">
        <Boton/>
      </div>

    </nav>
  );
}

function Button(props) {
  return (
    <button className={`navbar__button ${props.className}`}>
      {props.title}
    </button>
  );
}

export default Navbar;

