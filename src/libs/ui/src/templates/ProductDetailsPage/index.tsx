import React from 'react';
import TwoCardsComponent from '@ui/molecules/AlreadyHaveAnAccountCard/index';
import SkinTypeBadge from '@ui/molecules/SkinTypeBadge';
import RelatedProducts from '@ui/organisms/RelatedProducts';
import { relatedProducts } from '@utils/test';
import ProductDetails from '@ui/molecules/ProductDetails';
import { MarketingBannerTwo } from '@ui/organisms/MarketingBannerTwo';
import { marketingBannerTwo } from '@utils/banner';

interface PDPage {
  submitLabel: string;
  onSubmit: (value: string) => void;
}
export const ProductDetailsPage: React.FC<PDPage> = () => {
  return (
    <>
      <div>
        <TwoCardsComponent />
      </div>

      <div>
        <h3 className="font-semibold mb-4">Skin Types</h3>
        <div className="flex flex-wrap space-x-2">
          <SkinTypeBadge active={true}>Combination</SkinTypeBadge>
          <SkinTypeBadge active={true}>Oily</SkinTypeBadge>
        </div>
        <div className={'w-full bg-[#f4f4f4] lg:pl-[96px] lg:pr-[96px] !m-0'}>
          <ProductDetails></ProductDetails>
          <RelatedProducts relatedProducts={relatedProducts} className={''} />
          <div className='pt-[7.5rem] lg:px-4 '>
            <MarketingBannerTwo bannerData={marketingBannerTwo[0]} />
          </div>
        </div>
      </div>
    </>
  );
};