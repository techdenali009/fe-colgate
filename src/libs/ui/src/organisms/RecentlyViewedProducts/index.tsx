import { useRef, useState, useEffect } from 'react';
import ProductHeader from '@ui/molecules/PopularProductHeading';
import { PopularProductsProps } from '@utils/Product';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Product from '../Product';

const RecentlyViewedProducts = ({ products ,modalSetToggle}: PopularProductsProps) => {
  const swiperRef = useRef<SwiperRef | null>(null);
  const [disablePrev, setDisablePrev] = useState(true);
  const [disableNext, setDisableNext] = useState(false);


  // Update button states based on the swiper's position
  const updateButtonState = () => {
    if (swiperRef.current) {
      const { isBeginning, isEnd } = swiperRef.current.swiper;
      
      // Only disable buttons if there are 4 or fewer products
      if (products.length <= 4) {
        setDisablePrev(isBeginning);
        setDisableNext(isEnd);
      } else {
        setDisablePrev(false);
        setDisableNext(false);
      }
    }
  };

  useEffect(() => {
    // Update button state on initial render and resize
    updateButtonState();
    const handleResize = () => {
      updateButtonState();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    if (swiperRef.current) {
      if (direction === 'left' && !disablePrev) {
        swiperRef.current.swiper.slidePrev();
      } else if (direction === 'right' && !disableNext) {
        swiperRef.current.swiper.slideNext();
      }
    }
  };

  // Enable loop only if there are more than 4 products
  const isLoopEnabled = products.length > 4;


  const swiperSettings = {
    slidesPerView: 1.2,
    spaceBetween: 16,
    loop: isLoopEnabled,
    modules: [Navigation],
    navigation: false, 
    onSlideChange: updateButtonState,
    onInit: updateButtonState,
    breakpoints: {
      640: {
        slidesPerView: 2.2,
      
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
      <ProductHeader
        headingLabel="Recently Viewed Products"
        description=""
        handleScroll={handleScroll}
        LogInButtonDisable={false}
        disableLeftButton={disablePrev}
        disableRightButton={disableNext} 
        modalSetToggle={modalSetToggle}
        className=''
      />

      <Swiper ref={swiperRef} {...swiperSettings} className="mySwiper">
        {products.map((product) => (
          <SwiperSlide key={product.id} className="mt-1 px-2 !items-start">
            <Product product={product} modalSetToggle={modalSetToggle} openQuickView={() => console.log('')} showQuickView={false}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RecentlyViewedProducts;
