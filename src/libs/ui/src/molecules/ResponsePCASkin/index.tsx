import React from 'react';
import responsePCASkin from '../../../assets/responsePCASkin.svg';
import { Image } from '@ui/atoms/Image';

interface ResponseCardProps {
  content: string;
  timeAgo: string;
}

const ResponseCard: React.FC<ResponseCardProps> = ({ content, timeAgo }) => {
  return (
    <div className="border rounded-lg shadow-md bg-white text-sm w-2/3">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-200 border-b">
        <div className="flex items-center font-medium text-black">
          <Image src={responsePCASkin} alt="PCA SKIN Icon" className='mr-1'/>
          <span>Response from PCA SKIN:</span>
        </div>
        <div className="text-black">
          {timeAgo}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-base text-black mb-2">Consumer Affairs</h3>
        <p className="text-black mb-4">{content}</p>
      </div>
    </div>
  );
};

export default ResponseCard;
