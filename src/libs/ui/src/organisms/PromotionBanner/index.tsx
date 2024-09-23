import React from 'react';
import { Subheading } from '@ui/atoms/Subheading';
import { ProductImage } from '@ui/atoms/ProductImage';
import { ProductName } from '@ui/atoms/ProductName';

ProductImage
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
    <div className="flex flex-col items-center text-center px-6 py-6">
      <ProductImage src={imageUrl} alt={heading} className="w-24 h-24 mb-4" />
      <ProductName name={heading} className="text-lg font-semibold text-gray-800" />
      <Subheading text={subtext} className="text-sm text-gray-600 mt-2" />
    </div>
  );
};
