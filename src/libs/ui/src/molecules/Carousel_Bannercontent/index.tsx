
import { Button } from '@ui/atoms/Button';
import { Heading } from '@ui/atoms/Carousel_Heading';
import { Subheading } from '@ui/atoms/Carousel_Subheading';
import { BannerContentProps } from '@utils/interface';
import React from 'react';

export const BannerContent: React.FC<BannerContentProps> = ({ heading, subheading, buttonText }) => {
  return (
    <div className=" bannercontent flex  items-start flex-col  h-full">

      <Heading  text={heading} />
      <Subheading text={subheading} />
      <Button type="button" className=" banner-button bg-white text-blue-500 py-2 px-4 rounded hover:bg-blue-700 hover:text-white">
                {buttonText}
        </Button>
    </div>
  );
};
