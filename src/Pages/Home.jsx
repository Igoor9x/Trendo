import React from 'react'
import ThumbFirst from '../Components/ThumbFirst/ThumbFisrt';
import CardsPromo from '../Components/CardsPromo/CardsPromo';
import SliderImagemPromo from '../Components/SliderImagemPromo/SliderImagemPromo';
import Products from '../Components/Products/Products';

const Home = () => {
  return (
    <div>
      <ThumbFirst />
      <CardsPromo  />
      <SliderImagemPromo />
      <Products />
    </div>
  )
}

export default Home
