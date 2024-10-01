import { useRef } from 'react';
import Slider from 'react-slick';
import Product from '../Product';
import { PopularProductsProps } from '@utils/Product';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductHeader from '@ui/molecules/PopularProductHeading';
import { sliderSettings } from '@utils/SliderSetting';



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
      <ProductHeader
        headingLabel="Popular Products"
        description="A selection of our highly recommended products, endorsed by industry professionals, to initiate your professional journey."
        handleScroll={handleScroll}
        LogInButtonDisable={true}
      />

      <Slider ref={sliderRef} {...sliderSettings}>
        {products.map((product) => (
          <div key={product.id} className="mt-1 px-4">
            <Product product={product} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default PopularProducts;
