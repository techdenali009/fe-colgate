import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './ProductCarousel.styles.scss';
import NextButton from '../../atoms/CarouselBlueNextArrow';
import PrevButton from '../../atoms/CarouselBluePrevArrow';

interface ProductCarouselProps {
  images: string[];
  name: string;
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ images, name }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const renderArrowNext = (onClickHandler: () => void, hasNext: boolean) => {
    return hasNext && <NextButton onClick={onClickHandler} />;
  };

  const renderArrowPrev = (onClickHandler: () => void, hasPrev: boolean) => {
    return hasPrev && <PrevButton onClick={onClickHandler} />;
  };

  const renderThumbs = () => {
    return images.map((image, index) => (
      <img key={index} src={image} alt={`${name} thumbnail ${index + 1}`} />
    ));
  };

  return (
    <div className='Product-detailspage'>
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
          thumbWidth={100}
        >
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`${name} - slide ${index + 1}`} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ProductCarousel;
