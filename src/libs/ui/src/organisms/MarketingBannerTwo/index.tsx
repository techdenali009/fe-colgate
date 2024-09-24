import React from 'react';
import { Heading } from '@ui/atoms/Heading';
import { Subheading } from '@ui/atoms/Subheading';
import { PrimaryButton } from '@ui/molecules/PrimaryButton';
import { Icon } from '@ui/atoms/Icons';
import arrowIcon from "src/libs/ui/assets/Right-Icon.e85181bb.svg";

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
    <div className={`container mb-12 ${bgColor}`}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12 h-full w-full items-center banner-wrapper">
        <div className="relative h-[300px] lg:h-[640px]">
          <img
            src={imageUrl}
            alt={heading}
            className="w-full h-64 lg:h-full object-cover"
          />
        </div>

        <div className="lg:col-span-2 flex flex-col justify-center text-left first-letter pl-10 pr-12 ">
          <Heading className="text-secondary-400 font-HeroNewLight lg:text-5xl text-2xl tracking-normal !leading-snug">
            {heading}
          </Heading>

          <Subheading className="font-HeroNewRegular leading-6 my-10 ">
            {subtext}
          </Subheading>

          <div className="relative">
            <PrimaryButton
              onClick={() => console.log('Button clicked!')}
              className="flex text-base font-HeroNewBold items-center border border-transparent group hover:border-white p-3">
              {buttonText}
              <Icon icon={arrowIcon} className="h-8 w-8 ml-2" />
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};
