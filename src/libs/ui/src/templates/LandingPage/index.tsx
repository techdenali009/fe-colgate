import { Carousel } from '@ui/organisms/Carousel'
import './landingPage.styles.scss'
import { carouselData } from '@utils/carouselData'
import PopularProducts from '@ui/organisms/PopularProducts';
import { products } from '@utils/test';
import { PromotionBannerSection } from '@ui/organisms/PromotionaBannerSection'

import { MarketingBannerList } from "@ui/organisms/MarketingBannerList"
import { marketingBannersData, marketingBannerTwo, promotionBannersData } from '@utils/banner';
import { MarketingBannerTwo } from '@ui/organisms/MarketingBannerTwo';

export const LandingTemplatePage = () => {
    return <>
      <div className='container' >
        <Carousel slides={carouselData} />
      </div>
        {/* marketing-banner-1*/}
        <MarketingBannerList  marketingBannersData={marketingBannersData}/>
        {/* promotion-banner-1 */}
        <PromotionBannerSection banners={promotionBannersData} />
        {/* marketing-banner-2" */}
        <MarketingBannerTwo bannerData={marketingBannerTwo[0]} />
        {/* popular-products */}
        <PopularProducts products={products}></PopularProducts>
    </>
};
