import Paragraph from '@ui/atoms/Paragraph/paragraph';
import React from 'react';

interface TextBlockProps {
  title?: string;
  content: string;
  className?: string;
  customerNumber?: string;
}

const RewardTier: React.FC<TextBlockProps> = ({ className, customerNumber }) => {
  const defaultCustomerNumber = '10103688';

  return (
    <div className={` grid gap-4  lg:p-0 bg-white rounded-lg  lg:mb-12 lg:grid-cols-2 mb-12  ${className}`}>
      <div className="flex flex-col">
        <h2 className="text-[#555555] text-xs font-HeroNewRegular">
          Your Rewards Tier
        </h2>
        <Paragraph className="text-xl lg:text-1.5xl font-normal lg:font-light text-black">
          Learn more about PCA SKIN Rewards
        </Paragraph>
        {/* <a className="text-appTheme link cursor-pointer inline-block leading-24 tracking-[0.3px] py-1 px-4 -ml-4 mr-4 text-xs font-bold text-primary-500">
        View Rewards Program 
        </a> */}
        <a
          className=" text-appTheme  link cursor-pointer inline-block leading-24 tracking-[0.3px] py-1 px-4 -ml-4 mr-4 text-xs font-bold text-primary-500 hover:underline active:bg-appTheme active:text-white w-[212px]">
          View Rewards Program
        </a>
      </div>
      <div className="flex flex-col">
        <h2 className="text-[#555555] text-xs font-HeroNewRegular">
          Customer Number
        </h2>
        <Paragraph className="text-xl lg:text-1.5xl font-normal lg:font-light text-black">
          {customerNumber || defaultCustomerNumber}
        </Paragraph>
      </div>
    </div>
  );
};

export default RewardTier;
