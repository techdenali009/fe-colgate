// src/ui/organisms/ProductDetailsContent.tsx

import React from 'react';
import ProductCarousel from '@ui/organisms/ProductCarousel';
import TwoCardsComponent from '@ui/molecules/AlreadyHaveAnAccountCard';
import SkinTypeBadge from '@ui/molecules/SkinTypeBadge';
import StarRatingPopover from '@ui/molecules/StarRatingPopover'; // Import StarRatingPopover
import FeatureList from '@ui/atoms/FeatureList';
import { ProductDetailsContentProps } from '@utils/Product';
import { useSelector } from 'react-redux';
import { RootState } from '@store/store';
import './ProductDetailsContent.styles.scss';
import FavoriteButton from '@ui/atoms/ProductDetailsPageFavoriteButton';

const ProductDetailsContent: React.FC<ProductDetailsContentProps> = ({
  id,
  name,
  images,
  description,
  features = [],
  rating,
  reviews,
  restrictedmessage,
}) => {
  const isLoggedIn = useSelector((state: RootState) => state.authSlice.userInfo);
  return (
    <div className='productdetailspage-container flex flex-col lg:flex-row w-full lg:w-full'>
      <div className='mobile-container'>
        <h2 className='heading-mobile text-appTheme font-bold font-sans lg:text-4xl lg:leading-10 leading-8 mb-4 product-name'>
          {name}
        </h2>
        <p className='text-mobile text-[#555] font-normal text-sm mb-6'>Item #{id}</p>
      </div>
      <div className='productdetailspage-media py-3 px-[55px] w-1/2 '>
        <ProductCarousel images={images} name={name} />
      </div>
      <div className='productdetailspage-info py-2.5 pl-[7rem] pr-[3rem] lg:w-full'>
        <div className='desktop-container'>
          <h2 className='heading-desktop text-appTheme font-bold font-sans  text-[2.875rem]  lg:leading-10 leading-8 mb-4 product-name'>
            {name}
          </h2>
          <p className='text-desktop text-[#555] font-normal text-sm mb-6'>Item #{id}</p>
        </div>
        <div className='rating-icons-container flex mb-[20px]'>
          <div className='rating flex '>
            <div className='rating-stars flex mb-12 lg:mb-2'>
              <StarRatingPopover rating={rating} reviews={reviews} /> 
            </div>
            <a href='/' className='text-appTheme pl-2.5'>Write a Review</a>        
          </div>
          {isLoggedIn ? (
            <div className='ml-[53px]'>
              <FavoriteButton />
            </div>
          ) : (
            <></> 
          )}
          
        </div>
        
        {isLoggedIn ? (
          <div className='loggedInContent'>
            <div  className='restrictedmessage text-[14px] leading-6 italic font-semibold restricted-message-section'>{restrictedmessage}</div>
          </div>
        ) : (
          <TwoCardsComponent /> 
        )}
      
        <div className='badges flex mb-6 mt-6'>
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
          <FeatureList features={features} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsContent;
