import React from 'react';
import { Carousel as ReactCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { BannerSlide } from '../Carousel_BannerSlide';
import { CarouselProps } from '@utils/interfaces';



export const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  return (
    <ReactCarousel 
      autoPlay 
      infiniteLoop 
      showThumbs={false} 
      showStatus={false} 
      interval={3000}
      className="carousel-container"
    >
      {slides.map((slide, index) => (
        <BannerSlide
          key={index}
          imgSrc={slide.imgSrc}
          imgAlt={slide.imgAlt}
          heading={slide.heading}
          subheading={slide.subheading}
          buttonText={slide.buttonText}
        />
      ))}
    </ReactCarousel>
  );
};
