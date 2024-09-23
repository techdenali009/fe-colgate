import React from 'react';
import { Heading } from '@ui/atoms/Heading';
import { Subheading } from '@ui/atoms/Subheading';
import { marketingBannerTwo } from '@utils/banner';
import { PrimaryButton } from '@ui/molecules/PrimaryButton';

export const MarketingBannerTwo: React.FC = () => {
  const { heading, subtext, buttonText, imageUrl, bgColor } = marketingBannerTwo[0];

  return (
    <div className={`container mb-12 ${bgColor}`}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12 items-center banner-wrapper">
        <div className="relative h-[300px] lg:h-[640px]">
          <img
            src={imageUrl}
            alt={heading}
            className="w-full h-64 lg:h-full object-cover"
          />
        </div>

        <div className="lg:col-span-2 flex flex-col justify-center text-left first-letter pl-5 pr-12 ">
          <Heading type="h1" className="text-secondary-400 font-light lg:text-5xl text-2xl tracking-normal leading-10 mb-4">
            {heading}
          </Heading>

          <Subheading
            text={subtext}
            className="text-base font-light leading-6 mb-4"/>

          <div className="relative">
            <PrimaryButton
              onClick={() => console.log('Button clicked!')}
              className="flex items-center border-2 border-transparent group hover:border-white">
              {buttonText}
              <svg
                className="h-4 w-4 text-gray-300 ml-2"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1="5" y1="12" x2="19" y2="12" />
                <line x1="15" y1="16" x2="19" y2="12" />
                <line x1="15" y1="8" x2="19" y2="12" />
              </svg>
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};
