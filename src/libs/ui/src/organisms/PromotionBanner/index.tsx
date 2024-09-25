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
    <div className="flex flex-col items-center text-center py-6 ">
      <ProductImage src={imageUrl} alt={heading} className="w-26 h-26 mb-3" />
      <ProductName name={heading} className="text-sm font-HeroNewBold text-zinc-950" />
      <Subheading className="font-HeroNewLight text-gray-600 leading-6" >{subtext}</Subheading> 
    </div>
  );
};
