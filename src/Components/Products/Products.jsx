import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Products.css'
import produtoDB from './produto.json';


function Products() {
  const navigate = useNavigate();
const [produtos, setProdutos] = useState ([]);

const navigateToProduct = (name) => {
  // Obtenha o índice do produto com base no nome ou outro identificador único
  const index = produtos.findIndex((produto) => produto.name === name);
    navigate.push(`/produto/${name}?index=${index}`);
};

useEffect(() => {
  const produtosDB = produtoDB.produtos
  setProdutos(produtosDB);
}, []);

  return (
    <div className='containerProduct' id='Produtos'>
        <h1>Produtos em destaque</h1>      
      <div className='listProduct'> 
        {produtos.map((produto, index) =>( 
          <Link to={`/produto/${produto.name}`} key={index} onClick={() => navigateToProduct(produto.name)}>

            <div className='product' >
              <h2>{produto.name}</h2> 
              <img src={produto.images[0]} alt='camiseta'/>
              <span>de R$ {produto.preco}</span>
              <h2 className='price'>por R${produto.preco}</h2>
            </div>
          </Link>
        ))}
      </div>

    </div>
  )
}

export default Products

// Usa-se {} para poder acessar propriedades de um arquivo importado.
// Sempre que usar o map() o primeiro elemento deve conter a key que normalmente recebe o valor de index.
