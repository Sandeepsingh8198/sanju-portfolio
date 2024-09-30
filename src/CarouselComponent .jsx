// src/CarouselComponent.js
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const CarouselComponent = () => {
  const options = {
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <OwlCarousel className="owl-theme" {...options}>
      <div className="item">
        <img src="https://picsum.photos/id/240/200/300" alt="Slide 1" />
      </div>
      <div className="item">
        <img src="https://picsum.photos/id/237/200/300" alt="Slide 2" />
      </div>
      <div className="item">
        <img src="https://picsum.photos/id/238/200/300" alt="Slide 3" />
      </div>
      <div className="item">
        <img src="https://picsum.photos/id/239/200/300" alt="Slide 4" />
      </div>
    </OwlCarousel>
  );
};

export default CarouselComponent;
