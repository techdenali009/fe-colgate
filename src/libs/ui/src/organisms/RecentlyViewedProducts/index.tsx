import {  useRef, useState } from 'react';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Product from '../Product';
import { PopularProductsProps } from '@utils/Product';
import ProductHeader from '@ui/molecules/PopularProductHeading';
import { useSelector } from 'react-redux';
import { RootState } from '@store/store';

function RecentlyViewedProducts({
  products,
  modalSetToggle,
  hasMore,
  onNextPage,
}: PopularProductsProps) {
  const swiperRef = useRef<SwiperRef | null>(null);
  const isLoggedIn = useSelector(
    (state: RootState) => state.authSlice.userInfo
  );
  console.log('products',products);
  const [disableLeftButton, setDisableLeftButton] = useState(true);
  const [disableRightButton, setDisableRightButton] = useState(!hasMore);
 
  // Handle slide change and button state update
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const handleSlideChange = (swiper: any) => {
    const atStart = swiper.activeIndex === 0;
    const atEnd = swiper.isEnd;

    setDisableLeftButton(atStart);
    setDisableRightButton(atEnd && !hasMore);
  };
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const handleSlideChangeWrapper = (swiper: any) => {
    // Call onNextPage only when swiper reaches the end (but not on the initial load)
    if (swiper.isEnd ) {
      onNextPage();
    }
    handleSlideChange(swiper);
  };




  const handleScroll = (direction: 'left' | 'right') => {
    if (swiperRef.current) {
      if (direction === 'left' && !disableLeftButton) {
        swiperRef.current.swiper.slidePrev();
      } else if (direction === 'right' && !disableRightButton) {
        swiperRef.current.swiper.slideNext();
      }
    }
  };


  // Swiper settings for responsiveness
  const swiperSettings = {
    slidesPerView: 1.2,
    spaceBetween: 16,
    loop: false,
    modules: [Navigation],
    navigation: false,
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
      <div className="mb-6">
        <ProductHeader
          className=""
          headingLabel="Recently Viewed Products"
          description="A selection of products you have recently viewed."
          handleScroll={handleScroll}
          LogInButtonDisable={!isLoggedIn}
          modalSetToggle={modalSetToggle}
          disableLeftButton={disableLeftButton}
          disableRightButton={disableRightButton}
        />
      </div>

      <Swiper
        ref={swiperRef}
        {...swiperSettings}
        onSlideChange={handleSlideChangeWrapper} // Handle slide change dynamically
        className="mySwiper"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="!items-start">
            <Product
              key={`${product._id}-${product.name}`}
              product={{
                id: product._id,
                name: product.name,
                image: product?.images?.length > 0 ? product.images[0]?.url : '',
                rating: product?.rating || 0,
                price: product?.price,
                isBestSeller: product?.isBestSeller || false,
              }}
              modalSetToggle={modalSetToggle}
              openQuickView={() => {console.log()}}
              showQuickView={false}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default RecentlyViewedProducts;
