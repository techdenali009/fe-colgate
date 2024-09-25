import { useRef } from 'react';
import Slider from 'react-slick';
import Product from '../Product';

import {  ProductType } from '@utils/Product';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductHeader from '@ui/molecules/PopularProductHeading';
import { useGetProductsQuery } from '@store/services/PopularProductEndPoint';

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  swipeToSlide: true,
  centerPadding: '20px',  
  responsive: [
    {
      breakpoint: 1435,
      settings: {
        slidesToShow: 3,
        centerPadding: '15px',  
      },
    },
    {
      breakpoint: 1130,
      settings: {
        slidesToShow: 2,
        centerPadding: '10px',
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        centerPadding: '5px',
      },
    },
  ],
};

function PopularProducts() {
  const {data:products}=useGetProductsQuery(undefined);
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
    <div className="w-full pb-8">
      <ProductHeader handleScroll={handleScroll} />
      <div className="md:px-14 md:mx-11  px-5 mx-6">
        <Slider ref={sliderRef} {...sliderSettings}>
          {products?.map((products: ProductType) => (
            <div key={products.id} className="mt-1 ">
              <Product product={products} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default PopularProducts;
