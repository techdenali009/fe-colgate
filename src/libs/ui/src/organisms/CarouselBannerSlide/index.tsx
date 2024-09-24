import { Image } from '@ui/atoms/CarouselImage';
import { BannerContent } from '@ui/molecules/CarouselBannerContent';
import { BannerSlideProps } from '@utils/interface';
import React from 'react';




export const BannerSlide: React.FC<BannerSlideProps> = ({ imgSrc, imgAlt, heading, subheading, buttonText, bgColor }) => {
  return (
    <div className='flex flex-row w-full h-[500px]'>
      <div className='w-1/2'>
        <Image src={imgSrc} alt={imgAlt} />
      </div>
      <div className={`w-1/2  p-8 ${bgColor}`}>
        <BannerContent heading={heading} subheading={subheading} buttonText={buttonText} />
        
      </div>
      
    </div>
  );
};