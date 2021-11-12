import React from 'react';
import './styles.css';
import logo from '../../assets/Horizontal.app.png';

function Header({ history }) {

  function navigation(route){

    history.push(`/${route}`)
  }
  return (
    <header className="Header">
      <nav className="Menu">
        <a  className='FaqsLink' onClick={ () => navigation('')}>
          <img src={logo} height='29px;' width='189px' />
        </a>


        <div className='List'>
          <a className='FaqsLink' onClick={ () => navigation('Faqs')}> FAQ</a>
          <a href='#' className='LoginBtn'> Cadastrar</a>
          <a href='/Faqs' className='SignUpBtn' > Fazer Login</a>
        </div>
      </nav>
      
    </header>
  );
}

export default Header;