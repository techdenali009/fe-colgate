import { Icon } from '@ui/atoms/Icons';
import { Image } from '@ui/atoms/Image';
import { BannerText } from '@ui/molecules/Bannertext';
import { PrimaryButton } from '@ui/molecules/PrimaryButton';
import arrowIcon from 'src/libs/ui/assests/Right-Icon.e85181bb.svg';

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
    <div className={`${bgColor} flex lg:w-full lg:h-full h-auto md:h-[279.750px] lg:gap-8 flex-col md:flex-row overflow-hidden`}>      
      <div className=" w-full md:w-1/2 flex flex-col justify-center text-left px-8 overflow-hidden">            
        <BannerText heading={heading} subheadingText={subtext} />
        {buttonText && (
          <div className="group inline-block">
            <PrimaryButton
              onClick={onButtonClick}
              className="flex !m-0 font-HeroNewBold !bg-[#125ce0] hover:!bg-black text-xs items-center border border-transparent hover:border-white px-3 py-2 ">                  
              {buttonText}
              <Icon icon={arrowIcon} className="h-6 w-6 ml-2" />
            </PrimaryButton>
          </div>
        )}


      </div>
      <div className="w-full md:w-1/2">
        <Image src={imageUrl} alt={heading} className="w-full h-full" />
      </div>
    </div>
  );
};
