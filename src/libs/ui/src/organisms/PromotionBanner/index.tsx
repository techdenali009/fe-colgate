import React from 'react';
import { Subheading } from '@ui/atoms/Subheading';

import { ProductName } from '@ui/atoms/ProductName';
import IconDisplay from '@ui/molecules/IconDisplay';
interface IPromotionBanner {
  heading: string;
  subtext: string;
 
}

export const PromotionBanner: React.FC<IPromotionBanner> = ({
  heading,
  subtext,
 
}) => {
  return (
    <div className="flex flex-col items-center text-center py-3 ">
      <div className='mx-auto mb-5'>
      
        <IconDisplay heading={heading}></IconDisplay>
      </div>
      <ProductName name={heading} className="!text-[16px] font-HeroNewBold text-appTextColor leading-6 font-bold" />
      <Subheading className="font-HeroNewLight text-[#555555] leading-6 tracking-wi text-base font-light !px-0 dark:text-appWhiteTheme-opacity-50">{subtext}</Subheading> 
    </div>
  );
};
