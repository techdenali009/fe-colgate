import React from 'react';
import { Heading } from '@ui/atoms/Heading'; 
import { Subheading } from '@ui/atoms/Subheading';

interface IPromotionBannerText {
  text: string;
  heading: string;
  paragraph: string;
}

export const PromotionBannerText: React.FC<IPromotionBannerText> = ({text,heading,paragraph,}) => {
  return (
    <div className="text-center px-4">
      <Subheading text={text} className=" text-sm font-bold text-slate-600 leading-6 short-title uppercase">
      </Subheading>
      <Heading type="h1" className=" text-xl tracking-normal text-primary-400 lg:text-5xl text-gray-800 mt-2">{heading}</Heading>
      <p className="text-sm leading-relaxed text-slate-500 mt-2 max-w-4xl mx-auto">
        {paragraph}
      </p>
    </div>
  );
};
