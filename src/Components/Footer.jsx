import React from 'react';
import './Footer.css';

const imageLogos = [
  {id: 1, image: "https://logopng.com.br/logos/visa-17.png"},
  {id: 2, image: "https://logodownload.org/wp-content/uploads/2014/07/mastercard-logo-7.png"},
  {id: 3, image: "https://logodownload.org/wp-content/uploads/2015/03/hipercard-logo-1.png"},
  {id: 4, image: "https://logospng.org/download/cartao-elo/logo-cartao-elo-4096.png"},
  {id: 5, image: "https://logodownload.org/wp-content/uploads/2020/02/pix-bc-logo.png"},
  {id: 6, image: "https://logodownload.org/wp-content/uploads/2020/01/loterias-caixa-logo-2.png"}
];

function Footer() {
  return (
    <footer>
      <section id="">
        <div className='containerFooter'>
          <div className='topicos'>
            <div className='topicoPart1'>
              <div className='card1'>
                <h3>Insticional</h3>
                <span>Instruções</span>
                <span>Contato</span>
                <span>Sobre nós</span>
              </div>
              <div className='card2'>
                <h3>Políticas</h3>
                <span>Política de privacidade</span>
                <span>Termos e condições</span>
                <span>Política de devolução</span>
              </div>
              <div className='card3'>
                <h3>Formas de pagamento</h3>
                <div  className='logoImage'>
                  {imageLogos.map((logo, index) => (
                    <div key={index}>
                      <img src={logo.image} alt="" />
                    </div>
                  ))}
                </div>
                
              </div>
              <div className='card4'>
                <h3>Contato</h3>
                <span>trendooficial@gmail.com</span>
                <span>(xx) xxxxx-xxxx</span>
                <span>(xx) xxxxx-xxxx</span>

              </div>
            </div>
            <div className='topicoPart2'>
              <p>TRENDO Ltda.</p>
              <p>Loja 100% virtual</p>
              <p>© 2023 TRENDO - Todos seus direitos reservados</p>
            </div>

          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer
