import React from 'react';
import Header from '../../Components/HeaderAuth';
import Footer from '../../Components/Footer'
import emoji from '../../assets/EmojiSmile.png'
import Person from '../../assets/Person.png'
import Phone from '../../assets/Phone.png'
import Lock from '../../assets/Lock.png'
import Instagram from '../../assets/Instagram2.png'
import Envelope from '../../assets/Envelope.png'
import Right from '../../assets/ChevronRight.png'
import Coin from '../../assets/Coin.png'
import Out from '../../assets/out.png'

import './styles.css';

function Settings({ history, user }) {
    return (
        <main>
            <Header history={history} type='backMode' />
            <div style={{
                width: '80%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',

            }}>
                <span style={{
                    padding: 8,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#F2F2F2',
                    borderRadius: 20,
                    marginRight: 16
                }}>
                    <img alt='emoji' src={emoji} />
                </span>
                <h4>Olá usernanme</h4>
            </div>

            <form className='form'>
                
                    <span>
                        <img alt='icone de Pessoa' src={Person} />
                        Meus dados
                    </span>

                

                <div className='container'>
                    <label>Nome</label>
                    <div className='formInput'>
                        <img alt='username' src={Person} />
                        <input type='text' value='username' disabled />

                    </div>
                </div>
                <div className='container'>
                    <label>Instagram</label>
                    <div className='formInput'>
                        <img alt='instagram' src={Instagram} />
                        <input type='text' value='@spideuser' disabled />

                    </div>
                </div>
                <div className='container'>
                    <label>E-mail</label>
                    <div className='formInput'>
                        <img alt='E-mail' src={Envelope} />
                        <input type='email' value='username@gmail.com' disabled />

                    </div>
                </div>
                <div className='container'>
                    <label>Telefone</label>
                    <div className='formInput'>
                        <img alt='Telefone' src={Phone} />
                        <input type='tel' placeholder='+244 999 111 222' disabled />

                    </div>
                </div>
                <div className='container'>
                    <label>Nova senha</label>
                    <div className='formInput'>
                        <img alt='icone de senha' src={Lock} />
                        <input type='password' placeholder='Nova senha'  />

                    </div>
                </div>
                <div className='container'>
                    <label>Repita nova senha</label>
                    <div className='formInput'>
                        <img alt='icone de senha' src={Lock} />
                        <input type='password' placeholder='Repita nova senha' />

                    </div>
                </div>

                <div className='container'>
                    <label>Senha antiga</label>
                    <div className='formInput'>
                        <img alt='icone de senha' src={Lock} />
                        <input type='password' placeholder='Senha antiga'  />

                    </div>
                </div>

            </form>

            <a href='#' className='addMoney'>
                <span>
                <img src={Coin} />
                Adicionar saldo
                </span>

                <img src={Right} />
            </a>
            <a href='#' className='addMoney' style={{
                marginBottom: 64
            }}>
                <span>
                <img alt='icone de moeda' src={Out} />
                Desconectar conta
                </span>

                <img alt='icone de sair' src={Right} />
            </a>

            <Footer history={history} />


        </main>
    )
}

export default Settings;