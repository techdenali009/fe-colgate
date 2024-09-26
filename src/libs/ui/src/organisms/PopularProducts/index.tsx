import { useRef } from 'react';
import Slider from 'react-slick';
import Product from '../Product';

import { PopularProductsProps } from '@utils/Product';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductHeader from '@ui/molecules/PopularProductHeading';

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  swipeToSlide: true,

  responsive: [
    {
      breakpoint: 1350,
      settings: {
        slidesToShow: 3,
        centerPadding: '15px',  
      },
    },
    {
      breakpoint: 1020,
      settings: {
        slidesToShow: 2,
        centerPadding: '10px',
      },
    },

    {
      breakpoint: 670,
      settings: {
        slidesToShow: 1,
        centerPadding: '5px',
      },
    },
  ],
};

function PopularProducts({ products }: PopularProductsProps) {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const sliderRef = useRef<any>(null);
  const handleScroll = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      sliderRef.current.slickPrev();
      return;
    }
    sliderRef.current.slickNext();
  };

  return (
    <div className="w-full">
      <ProductHeader handleScroll={handleScroll} />
      <div className="">
        <Slider ref={sliderRef} {...sliderSettings}>
          {products.map((product) => (
            <div key={product.id} className="mt-1 pr-8">
              <Product product={product} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default PopularProducts;
