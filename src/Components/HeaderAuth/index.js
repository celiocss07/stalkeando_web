import React from 'react';
import './styles.css';
import logo from '../../assets/Horizontal.app.png';
import emoji from '../../assets/EmojiSmile.png';
import Left from '../../assets/Left.png';

function Header({ history, type }) {

  console.log(type)
  function navigation(route) {

    if(route == 'back')
    history.goBack()
    else
    history.push(`/${route}`)
    
  }
  return (
    <header className="Header">
      <nav className="Menu">
        {
          type == 'backMode' ?
            (
              <a className='FaqsLink' onClick={() => navigation('back')} style={{
                backgroundColor: '#F2F2F7'
              }}>
                
                <img alt='icone de voltar' src={Left}  />
                voltar
              </a>
            ) :
            (
              <a className='FaqsLink' onClick={() => navigation('')}>
                <img alt='Logo app stalkeando' src={logo} height='29px;' width='189px' />
              </a>
            )
        }


        <div className='List'>

          <a href='#' className='SignUpBtn'> R$ 1.000,00</a>
          <a href='#' className='LoginBtn' > Adicionar saldo</a>
          <a href='#' className='SignUpBtn' onClick={( ) => {
            history.push('/settings')
          }}><img alt='icone de settings' src={emoji} /></a>
        </div>
      </nav>

    </header>
  );
}

export default Header;