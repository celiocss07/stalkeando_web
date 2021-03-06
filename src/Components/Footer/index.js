import React from 'react';
import logo from '../../assets/Horizontal.app.png';
import FBIcon from '../../assets/Facebook.png';
import TwitterIcon from '../../assets/Twitter.png';
import InstaIcon from '../../assets/Instagram.png';
import LinkedinIcon from '../../assets/Linkedin.png';
import './styles.css';

import AppleIcon from './../../assets/AppStore.png'
import GoogleIcon from './../../assets/GooglePlay.png'

function Footer({ history}) {
    return (
        <footer>
            <a  onClick={ ( ) => {
                    history.push('/')
                }}>
                <img src={logo} />
            </a>

            <div className='divLogo'>
                <a href='#' className='iconBox'>
                    <img src={InstaIcon} />
                </a>
                <a href='#' >
                    <img src={FBIcon} />
                </a>
                <a href='#' >
                    <img src={TwitterIcon} />
                </a>
                <a href='#' >
                    <img src={LinkedinIcon} />
                </a>
            </div>

            <p>
                Para atendimento e suporte ao cliente, envie um e-mail para: suporte@stalkeando.app
            </p>

            <div className='lojaBox'>
                <a href='#' >
                    <img src={AppleIcon} />
                </a>
                <a href='#' >
                    <img src={GoogleIcon} />
                </a>
            </div>
            <div className='lojaBox'>
                <a  onClick={ ( ) => {
                    history.push('/Terms')
                }} >
                    Termos e condições, políticas de privacidade.
                </a>
                <a href='#' >
                    Todos os direitos reservados 2021 stalkeando.app
                </a>
            </div>
        </footer>
    )
}

export default Footer;