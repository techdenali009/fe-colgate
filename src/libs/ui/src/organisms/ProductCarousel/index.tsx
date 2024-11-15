import React, { useState, useEffect } from 'react';
import SwiperCarousel from '../../molecules/ProductDetailsPageSwiperCarousel';
import ResponsiveCarousel from '../../molecules/ProductDetailsPageResponsiveCarousel';

interface ProductCarouselProps {
  images: string[];
  name: string;
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ images, name }) => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 1020); // Initialize with 1020px

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1020); // Adjust isMobile state to 1020px
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {isMobile ? (
        <ResponsiveCarousel images={images} />
      ) : (
        <SwiperCarousel images={images} name={name} />
      )}
    </div>
  );
};

export default ProductCarousel;
