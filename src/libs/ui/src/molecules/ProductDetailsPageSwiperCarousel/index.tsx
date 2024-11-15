// src/components/molecules/SwiperCarousel.tsx
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './ProductDetailsPageSwiperCarousel.styles.scss';

import PrevButton from '@ui/atoms/CarouselBluePrevArrow';
import NextButton from '@ui/atoms/CarouselBlueNextArrow';

interface SwiperCarouselProps {
  images: string[];
  name: string;
}

const SwiperCarousel: React.FC<SwiperCarouselProps> = ({ images, name }) => {
  const [activeThumb, setActiveThumb] = useState<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Refs for the custom buttons
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef<any>(null);

  // Refs for the thumbnail swiper buttons
  const thumbPrevRef = useRef(null);
  const thumbNextRef = useRef(null);

  const handleSlideChange = (swiper: any) => {
    setCurrentIndex(swiper.realIndex);
  };

  const goToPrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const goToNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="Product-detailspage">
      {/* Main Image Slider */}
      <Swiper
        ref={swiperRef}
        loop={true}
        spaceBetween={10}
        navigation={false}
        modules={[Navigation, Thumbs]}
        grabCursor={true}
        thumbs={{ swiper: activeThumb }}
        className="product-images-slider"
        onSlideChange={handleSlideChange}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`${name} - slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Slider */}
      <Swiper
        onSwiper={setActiveThumb}
        loop={true}
        spaceBetween={10}
        slidesPerView={5}
        modules={[Navigation, Thumbs]}
        className="product-images-slider-thumbs"
        navigation={{
          prevEl: thumbPrevRef.current,
          nextEl: thumbNextRef.current,
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="product-images-slider-thumbs-wrapper">
              <img src={image} alt={`${name} thumbnail ${index + 1}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="Product-arrows flex place-content-between">
        <div className="product-prev absolute top-[400px] z-10">
          {currentIndex > 0 && <PrevButton ref={prevRef} onClick={goToPrevSlide} />}
        </div>
        <div className="product-next absolute top-[400px] left-[572px] z-10">
          {currentIndex < images.length - 1 && <NextButton ref={nextRef} onClick={goToNextSlide} />}
        </div>
      </div>

      {/* Thumbnail Navigation Arrows */}
      {images.length > 5 && (
        <div className="thumb-arrows">
          <div className="thumb-prev absolute top-[743px] left-[78px] z-10">
            <PrevButton ref={thumbPrevRef} />
          </div>
          <div className="thumb-next absolute top-[743px] left-[572px] z-10">
            <NextButton ref={thumbNextRef} />
          </div>
        </div>
      )}
    </div>
  );
};

export default SwiperCarousel;
