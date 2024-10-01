import React from 'react';
import { Subheading } from '@ui/atoms/Subheading';
import { ProductImage } from '@ui/atoms/ProductImage';
import { ProductName } from '@ui/atoms/ProductName';
interface IPromotionBanner {
  heading: string;
  subtext: string;
  imageUrl: string;
}

export const PromotionBanner: React.FC<IPromotionBanner> = ({
  heading,
  subtext,
  imageUrl,
}) => {
  return (
    <div className="flex flex-col items-center text-center py-3 ">
      <ProductImage src={imageUrl} alt={heading} className="relative mx-auto mb-5" />
      <ProductName name={heading} className="!text-[16px] font-HeroNewBold text-black leading-6 font-bold" />
      <Subheading className="font-HeroNewLight text-[#555555] leading-6 tracking-wi text-base font-light ">{subtext}</Subheading> 
    </div>
  );
};
