import React from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import RightIcon from '../../assets/ChevronRight.png'
import DownIcon from '../../assets/ChevronDown.png'
import './styles.css';

function Faqs({ history }) {
  var count = 0

  function active ( id) {
    count++;
     if(count % 2 != 0){
      document.getElementById(`box${id}`).style = "display: flex;"
      document.getElementById(`img${id}`).setAttribute("src", `${DownIcon}`)
     }else{
      document.getElementById(`box${id}`).style = "display: none;"
      document.getElementById(`img${id}`).setAttribute("src", `${RightIcon}`)
     }
     
    
  }
  return (
    <main>
      <Header history={history} />

      <div className='body'>

        <div className='center'>
          <h2 >Perguntas frequentes</h2>
        </div>

        <div className='center' >

          <a className='box' onClick={ ( ) => {
            active(1)
          }}>
            <div className='boxQuestion'>
              <img src={RightIcon} id='img1' />
              <p>Por que monitorar usuários no instagram?</p>
            </div>

            <div className='boxText' id="box1" >
              <p>
                O monitoramento de ações de usuários do Instagram de marcas e blogueiros geram insights sobre as necessiadades, preferências e hábitos de seu público, estratégias do seus concorrentes e as principais influencidadores. Para usuários individuais - é uma ótima maneira de conhecer melhor os interesses de alguém, o que sua família e amigos fazem, conferir as atividades de seus filhos para assim protege-los dos perigos da internet e descobrir o que fazem suas celebridades favoritas.
              </p>
            </div>
          </a>
          <a className='box' onClick={ ( ) => {
            active(2)
          }}>
            <div className='boxQuestion'>
              <img src={RightIcon} id='img2' />
              <p>Por que usar o Stalkeando?</p>
            </div>

            <div className='boxText' id="box2" >
              <p>
                O monitoramento de ações de usuários do Instagram de marcas e blogueiros geram insights sobre 
              </p>
            </div>
          </a>

          <a className='box' onClick={ ( ) => {
            active(3)
          }}>
            <div className='boxQuestion'>
              <img src={RightIcon} id='img3' />
              <p>Como coletamos ações do usuário do Instagram?</p>
            </div>

            <div className='boxText' id="box3" >
              <p>
                O monitoramento de ações de usuários do Instagram de marcas e blogueiros geram insights sobre as necessiadades, pre
              </p>
            </div>
          </a>

          <a className='box' onClick={ ( ) => {
            active(4)
          }}>
            <div className='boxQuestion'>
              <img src={RightIcon} id='img4' />
              <p>Que tipo de notificações eu receberei?</p>
            </div>

            <div className='boxText' id="box4">
              <p>
                O monitoramento de ações de usuários do Instagram de marcas e blogueiros geram insights sobre as necessiadades, preferências e hábitos de seu público
              </p>
            </div>
          </a>

          <a className='box' onClick={ ( ) => {
            active(5)
          }}>
            <div className='boxQuestion'>
              <img src={RightIcon} id='img5' />
              <p>Posso rastrear várias contas do Instagram em um único perfil no stalkeando?</p>
            </div>

            <div className='boxText' id="box5">
              <p>
                O monitoramento de ações de usuários do Instagram de marcas e blogueiros geram insights sobre as necessiadades, preferências e hábitos de seu público, estratégias do seus concorrentes e as principais influencidadores. Para usuários individuais - é uma ótima maneira de conhecer melhor os interesses de alguém, o que sua família e amigos fazem, conferir as atividades de seus filhos para assim protege-los dos perigos da internet e descobrir o que fazem suas celebridades favoritas.
              </p>
            </div>
          </a>

          <a className='box' onClick={ ( ) => {
            active(6)
          }}>
            <div className='boxQuestion'>
              <img src={RightIcon} id='img6' />
              <p>Preciso cadastrar meu usuário e senha do instagram?</p>
            </div>

            <div className='boxText' id="box6">
              <p>
                O monitoramento de ações de usuários do Instagram de marcas e blogueiros geram insights sobre as necessiadades, preferências e hábitos de seu público, estratégias do seus concorrentes e as principais influencidadores. Para usuários individuais - é uma ótima maneira de conhecer melhor os interesses de alguém, o que sua família e amigos fazem, conferir as atividades de seus filhos para assim protege-los dos perigos da internet e descobrir o que fazem suas celebridades favoritas.
              </p>
            </div>
          </a>

          <a className='box' onClick={ ( ) => {
            active(7)
          }}>
            <div className='boxQuestion'>
              <img src={RightIcon} id='img7' />
              <p>Posso monitorar usuários que eu não sigo no Instagram?</p>
            </div>

            <div className='boxText' id="box7">
              <p>
                O monitoramento de ações de usuários do Instagram de marcas e blogueiros geram insights sobre as necessiadades, preferências e hábitos de seu público, estratégias do seus concorrentes e as principais influencidadores. Para usuários individuais - é uma ótima maneira de conhecer melhor os interesses de alguém, o que sua família e amigos fazem, conferir as atividades de seus filhos para assim protege-los dos perigos da internet e descobrir o que fazem suas celebridades favoritas.
              </p>
            </div>
          </a>

          <a className='box' onClick={ ( ) => {
            active(8)
          }}>
            <div className='boxQuestion'>
              <img src={RightIcon} id='img8' />
              <p>O usuário pode saber que estou monitorando ele/ela?</p>
            </div>

            <div className='boxText' id="box8">
              <p>
                O monitoramento de ações de usuários do Instagram de marcas e blogueiros geram insights sobre 
              </p>
            </div>
          </a>
          <a className='box' onClick={ ( ) => {
            active(9)
          }}>
            <div className='boxQuestion'>
              <img src={RightIcon} id='img9' />
              <p>Posso interromper um monitoramento?</p>
            </div>

            <div className='boxText' id="box9">
              <p>
                O monitoramento de ações de usuários do Instagram de marcas e blogueiros geram insights sobre 
              </p>
            </div>
          </a>


          <a className='box' onClick={ ( ) => {
            active(10)
          }}>
            <div className='boxQuestion'>
              <img src={RightIcon} id='img10' />
              <p>Quais são as formas de pagamento?</p>
            </div>

            <div className='boxText' id="box10">
              <p>
                O monitoramento de ações de usuários do Instagram de marcas e blogueiros geram insights sobre 
              </p>
            </div>
          </a>
          <a className='box' onClick={ ( ) => {
            active(11)
          }}>
            <div className='boxQuestion'>
              <img src={RightIcon} id='img11' />
              <p>Posso rastrear contas privadas no Instagram?</p>
            </div>

            <div className='boxText' id="box11">
              <p>
                O monitoramento de ações de usuários do Instagram de marcas e blogueiros geram insights sobre 
              </p>
            </div>
          </a>

        </div>
      </div>


      <Footer history={history} />

    </main>
  )
}

export default Faqs;