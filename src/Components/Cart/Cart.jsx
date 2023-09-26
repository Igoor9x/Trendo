// Cart.jsx
import React, { useEffect, useState } from 'react';
import { useCart } from './CartContext';
import './Cart.css'
import FormatCurrency from '../../utils/FormatCurrency';

function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const [total, setTotal] = useState(0);

  
  useEffect(() => {
    const somaTotal = cartItems.reduce((acc, currentItem) => {
      const precoItem = currentItem.preco;
      console.log(`esse é o precoItem ${precoItem}`);
      return acc + precoItem;
    }, 0);
    
    setTotal(somaTotal);
  },[total])

  function comprou(){
    alert(`COMPRA FINALIZADA no valor de ${FormatCurrency(total, 'BRL')}. Volte Sempre!`)
  }

  return (
    <div className='cartContainer'>
      <h1>Carrinho de Compras</h1>
      <div className='cartDivisão'>
        {cartItems.length === 0 ? (
          <p ></p>
        ) : (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <div className='productCartList'>
                  <div className='imageCartList'>
                    <img src={item.image} />
                  </div>
                  <div className='productInfoCart'>
                    <h2>{item.name}</h2>
                    <p>Preço: {FormatCurrency(item.preco, 'BRL')}</p>
                    <p>Quantidade: {item.quantidade}</p>
                    <p>Tamanho: {item.tamanho}</p>
                    <button className='removeItem' onClick={() => removeFromCart(item)}>Remover do Carrinho</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      
          <div className='total'>
          {cartItems.length === 0 ? (
          <p></p>
        ) : (
              <div className='infoConfirme'>
                <div className='guia'>
                <p>PRODUTO</p>
                <p>VALOR</p>
                <p>QNT</p>
                </div>
                {cartItems.map((item, index) => (
                  <li key={index}>
                    <img src={item.image} />
                    <p>{FormatCurrency(item.preco, 'BRL')}</p>
                    <p>{item.quantidade}</p>
                  </li>
                ))}
                <div className='span'>
                <span>Total via PIX: {FormatCurrency( total, 'BRL')}</span>
                <p>ou até 12x de{FormatCurrency( total, 'BRL')} no cartão</p>
                </div>
                <button className='btnComprar' type='button' onClick={comprou}>FINALIZAR COMPRA</button>
              </div>
            )}
            </div>
      </div>
      <button className='removeAll' onClick={clearCart}>Limpar Carrinho</button>
    </div>
  );
}

export default Cart;
