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
    <div className="flex flex-col items-center text-center py-3">
      <ProductImage src={imageUrl} alt={heading} className="relative mx-auto mb-5" />
      <ProductName name={heading} className="text-base font-HeroNewBold text-black" />
      <Subheading className="font-HeroNewLight text-gray-600 leading-6 px-9 lg:px-0 " >{subtext}</Subheading> 
    </div>
  );
};
