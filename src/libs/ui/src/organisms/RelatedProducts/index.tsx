import { useRef } from 'react';
import Slider from 'react-slick';
import Product from '../Product';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductHeader from '@ui/molecules/PopularProductHeading';
import { sliderSettings } from '@utils/SliderSetting';
import { RelatedProductsProps } from '@utils/Product';

function RelatedProducts({ relatedProducts }: RelatedProductsProps) {
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
    <div className='2xs:ml-[10px] lg:!ml-0 lg:!mr-0 lg:!pl-0 lg:!pr-0'>
      <div className='mt-[60px]'>
        <ProductHeader
          className='2xs:text-[20px] lg:!text-[28px] !h-[10px]'
          headingLabel="Related Products"
          handleScroll={handleScroll}
          LogInButtonDisable={false} description={''} modalSetToggle={()=>console.log('')} 
          disableLeftButton={false}
          disableRightButton={false}
        />
      </div>
      <Slider ref={sliderRef} {...sliderSettings}  >
        {relatedProducts.map((relatedProducts) => (
          <div key={relatedProducts.id} className="mt-1 2xs:px-[9px] lg:!px-[15px] md:!px-[17px]" >

            <Product className='!h-[40px] text-center !py-[0.5rem]' product={relatedProducts} modalSetToggle={() => console.log('')} openQuickView={() => console.log('')} showQuickView={false}/>
          </div>
        ))}
      </Slider>
    </div>      
  );
}

export default RelatedProducts;