import { Button } from '@ui/atoms/Button';
import { Heading } from '@ui/atoms/Carousel_Heading';
import { Subheading } from '@ui/atoms/carousel_Subheading';
import { BannerContentProps } from '@utils/interfaces';
import React from 'react';




export const BannerContent: React.FC<BannerContentProps> = ({ heading, subheading, buttonText }) => {
  return (
    <div className="flex flex-col justify-center h-full">
      <Heading text={heading} />
      <Subheading text={subheading} />
      
    </div>
  );
};
