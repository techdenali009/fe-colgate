import { useRef, useState } from 'react';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Product from '../Product';
import { PopularProductsProps, ProductType } from '@utils/Product';
import ProductHeader from '@ui/molecules/PopularProductHeading';
import { useSelector } from 'react-redux';
import { RootState } from '@store/store';

function PopularProducts({
  products,
  modalSetToggle,
  onNextPage,
  hasMore,
}: PopularProductsProps) {
  const swiperRef = useRef<SwiperRef | null>(null);
  const isLoggedIn = useSelector(
    (state: RootState) => state.authSlice.userInfo
  );

  const [disableLeftButton, setDisableLeftButton] = useState(true);
  const [disableRightButton, setDisableRightButton] = useState(!hasMore);

  const handleScroll = (direction: 'left' | 'right') => {
    if (swiperRef.current) {
      if (direction === 'left') {
        swiperRef.current.swiper.slidePrev();
      } else {
        swiperRef.current.swiper.slideNext();
      }
    }
  };

  const handleSlideChange = (swiper: any) => {
    // Check if Swiper is at the start or end
    const atStart = swiper.activeIndex === 0;
    const atEnd = swiper.isEnd;

    setDisableLeftButton(atStart); // Disable left button if at the start
    setDisableRightButton(atEnd && !hasMore); // Disable right button if at the end and no more items
  };
  const handleSlideChangeEnd = (swiper: any) => {
    if (swiper.isEnd) {
      console.log('Reached the end of the swiper');
      onNextPage();
    }
  };
  const handleSlideChangeWrapper = (swiper: any) => {
    handleSlideChange(swiper);
    handleSlideChangeEnd(swiper);
  };
  // Swiper settings with responsive breakpoints
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
          headingLabel="Popular Products"
          description="A selection of our highly recommended products, endorsed by industry professionals, to initiate your professional journey."
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
        {products.data.products.map((product: ProductType) => (
          <SwiperSlide key={product.id} className="!items-start">
            <Product
              id={product.id}
              name={product.name}
              images={product.images![0]?.url! || ''}
              isBestSeller={product.isBestSeller}
              rating={product.rating}
              modalSetToggle={modalSetToggle}
              openQuickView={() => console.log('')}
              showQuickView={false}
              isLoggedIn={isLoggedIn}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default PopularProducts;
