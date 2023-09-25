import React from "react"
import "./SliderImagemPromo.css"

import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

  function SliderImagemPromo() {

    // Em JSON/Arrays não se pode chamar imagens diretamente de seu computador por questões de segurança da WEB. Deve-se sempre usar URL da imagem.
    const dbImage = [
      {id: 1, image: "https://img.freepik.com/fotos-premium/guarda-roupa-com-roupas-diferentes-conceito-de-roupas-diferentes_185193-125579.jpg?w=2000"},
      {id: 2, image: "https://img.freepik.com/fotos-gratis/duas-jovem-linda-sorridente-loira-hipster-em-roupas-da-moda-de-verao-mulheres-despreocupadas-sensuais-posando-perto-da-parede-amarela-no-estudio-modelos-positivos-se-divertindo-alegre-e-feliz-em-oculos-de-sol_158538-21835.jpg?w=2000"},
      {id: 3, image: "https://img.freepik.com/fotos-gratis/tres-jovens-bonitas-garotas-hipster-sorridente-em-roupas-da-moda-no-verao-mulheres-despreocupadas-sexy-que-levantam-perto-da-parede-amarela-modelos-positivos-enlouquecendo-e-se-divertindo-mostrando-o-sinal-de-rock-and-roll_158538-6408.jpg?w=2000"},
      {id: 4, image: "https://img.freepik.com/fotos-gratis/retrato-de-uma-jovem-linda-loira-sorridente-em-roupas-da-moda-de-verao-mulher-despreocupada-posando-perto-da-parede-amarela-no-estudio-modelo-positivo-se-divertindo-dentro-de-casa-alegre-e-feliz_158538-21823.jpg?w=2000"}
    ];
    
    return (
      <div className='containerSlider'> 
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{delay: 3000, disableOnInteraction: false}}
            loop={true}
        >
          {dbImage.map((obj) => (
            <SwiperSlide key={obj.id}>
              <img src={obj.image} alt="imageeee" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
  )
};

export default SliderImagemPromo
