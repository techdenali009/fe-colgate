import React from 'react';
import { Subheading } from '@ui/atoms/Subheading';
import { PrimaryButton } from '@ui/molecules/PrimaryButton';
import { Icon } from '@ui/atoms/Icons';
import arrowIcon from 'src/libs/ui/assets/Right-Icon.e85181bb.svg';
import { Heading } from '@ui/atoms/Heading';

type BannerData = {
  heading: string;
  subtext: string;
  buttonText: string;
  imageUrl: string;
  bgColor: string;
};

interface MarketingBannerTwoProps {
  bannerData: BannerData;
}

export const MarketingBannerTwo: React.FC<MarketingBannerTwoProps> = ({ bannerData }) => {
  const { heading, subtext, buttonText, imageUrl, bgColor } = bannerData;

  return (
    <div className={` mb-12 ${bgColor} `}>
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8 h-full w-full items-center banner-wrapper">
        <div className="mb-10 lg:mb-0">
          <img
            src={imageUrl}
            alt={heading}
            className="w-full lg:h-[40rem] h-[11.5rem] object-cover "
          />
        </div>

        <div className="lg:col-span-2 flex flex-col justify-center text-left first-letter px-6 pb-12 lg:px-16 ">
          <Heading className="text-secondary-400 font-HeroNewLight lg:text-5xl text-2xl tracking-normal !leading-[125%] ">
            {heading}
          </Heading>

          <Subheading className="font-HeroNewRegular leading-6 mt-6 mb-12 lg:text-[16px] text-sm ">
            {subtext}
          </Subheading>

          <div className="relative items-center">
            <PrimaryButton
              onClick={() => console.log('Button clicked!')}
              className=" flex !m-0 text-[1rem] !bg-appTheme  hover:!bg-black font-HeroNewBold items-center font-bold border border-transparent group hover:border-white !py-[13px] !px-4 tracking-[0.3px] leading-[145%]">
              {buttonText}
              <Icon icon={arrowIcon} className="h-8 w-8 ml-2 items-center" />
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};
