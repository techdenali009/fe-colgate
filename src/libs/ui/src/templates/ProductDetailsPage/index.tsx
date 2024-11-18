import React from 'react';
import TwoCardsComponent from '@ui/molecules/AlreadyHaveAnAccountCard/index';
import SkinTypeBadge from '@ui/molecules/SkinTypeBadge';
import ReviewSection from '@ui/organisms/ReviewSection';
import RelatedProducts from '@ui/organisms/RelatedProducts';
import { relatedProducts } from '@utils/test';
import ProductDetails from '@ui/molecules/ProductDetails';
import { MarketingBannerTwo } from '@ui/organisms/MarketingBannerTwo';
import { marketingBannerTwo } from '@utils/banner';
import { ReviewProvider } from '@ui/molecules/ReviewUseContext';
import { Review } from '@utils/ReviewTypes';

interface PDPage {
    submitLabel: string;
    onSubmit: (value: string) => void;
     
    productReviews: Array<Review>; // Accept product reviews as prop
}
export const ProductDetailsPage: React.FC<PDPage> = () => {
  return (
    <>
      <div>
        <TwoCardsComponent/>
      </div>

      <div>
        <h3 className="font-semibold mb-4">Skin Types</h3>
        <div className="flex flex-wrap space-x-2">
          <SkinTypeBadge active={true}>Combination</SkinTypeBadge>
          <SkinTypeBadge active={true}>Oily</SkinTypeBadge>
        </div>
        <div className={'w-full bg-lightGray '}>
          <div className='xl:!px-[96px] md:!px-[56px] '>
            <ProductDetails></ProductDetails>
          </div>
          <div className={'w-full  xl:!px-[96px] md:!px-[50px] 2xs:px-[24px]  !m-0'}>
            <RelatedProducts relatedProducts={relatedProducts} className={'xl:!px-[5rem]'} />
          </div>
          <div className='pt-[7.5rem] lg:px-4 !w-full xl:!px-[96px] '>
            <MarketingBannerTwo bannerData={marketingBannerTwo[0]} />
          </div>
         
        </div>
      </div>
      <div>

        <ReviewProvider>
          <ReviewSection ></ReviewSection>
        </ReviewProvider>
      
      </div>
    </>
  );
};