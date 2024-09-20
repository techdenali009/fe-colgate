import React from 'react';
import { Carousel as ReactCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { BannerSlide } from '../Carousel_BannerSlide';
import { CarouselProps } from '@utils/interface';


export const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  
  // Custom Prev Arrow
  const customPrevArrow = (onClickHandler: () => void, hasPrev: boolean, label: string) => {
    return (
      <button
        type="button"
        onClick={onClickHandler}
        className="swiper-button-prev absolute left-0 z-10 p-2 focus:outline-none "
        aria-label={label}
      >
        
      </button>
    );
  };

  // Custom Next Arrow
  const customNextArrow = (onClickHandler: () => void, hasNext: boolean, label: string) => {
    return (
      <button
        type="button"
        onClick={onClickHandler}
        className="swiper-button-next  right-0 z-10 p-2 focus:outline-none"
        aria-label={label}
      >
        
      </button>
    );
  };

  return (
    <ReactCarousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      interval={3000}
      className="carousel-container"
      renderArrowPrev={customPrevArrow}  // Adding the custom previous arrow with image
      renderArrowNext={customNextArrow}  // Adding the custom next arrow with image
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
