// src/components/molecules/ResponsiveCarousel.tsx
import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import PrevButton from '@ui/atoms/CarouselBluePrevArrow';
import NextButton from '@ui/atoms/CarouselBlueNextArrow';

interface ResponsiveCarouselProps {
  images: string[];
}

const ResponsiveCarousel: React.FC<ResponsiveCarouselProps> = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handlePrevClick = () => {
    setSelectedIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNextClick = () => {
    setSelectedIndex((prevIndex) => Math.min(prevIndex + 1, images.length - 1));
  };

  return (
    <div className="responsive-carousel-container">
      <Carousel
        selectedItem={selectedIndex}
        onChange={setSelectedIndex} // Syncs selectedIndex with Carousel
        showThumbs={false}
        infiniteLoop={false}
        autoPlay={false}
        showStatus={false} // Optional, if you don't want to display the status (e.g., slide number)
        showIndicators={false} // Optional, to hide the default indicators
        renderArrowPrev={() => null} // Disable default prev arrow
        renderArrowNext={() => null} // Disable default next arrow
      >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`carousel-image-${index}`} />
          </div>
        ))}
      </Carousel>

      {/* Custom Navigation Arrows */}
      <div className="custom-arrows flex place-content-between absolute top-[50%] left-[44px] right-[43px] z-10">
        <div className="prev-arrow">
          <PrevButton onClick={handlePrevClick} />
        </div>
        <div className="next-arrow">
          <NextButton onClick={handleNextClick} />
        </div>
      </div>
    </div>
  );
};

export default ResponsiveCarousel;
