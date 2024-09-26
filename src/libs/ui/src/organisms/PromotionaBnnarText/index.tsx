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
    <div className="text-center ">
      <Subheading className="font-HeroNewBold text-xs text-gray-500 leading-16 tracking-widest  uppercase">
        {text}
      </Subheading>
      <Heading className=" font-HeroNewLight tracking-normal text-primary-400 text-xl lg:text-5xl text-black py-4">{heading}</Heading>
      <p className=" px-4 lg:px-0 text-sm font-HeroNewLight leading-relaxed text-neutral-600 max-w-4xl mx-auto">
        {paragraph}
      </p>
    </div>
  );
};
