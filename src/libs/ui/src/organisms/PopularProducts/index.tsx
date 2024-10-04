import { useRef } from 'react';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Product from '../Product';
import { PopularProductsProps } from '@utils/Product';
import ProductHeader from '@ui/molecules/PopularProductHeading';

function PopularProducts({ products }: PopularProductsProps) {
  const swiperRef =  useRef<SwiperRef | null>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (swiperRef.current) {
      if (direction === 'left') {
        swiperRef.current.swiper.slidePrev(); 
      } else {
        swiperRef.current.swiper.slideNext();
      }
    }
  };

  // Swiper settings with responsive breakpoints
  const swiperSettings = {
    slidesPerView: 1,
    spaceBetween: 16,
    loop: true,
    modules: [Navigation],
    navigation: false, 
    breakpoints: {
      640: {
        slidesPerView: 2,
      
      },
      1024: {
        slidesPerView: 3,
      
      },
      1280: {
        slidesPerView: 4,
  
      },
    },
  };

  return (
    <div className="w-full">
      <div className='mb-6'>
        <ProductHeader
          headingLabel="Popular Products"
          description="A selection of our highly recommended products, endorsed by industry professionals, to initiate your professional journey."
          handleScroll={handleScroll}
          LogInButtonDisable={true}
        />
      </div> 

      <Swiper ref={swiperRef} {...swiperSettings} className="mySwiper">
        {products.map((product) => (
          <SwiperSlide key={product.id} className="  !items-start">
            <Product product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default PopularProducts;
