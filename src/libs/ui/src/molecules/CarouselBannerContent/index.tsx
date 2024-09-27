
import { Button } from '@ui/atoms/Button';
import { Heading } from '@ui/atoms/CarouselHeading';
import { Subheading } from '@ui/atoms/CarouselSubheading';
import { BannerContentProps } from '@utils/interface';
import React from 'react';

export const BannerContent: React.FC<BannerContentProps> = ({ heading, subheading, buttonText }) => {
  return (
    <div className='bannercontent text-[3rem] leading-[1] text-left pt-[60px] pr-[40px] pb-0 pl-[34px] flex  items-start flex-col  h-full'>

      <Heading  text={heading} />
      <Subheading text={subheading} />
      <Button type='button' 
        className='banner-button h-11 text-base w-34 font-bold rounded-none font-sans text-[#125ce0] bg-white py-2 px-4 hover:bg-blue-700 hover:text-white'>
        {buttonText} 
      </Button>
    </div>
  );
};
