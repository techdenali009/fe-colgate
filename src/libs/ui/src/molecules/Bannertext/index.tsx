import { Heading } from '@ui/atoms/Heading';
import { Subheading } from '@ui/atoms/Subheading';
import React from 'react';

type BannerTextProps = {
    heading: string;
    subheadingText: string;
};

export const BannerText: React.FC<BannerTextProps> = ({ heading, subheadingText }) => {
  return (
    <div className='justify-center'>
      <Heading className="text-secondary-400 font-normal text-xl w-5/6 leading-[150%] font-HeroNewRegular">
        {heading}
      </Heading>
      <div className="mt-6 mb-6">
        <Subheading className="font-HeroNewRegular font-normal text-sm leading-[150%] line-clamp-3 overflow-hidden text-ellipsis ">
          {subheadingText}
        </Subheading>    
      </div>
    </div>
  );
};
