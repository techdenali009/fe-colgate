import { Icon } from '@ui/atoms/Icons';
import { Image } from '@ui/atoms/Image';
import { BannerText } from '@ui/molecules/Bannertext';
import { PrimaryButton } from '@ui/molecules/PrimaryButton';
import arrowIcon from 'src/libs/ui/assets/Right-Icon.e85181bb.svg';

import React from 'react';

interface IMarketingBanner {
    heading: string;
    subtext: string;
    buttonText?: string;
    onButtonClick?: () => void;
    imageUrl: string;
    bgColor?: string;
}

export const MarketingBanner: React.FC<IMarketingBanner> = ({
  heading,
  subtext,
  buttonText,
  onButtonClick,
  imageUrl,
  bgColor,
}) => {
  return (
    <div className={`${bgColor} flex lg:w-full lg:h-[100%]  md:h-[279.750px] lg:gap-8 flex-col md:flex-row `}>      
      <div className=" w-full md:w-1/2 flex flex-col justify-center text-left px-8 overflow-hidden">            
        <BannerText heading={heading} subheadingText={subtext} />
        {buttonText && (
          <div className="group inline-block mt-6">
            <PrimaryButton
              onClick={onButtonClick}
              className="flex !m-0 font-HeroNewBold !bg-appTheme items-center hover:!bg-black text-[0.75rem] border border-transparent hover:border-white px-3 py-2 leading-[150%] font-bold tracking-[0.3px]" >                  
              {buttonText}
              <Icon icon={arrowIcon} className="h-6 w-6 ml-2" />
            </PrimaryButton>
          </div>
        )}


      </div>
      <div className="w-full md:w-1/2 h-full">
        <Image src={imageUrl} alt={heading} className="w-full h-full object-fill"/>
      </div>
    </div>
  );
};
