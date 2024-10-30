import React from 'react';
import { Image } from '@ui/atoms/Image';
import ConsumerAffairslogo from '../../../assets/appSvgs/ConsumerAffairslogo.svg';

interface ResponseCardProps {
  title: string; 
  children ?: string; 
  pcaTimeAgo: string; 
  iconSrc: string; 
  consumerAffairsText: string; 
  containerClassName?: string;
  headerClassName?: string; 
  contentClassName?: string; 
  reviewId: number;
}

const ResponseCard: React.FC<ResponseCardProps> = ({
  title,
  children,
  pcaTimeAgo,
  consumerAffairsText,
  containerClassName = '',
  headerClassName = '', 
  contentClassName = '', 
}) => {
  return (
    <div className={`border rounded-lg  bg-white text-sm  ${containerClassName}`}>
      <div className={`flex items-center justify-between px-4 py-2 bg-[#f1f1f1] border-b ${headerClassName}`}>
        <div className="flex items-center font-medium text-black">
          <Image src={ConsumerAffairslogo} alt="Response Icon" className="mr-1" />
          <span>{title}:</span> 
        </div>
        <div className="text-black">
          {pcaTimeAgo}
        </div>
      </div>
      <div className={`p-4 ${contentClassName}`}>
        <h3 className="text-base text-black mb-2">{consumerAffairsText}</h3> 
        <p className="text=[10px] text-black mb-4 font-HeroNewRegular leading-5">{children}</p>
      </div>
    </div>
  );
};

export default ResponseCard;
