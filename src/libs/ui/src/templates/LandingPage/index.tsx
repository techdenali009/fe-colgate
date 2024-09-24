import { Carousel } from '@ui/organisms/Carousel'
import './landingPage.styles.scss'
import { carouselData } from '@utils/carouselData'
import PopularProducts from '@ui/organisms/PopularProducts';
import { products } from '@utils/test';
export const LandingTemplatePage = () => {
    return <>
      
        <Carousel slides={carouselData} />
      
        {/* marketing-banner-1*/}
        {/* promotion-banner-1 */}
        {/* marketing-banner-2" */}
        {/* popular-products */}
        <PopularProducts products={products}></PopularProducts>
    </>
};
