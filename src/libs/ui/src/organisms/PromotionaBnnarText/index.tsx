import { Heading } from '@ui/atoms/Heading';
import { Subheading } from '@ui/atoms/Subheading';
import React from 'react'; 


interface IPromotionBannerText {
  text: string;
  heading: string;
  paragraph: string;
}

export const PromotionBannerText: React.FC<IPromotionBannerText> = ({text,heading,paragraph,}) => {
  return (
    <div className="text-center ">
      <Subheading className="font-HeroNewBold text-xs  text-[#555555] leading-16 tracking-widest  uppercase">
        {text}
      </Subheading>
      <Heading className=" font-HeroNewLight tracking-normal text-[32px] lg:text-5xl text-black py-1">{heading}</Heading>
      <p className="lg:px-0 text-sm font-HeroNewLight leading-6 text-[#555555] text-opacity: 1 max-w-4xl mx-auto">
        {paragraph}
      </p>
    </div>
  );
};
