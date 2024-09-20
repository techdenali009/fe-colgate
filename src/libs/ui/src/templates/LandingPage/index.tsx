import PopularProducts from '@ui/organisms/PopularProducts';
import './landingPage.styles.scss'
import { products } from '@utils/test';
export const LandingTemplatePage = () => {
    return <>
        <div>
            <PopularProducts products={products}></PopularProducts>
        </div>

    </>
};
