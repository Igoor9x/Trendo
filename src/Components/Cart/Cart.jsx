// Cart.jsx

import React from 'react';
import { useCart } from './CartContext';

function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCart();
  console.log(cartItems);

  return (
    <div>
      <h1>Carrinho de Compras</h1>
      {cartItems.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <div>
                <h2>{item.name}</h2>
                <p>Preço: R$ {item.preco}</p>
                <p>Quantidade: {item.quantidade}</p>
                <p>Tamanho: {item.tamanho}</p>
              </div>
              <button onClick={() => removeFromCart(item)}>Remover do Carrinho</button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={clearCart}>Limpar Carrinho</button>
    </div>
  );
}

export default Cart;
