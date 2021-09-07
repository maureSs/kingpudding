import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
// Styles
import { Wrapper } from './Navbar.styles';
// Images
import fbIcon from '../images/fbIcon.png';
import igIcon from '../images/igIcon.png';

function Navbar() {
  return (
    <Wrapper>
      <div className='nav-container'>
        <ul>
          <li>
            <Link to='/' className='nav-item'>
              <h3>Inicio</h3>
            </Link>
          </li>
          <li>
            <Link to='/about' className='nav-item'>
              <h3>Sobre</h3>
            </Link>
          </li>
          <div>
            <h1>KINGPUDDING</h1>
          </div>
          <li>
            <Link to='/menu' className='nav-item'>
              <h3>Productos</h3>
            </Link>
          </li>
          <li>
            <HashLink smooth to='#contact' className='nav-item'>
              <h3>Contacto</h3>
            </HashLink>
          </li>
        </ul>
        <div className='social-media'>
          <a
            target='_blank'
            href='https://www.facebook.com/groups/112410426105415'
            rel='noopener noreferrer'
          >
            <img src={fbIcon} alt='facebook' />
          </a>
          <a
            target='_blank'
            href='https://www.instagram.com/fabi.rey/?hl=en'
            rel='noopener noreferrer'
          >
            <img src={igIcon} alt='instagram' />
          </a>
        </div>
      </div>
      <div className='mobile-nav-container'>
        <details>
          <summary></summary>
          <nav className='mobile-menu'>
            <Link to='/' className='nav-item'>
              <h3>Inicio</h3>
            </Link>
            <Link to='/about' className='nav-item'>
              <h3>Sobre</h3>
            </Link>
            <Link to='/menu' className='nav-item'>
              <h3>Productos</h3>
            </Link>
            <HashLink smooth to='#contact' className='nav-item'>
              <h3>Contacto</h3>
            </HashLink>
          </nav>
        </details>
        <h1>KINGPUDDING</h1>
      </div>
    </Wrapper>
  );
}

export default Navbar;
