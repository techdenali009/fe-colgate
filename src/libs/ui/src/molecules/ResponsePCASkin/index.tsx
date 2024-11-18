import React from 'react';
import ConsumerAffairsLogo from '@ui/atoms/SvgAtoms/ConsumerAffairsLogo.svg';

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
    <div className={` ${containerClassName}`}>
      <div className={`flex items-center justify-between px-4 py-2 bg-[#f1f1f1] border-b ${headerClassName}`}>
        <div className="flex items-center font-medium text-black">
          <ConsumerAffairsLogo className="mr-1"></ConsumerAffairsLogo>
          <span className='font-HeroNewLight text-[16px] ml-[10px]'>{title}:</span> 
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
