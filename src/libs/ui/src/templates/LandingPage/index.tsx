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
import { products } from '@utils/test';
import { PromotionBannerSection } from '@ui/organisms/PromotionaBannerSection';
import GreetRegister from '@ui/organisms/GreetingRegister';

export const LandingTemplatePage = () => {
  return (
    <>
   
      <GreetRegister/>
      {/* <Carousel slides={carouselData} /> */}

      {/* marketing-banner-1*/}
      <MarketingBannerList marketingBannersData={marketingBannersData} />
      {/* promotion-banner-1 */}
      <PromotionBannerSection banners={promotionBannersData} />
      {/* marketing-banner-2" */}
      <MarketingBannerTwo bannerData={marketingBannerTwo[0]} />
      {/* popular-products */}
      <div className="lg:pl-appPaddingLeft lg:pr-appPaddingRight pl-6 pr-6 mb-20 ">
        <PopularProducts products={products}></PopularProducts>
      </div>
    </>
  );
};
