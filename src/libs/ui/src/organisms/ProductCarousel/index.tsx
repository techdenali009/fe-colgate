import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './ProductCarousel.styles.scss';
import NavigateNextBlue from '../../../assets/Navigatenextblue.svg';
import NavigatePrevBlue from '../../../assets/Navigateprevblue.svg';

interface ProductCarouselProps {
  images: string[];
  name: string;
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ images, name }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const renderArrowNext = (onClickHandler: () => void, hasNext: boolean) => {
    return (
      hasNext && (
        <button
          onClick={onClickHandler}
          className='nextbutton'
          style={{
            position: 'absolute',
            top: '40%',
            right: '2px',
            zIndex: 10,
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <img src={NavigateNextBlue} alt="Navigate Next" />
        </button>
      )
    );
  };

  const renderArrowPrev = (onClickHandler: () => void, hasPrev: boolean) => {
    return (
      hasPrev && (
        <button
          className='prevbutton'
          onClick={onClickHandler}
          style={{
            position: 'absolute',
            top: '40%',
            left: '2px',
            zIndex: 10,
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <img src={NavigatePrevBlue} alt="Navigate Prev" />
        </button>
      )
    );
  };

  const renderThumbs = () => {
    return images.map((image, index) => (
      <img key={index} src={image} alt={`${name} thumbnail ${index + 1}`} />
    ));
  };

  return (
    <div className="product-carousel-container">
      <Carousel
        selectedItem={currentIndex}
        onChange={setCurrentIndex}
        showArrows={true}
        renderArrowPrev={renderArrowPrev}
        renderArrowNext={renderArrowNext}
        showStatus={false}
        showIndicators={false}
        renderThumbs={renderThumbs}
        thumbWidth={80}
      >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`${name} - slide ${index + 1}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
