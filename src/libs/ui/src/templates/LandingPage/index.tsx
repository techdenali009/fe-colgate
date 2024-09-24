import { Carousel } from '@ui/organisms/Carousel'
import './landingPage.styles.scss'
import { carouselData } from '@utils/carouselData'
import PopularProducts from '@ui/organisms/PopularProducts';

export const LandingTemplatePage = () => {
    return <>
      <div className='container' >
        <Carousel slides={carouselData} />
      </div>
        {/* marketing-banner-1*/}
        {/* promotion-banner-1 */}
        {/* marketing-banner-2" */}
        {/* popular-products */}
        <PopularProducts></PopularProducts>
    </>
};
