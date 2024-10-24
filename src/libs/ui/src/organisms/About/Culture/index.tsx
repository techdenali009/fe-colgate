import { Heading } from '@ui/molecules/Heading';
import { Paragraph } from '@ui/molecules/Paragraph';

import React from 'react';


const Culture: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <Heading className='lg:!text-[2.375rem]  !leading-10 font-extralight text-[1.75rem] font-HeroNewUltraLight  tex t-center items-center mb-6'  >
      our core values
      </Heading>

      <Heading className='lg:!text-[1.25rem] text-appTheme leading-10 !font-bold !font-HeroNewBold items-center mb-6'>
        Our vision and mission
      </Heading>

      <Paragraph className='lg:max-w-3xl max-w-full font-normal !text-[1rem] !font-HeroNewRegular mb-6 items-center !leading-6 !tracking-normal'>
      Our vision is to improve people’s lives by providing results-oriented skin care solutions that are backed by science for the skin health across the globe.
      
      </Paragraph>

    </div>
  );
};

export default Culture;
