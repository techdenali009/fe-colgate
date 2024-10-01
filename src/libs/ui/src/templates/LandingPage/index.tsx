// import { Carousel } from '@ui/organisms/Carousel';
import './landingPage.styles.scss';
// import { carouselData } from '@utils/carouselData';
import PopularProducts from '@ui/organisms/PopularProducts';
import { MarketingBannerList } from '@ui/organisms/MarketingBannerList';
import {
  marketingBannersData,
  marketingBannerTwo,
  promotionBannersData,
} from '@utils/banner';

import { MarketingBannerTwo } from '@ui/organisms/MarketingBannerTwo';
import { products as initialProducts } from '@utils/test';
import { PromotionBannerSection } from '@ui/organisms/PromotionaBannerSection';
import GreetRegister from '@ui/organisms/GreetingRegister';
import { useState, useEffect } from 'react';

import { ProductType } from '@utils/Product';
import PopularProductSkeleton from '@ui/molecules/PopularProductSkeleton';


export const LandingTemplatePage = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
 
  useEffect(() => {
    const timer = setTimeout(() => {
      setProducts(initialProducts); 
    }, 4000);

    return () => clearTimeout(timer); 
  }, []);

  
  return (
    <>
      <GreetRegister />
      {/* <Carousel slides={carouselData} /> */}

      {/* marketing-banner-1*/}
      <div className="px-appPaddingLeft">
        <MarketingBannerList marketingBannersData={marketingBannersData} />
      </div>
      {/* promotion-banner-1 */}
      <PromotionBannerSection banners={promotionBannersData} />
      {/* marketing-banner-2" */}
      <MarketingBannerTwo bannerData={marketingBannerTwo[0]} />


      {/* popular-products */}

      <div className="lg:pl-appPaddingLeft lg:pr-appPaddingRight pl-6 pr-6 mb-20">
        {products.length === 0 ? (
          <PopularProductSkeleton />
        ) : (
          <PopularProducts products={products} />
        )}
      </div>
    </>
  );
};
