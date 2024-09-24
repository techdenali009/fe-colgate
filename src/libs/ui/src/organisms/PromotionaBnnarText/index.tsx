import React from 'react'; 
import { Subheading } from '@ui/atoms/Subheading';
import { Heading } from '@ui/atoms/Heading';

interface IPromotionBannerText {
  text: string;
  heading: string;
  paragraph: string;
}

export const PromotionBannerText: React.FC<IPromotionBannerText> = ({text,heading,paragraph,}) => {
  return (
    <div className="text-center px-4">
      <Subheading className="font-HeroNewBold text-xs text-gray-500 leading-6 tracking-widest short-title uppercase">
        {text}
      </Subheading>
      <Heading className=" font-HeroNewLight tracking-normal text-primary-400 lg:text-5xl text-gray-800 mt-2">{heading}</Heading>
      <p className=" font-HeroNewLightleading-relaxed text-gray-500 mt-2 max-w-4xl mx-auto">
        {paragraph}
      </p>
    </div>
  );
};
