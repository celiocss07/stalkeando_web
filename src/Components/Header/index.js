import React from 'react';
import './styles.css';
import logo from '../../assets/Horizontal.app.png';

function Header() {
  return (
    <header className="Header">
      <nav className="Menu">
        <a href='#' className='FaqsLink'>
          <img src={logo} height='29px;' width='189px' />
        </a>


        <div className='List'>
          <a href='#' className='FaqsLink'> Faqs</a>
          <a href='#' className='LoginBtn'> Login</a>
          <a href='#' className='SignUpBtn'> Fazer Login</a>
        </div>
      </nav>
    </header>
  );
}

export default Header;