import React from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import './styles.css';
import Feacture from './../../assets/Feacture1.png'
import Feacture2 from './../../assets/Feacture2.png'
import Feature3 from './../../assets/Feature3.png'
import Feature4 from './../../assets/Feature4.png'
import Feature5 from './../../assets/Feature5.png'
import Feature6 from './../../assets/Feature6.png'
import Feature7 from './../../assets/Feature7.png'
import Feature8 from './../../assets/Feature8.png'
import Feacture9 from './../../assets/Feacture9.png'
import Feacture10 from './../../assets/Feacture10.png'
import AppleIcon from './../../assets/AppStore.png'
import GoogleIcon from './../../assets/GooglePlay.png'
import '../../index.css'
function Main() {
  return (
    <main>
      <Header />
      <hr />
      <div className='Top'>

        <div className='TopCenter'>
          <h2 className='title1'>Descubra o que
            seus amigos gostam e
            seguem no Instagram.
          </h2>
          <p className='text1'> Quer saber como ver os likes e comentários de alguém?
            Quer ver quem segue quem?
          </p>
          <a href='#' className='StartBtn'> Comece agora</a>
          <div>
            <a href='#' >
              <img src={AppleIcon} />
            </a>
            <a href='#' >
              <img src={GoogleIcon} />
            </a>
          </div>
        </div>



      </div>

      <div className='div2'>
        <div className='center'>
          <h2 className='Title2'>
            Conheça as  vantagens <br />
            de usar o stalkeando.app
          </h2>
        </div>
        <div className='center'>
          <a href='#' className='btn1'>Pra mim</a>
          <a href='#' className='btn2'>Professional</a>
        </div>
        <div className='center'>
          <h3 className='Title3'>
            Indispensável para pais,<br />
            parceiros, amigos e fãs!

          </h3>
        </div>
        <div className='center'>
          <p className='text3'>
            Rastrei as atividades do Instagram que ajudam você a entender melhor as pessoas com quem você se importa. Mantenha-se atualizado sobre o que seus filhos, namorados, namoradas, ou celebridades favoritos gostam para que você possa compartilhar seus interesses, manter-se na moda e garantir que seus filhos não estejam sendo expostos a nada inapropriado. Supervisione o uso das mídias sociais do seu filho para mantê-lo a salvo de predadores da Internet. Fique de olho em quem seu parceiro está seguindo para garantir que eles não estejam traindo você. Tudo isso e muito mais está disponível para você através da nossa ferramenta de rastreamento precisa e fácil de usar.

          </p>
        </div>

        <div className='center'>

          <a href='#' className='btn3'>
            Comece agora!
          </a>
        </div>

      </div>

      <div className='div3'>
        <div className='center'>
          <h2 className='Title2'>
            Fique de olho em tudo<br />
            o que acontece!
          </h2>
        </div>

        <div className='center'>
          <article className='box'>
            <img src={Feacture} />
            <h4 className='ArticleTitle'>
              Descubra quem
              começou a seguir
            </h4>
            <p className='ArticleText'>
              Receba notificações e veja os novos seguidores. Fique por dentro de quem começou a seguir o usuário rastreado.
            </p>

          </article>
          <article className='box'>
            <img src={Feacture2} />
            <h4 className='ArticleTitle'>
              Descubra quem
              começou a seguir
            </h4>
            <p className='ArticleText'>
              Receba notificações e veja os novos seguidores. Fique por dentro de quem começou a seguir o usuário rastreado.
            </p>

          </article>
        </div>
        <div className='center'>
          <article className='box'>
            <img src={Feature3} />
            <h4 className='ArticleTitle'>
              Descubra quem
              começou a seguir
            </h4>
            <p className='ArticleText'>
              Receba notificações e veja os novos seguidores. Fique por dentro de quem começou a seguir o usuário rastreado.
            </p>

          </article>
          <article className='box'>
            <img src={Feature4} />
            <h4 className='ArticleTitle'>
              Descubra quem
              começou a seguir
            </h4>
            <p className='ArticleText'>
              Receba notificações e veja os novos seguidores. Fique por dentro de quem começou a seguir o usuário rastreado.
            </p>

          </article>
        </div>

        <div className='center'>
          <article className='box'>
            <img src={Feature5} />
            <h4 className='ArticleTitle'>
              Descubra quem
              começou a seguir
            </h4>
            <p className='ArticleText'>
              Receba notificações e veja os novos seguidores. Fique por dentro de quem começou a seguir o usuário rastreado.
            </p>

          </article>
          <article className='box'>
            <img src={Feature6} />
            <h4 className='ArticleTitle'>
              Descubra quem
              começou a seguir
            </h4>
            <p className='ArticleText'>
              Receba notificações e veja os novos seguidores. Fique por dentro de quem começou a seguir o usuário rastreado.
            </p>

          </article>
        </div>

        <div className='center'>
          <article className='box'>
            <img src={Feature7} />
            <h4 className='ArticleTitle'>
              Descubra quem
              começou a seguir
            </h4>
            <p className='ArticleText'>
              Receba notificações e veja os novos seguidores. Fique por dentro de quem começou a seguir o usuário rastreado.
            </p>

          </article>
          <article className='box'>
            <img src={Feature8} />
            <h4 className='ArticleTitle'>
              Descubra quem
              começou a seguir
            </h4>
            <p className='ArticleText'>
              Receba notificações e veja os novos seguidores. Fique por dentro de quem começou a seguir o usuário rastreado.
            </p>

          </article>
        </div>

        <div className='center'>
          <article className='box'>
            <img src={Feacture9} />
            <h4 className='ArticleTitle'>
              Descubra quem
              começou a seguir
            </h4>
            <p className='ArticleText'>
              Receba notificações e veja os novos seguidores. Fique por dentro de quem começou a seguir o usuário rastreado.
            </p>

          </article>
          <article className='box'>
            <img src={Feacture10} />
            <h4 className='ArticleTitle'>
              Descubra quem
              começou a seguir
            </h4>
            <p className='ArticleText'>
              Receba notificações e veja os novos seguidores. Fique por dentro de quem começou a seguir o usuário rastreado.
            </p>

          </article>
        </div>

        <div className='center'>
          <article className='box'>
            <img src={Feacture} />
            <h4 className='ArticleTitle'>
              Descubra quem
              começou a seguir
            </h4>
            <p className='ArticleText'>
              Receba notificações e veja os novos seguidores. Fique por dentro de quem começou a seguir o usuário rastreado.
            </p>

          </article>
          <article className='box'>
            <img src={Feacture} />
            <h4 className='ArticleTitle'>
              Descubra quem
              começou a seguir
            </h4>
            <p className='ArticleText'>
              Receba notificações e veja os novos seguidores. Fique por dentro de quem começou a seguir o usuário rastreado.
            </p>

          </article>
        </div>

      </div>

      <div className='div4'>
        <div className='center'>
          <h2 className='title4'>
            Coletamos dados de
            fontes abertas e
            disponíveis publicamente!
          </h2>
        </div>
        <div className='center'>
          <p className='ArticleText'>
            Usamos dados disponíveis publicamente. Não precisamos de acesso à sua conta do Instagram — ou a de mais ninguém. Você nem precisa seguir as contas que deseja rastrear.

            Instale o aplicativo no seu celular para ver o que acontece no perfil rastreado ou acesse nosso painel web.

            E sim, ainda é possível em 2021 rastrear a atividade de alguém no Instagram, mesmo com a guia de atividade do Instagram desaparecida. Desde que seja uma ação pública, podemos rastreá-la.
          </p>
        </div>

        <div className='center'>
          <p className='ArticleText'>


            Instale o aplicativo no seu celular para ver o que acontece no perfil rastreado ou acesse nosso painel web.


          </p>
        </div>
        <div className='center'>
          <p className='ArticleText'>
            E sim, ainda é possível em 2021 rastrear a atividade de alguém no Instagram, mesmo com a guia de atividade do Instagram desaparecida. Desde que seja uma ação pública, podemos rastreá-la.
          </p>
        </div>
      </div>

      <Footer />

    </main>
  )
}

export default Main;