import React from 'react';
import { Image } from '@ui/atoms/Image';

interface ResponseCardProps {
  title: string; 
  children ?: string; 
  timeAgo: string; 
  iconSrc: string; 
  consumerAffairsText: string; 
  containerClassName?: string;
  headerClassName?: string; 
  contentClassName?: string; 
}

const ResponseCard: React.FC<ResponseCardProps> = ({
  title,
  children,
  timeAgo,
  iconSrc,
  consumerAffairsText,
  containerClassName = '',
  headerClassName = '', 
  contentClassName = '', 
}) => {
  return (
    <div className={`border rounded-lg shadow-md bg-white text-sm w-2/3 ${containerClassName}`}>
      <div className={`flex items-center justify-between px-4 py-2 bg-gray-200 border-b ${headerClassName}`}>
        <div className="flex items-center font-medium text-black">
          <Image src={iconSrc} alt="Response Icon" className="mr-1" />
          <span>{title}:</span> 
        </div>
        <div className="text-black">
          {timeAgo}
        </div>
      </div>
      <div className={`p-4 ${contentClassName}`}>
        <h3 className="font-semibold text-base text-black mb-2">{consumerAffairsText}</h3> 
        <p className="text-black mb-4">{children}</p>
      </div>
    </div>
  );
};

export default ResponseCard;
