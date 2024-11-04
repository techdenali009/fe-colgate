import React from 'react';
import TwoCardsComponent from '@ui/molecules/AlreadyHaveAnAccountCard/index';
import SkinTypeBadge from '@ui/molecules/SkinTypeBadge';
import ProductDetails from '@ui/molecules/ProductDetails';
import { MarketingBannerTwo } from '@ui/organisms/MarketingBannerTwo';
import { marketingBannerTwo } from '@utils/banner';
import { useLocation, useParams } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import StarRatingPopover from '@ui/molecules/ReviewPopOver';
import ProductCarousel from '@ui/organisms/ProductCarousel';
import RelatedProducts from '@ui/organisms/RelatedProducts';
import { relatedProducts } from '@utils/test';
import StarRating from '@ui/atoms/StarRating';
import './ProductDetailsPage.styles.scss';

interface PDPage {
  submitLabel: string;
  onSubmit: (value: string) => void;
}

export const ProductDetailsPage: React.FC<PDPage> = () => {
  const { id } = useParams(); 
  const location = useLocation(); 
  const { name, images, description, features, rating } = location.state || {};

  return (
    <>
      <div>
        <div className='productdetailspage-container flex flex-col lg:flex-row w-full lg:w-full'>
          <div className='mobile-container'>
            <h2 className='heading-mobile text-[#125ce0] font-bold font-sans lg:text-4xl lg:leading-10 leading-8 mb-4 product-name'>
              {name}
            </h2>
            <p className='text-mobile text-[#555] font-normal text-sm mb-6'>Item #{id}</p>
          </div>
          <div className='productdetailspage-media py-3 px-[55px]'>
            {<ProductCarousel images={images} name={name} />}
          </div>
          <div className='productdetailspage-info py-2.5 px-20 lg:w-full'>
            <div className='desktop-container'>
              <h2 className='heading-desktop text-[#125ce0] font-bold font-sans lg:text-4xl lg:leading-10 leading-8 mb-4 product-name'>
                {name}
              </h2>
              <p className='text-desktop *:text-[#555] font-normal text-sm mb-6'>Item #{id}</p>
            </div>
            <div className='rating flex'>
              <div className='rating-stars flex'>
                <StarRating rating={rating} />
                <span className="rating p-[0.15em] text-base leading-5 font-HeroNewRegular text-appTextColor font-hero font-thin">
                  {rating} (150)
                </span>
              </div>
              <a href="/" className='text-[#125ce0] pl-2.5'>Write a Review</a>
            </div>
            <TwoCardsComponent />
            <div className='badges flex mb-6'>
              <div className='badge1 pr-[25px]'>
                <h3 className="text-[#555555] font-hero font-bold text-[15px] mb-4 lg:mb-2">Skin Types</h3>
                <div className="flex space-x-2">
                  <SkinTypeBadge active={true}>Combination</SkinTypeBadge>
                  <SkinTypeBadge active={true}>Oily</SkinTypeBadge>
                </div>
              </div>
              <div className='badge2'>
                <h3 className="text-[#555555] font-hero font-bold text-[15px] mb-4 lg:mb-2">Skin concerns</h3>
                <div className="flex space-x-2">
                  <SkinTypeBadge active={true}>Combination</SkinTypeBadge>
                  <SkinTypeBadge active={true}>Oily</SkinTypeBadge>
                </div>
              </div>
            </div>
            <div className="product-info_product-description-content-wrapper text-sxl font-hero leading-6">
              <p><strong>{name}</strong> {description}</p>
              <ul className="list-disc pl-5">
                {features.map((feature: string, index: number) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className={'w-full bg-[#f4f4f4] lg:pl-[96px] lg:pr-[96px] !m-0'}>
          <ProductDetails />
          <RelatedProducts relatedProducts={relatedProducts} className={''} />
          <div className='pt-[7.5rem] lg:px-4'>
            <MarketingBannerTwo bannerData={marketingBannerTwo[0]} />
          </div>
        </div>
      </div>
    </>
  );
};
