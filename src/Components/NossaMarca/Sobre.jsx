import React from 'react'
import './Sobre.css'

function Sobre() {
  return (
    <div className='sobre'>
      <h1>SOBRE</h1>
      <div className='allContainer'>
        <div className='esquerda'>
          <img src='https://img.freepik.com/fotos-gratis/homem-apontando-para-o-lateral_1368-3937.jpg?w=826&t=st=1695688599~exp=1695689199~hmac=12182b17fc00f1949b6df0b79ca54040900e8d69ac6507186cf3bec90a964a16' />
        </div>
        <div className='direita'>
          <h2>A Trendo é uma loja especializada em oferecer produtos práticos e funcionais para facilitar o dia a dia.
            Nossa missão é proporcionar soluções de qualidade com um toque de estilo.
            Valorizamos o atendimento ao cliente e buscamos constantemente novidades para oferecer uma seleção atualizada
            de roupas, calçados e acessórios.
            Nossa meta é ajudar a tornar seu guarda-roupa organizado e funcional, proporcionando
            uma experiência única e satisfatória.
            Confira nosso catálogo e descubra a praticidade com estilo que a É Trendo oferece.
            Obrigado por escolher a É Trendo para suas necessidades do dia a dia.
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Sobre
