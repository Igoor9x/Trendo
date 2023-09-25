import React, {useState, useEffect} from 'react';
import produtoDB from '../Products/produto.json';
import { useParams } from 'react-router-dom';
import { useCart } from '../Cart/CartContext';
import './ProdutoInfo.css'

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';

function ProdutoInfo() {
  const {name} = useParams();
  const {addToCart} = useCart();
  const [produto, setProduto] = useState (null);
  const [qntInput, setQntInput] = useState(1);
  const [indexImage, setIndexImage] = useState(0);
  const [sizeSelect, setSizeSelect] = useState(null);
  const [itensCart, setItensCart] = useState(0);
  

function confirmeCompra(){
  addToCart({
    name: produto?.name,
    preco: produto?.preco,
    quantidade: qntInput,
    tamanho: sizeSelect, 
  });
  setItensCart((prevCount) => prevCount + qntInput);
}

  const buttonSizeClicked = (size) => {
    setSizeSelect(size);
  }
  
  const btn = {
    marginRight: '10px',
    padding: '3px 6px',
    cursor: 'pointer',
  };
  const buttonSelect = {
    ...btn,
    backgroundColor: '#3c3c3c', color: 'white',
  };
  
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  function somaQnt(e) {
    e.preventDefault();
    setQntInput(qntInput + 1);
  }

  function diminuiQnt(e) {
    e.preventDefault()
    if(qntInput >= 1){
      setQntInput(qntInput -1);
    }else{
      setQntInput(0)
    }
  }

  useEffect(() => {
    const produtoDetail = produtoDB.produtos.find((produto) => produto.name === name );
    if (produtoDetail) {
     setProduto(produtoDetail);
   }
   scrollToTop();
 }, [name]);

 useEffect(() => {

 }, [indexImage])


  return (
    <div className='containerProdutoDetail'>
      <div className='infoEsquerda'>
        <img src={produto?.images[indexImage]} />
      </div>
      <div className='infoDireita'>
       <form>
        <h1>{produto?.name}</h1>
        <p className='price'>de R$ {produto?.preco}</p>
        <p className='price'>ou até 12x no cartão</p>
        <div className='imagesProd'>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop={true}
          >
            {produto?.images.map((image, imageIndex) => (
              <SwiperSlide key={imageIndex}>
                <img onClick={() => {setIndexImage(imageIndex)}} src={image} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className='tamanho'>
          <span>Selecione o Tamanho:</span>
          <div className='buttonsSize'>
            <button type='button' onClick={ () => buttonSizeClicked('P')} style={sizeSelect === 'P' ? buttonSelect : btn}>P</button>
            <button type='button' onClick={ () => buttonSizeClicked('M')} style={sizeSelect === 'M' ? buttonSelect : btn} >M</button>
            <button type='button' onClick={ () => buttonSizeClicked('G')} style={sizeSelect === 'G' ? buttonSelect : btn}>G</button>
            <button type='button' onClick={ () => buttonSizeClicked('GG')} style={sizeSelect === 'GG' ? buttonSelect : btn}>GG</button>
          </div>
        </div>
        <div className='quantidade'>
          <span>Quantidade:</span>
          <div className='buttonsQnt'>
            <button onClick={diminuiQnt}>-</button>
            <input type='number'
              value={qntInput}
              onChange={(e) => setQntInput(e.target.value)}
            />
            <button onClick={somaQnt}>+</button>
          </div>
        </div>
          <button className='addCart' onClick={confirmeCompra} type='button'>ADICIONAR AO CARRINHO</button>
        <div>
        </div>
       </form>
      </div>
    </div>
  )
}

export default ProdutoInfo
