import React from 'react'
import './CardsPromo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
import { faMobile } from '@fortawesome/free-solid-svg-icons'
import { faTruckFast } from '@fortawesome/free-solid-svg-icons'

function CardsPromo() {
  return (
    <div className='cards'>
      <div className='card'>
        <FontAwesomeIcon icon={faBagShopping} />
        <span className='firstTextCard'><strong>10% OFF</strong> na PRIMEIRA COMPRA</span>
        <span className='secondTextCard'>use o cupom <strong>DESCONTO10</strong></span>
      </div>
      <div className='card'>
        <FontAwesomeIcon icon={faCreditCard} />
        <span className='firstTextCard'>Até <strong>10x sem juros</strong></span>
        <span className='secondTextCard'>No cartão TRENDO</span>
      </div>
      <div className='card'>
        <FontAwesomeIcon icon={faMobile} />
        <span className='firstTextCard'><strong>10% OFF</strong> no app na PRIMEIRA COMPRA</span>
        <span className='secondTextCard'>Baixe o app e ganhe <strong> DESCONTOS</strong></span>
      </div>
      <div className='card'>
        <FontAwesomeIcon icon={faTruckFast} />
        <span className='firstTextCard'>Frete <strong>Grátis</strong></span>
        <span className='secondTextCard'>Nas compras acima de R$150</span>
      </div>
    </div>
  )
}

export default CardsPromo
