import { Heading } from '@ui/molecules/Heading/Heading';
import { Paragraph } from '@ui/molecules/Paragraph/Paragraph';
import { StrongText } from '@ui/molecules/StrongText/StrongText';
import React from 'react';


const Culture: React.FC = () => {
  return (
    <div className="bg-white max-w-screen-sm mx-auto">
      <Heading>
      our core values
      </Heading>

      <Heading className='lg:text-base font-black'>
        <StrongText className='lg:text-base text-blue-600'>Our vision and mission</StrongText>
      </Heading>

      <Paragraph className='font-HeroNewSemiBold text-black'>
      Our vision is to improve people’s lives by providing results-oriented skin care solutions that are backed by science for the skin health across the globe.
      
      </Paragraph>

    </div>
  );
};

export default Culture;
