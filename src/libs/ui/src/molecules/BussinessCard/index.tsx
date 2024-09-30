import React from 'react';
import { PrimaryButton } from '../PrimaryButton';
import { Rating } from '../Rating';
import { Image } from '@ui/atoms/Image';

interface BusinessCardProps {
    imageSrc: string;
    title: string;
    description: string;
    buttonText: string;
    onButtonClick: () => void;
    className?: string;
}

const BusinessCard: React.FC<BusinessCardProps> = ({ imageSrc, title, description, buttonText, onButtonClick, className }) => {
  return (
    <div className={`w-[500px] h-auto max-w-full lg:border-b ${className}`}>
      <Image
        className="object-cover"
        src={imageSrc}
        alt={title}
      />

      <div className="py-2">
        <h2 className="font-bold text-2xl mb-3 hover:underline cursor-pointer">{title}</h2>
      </div>

      <div className="py-2">
        <Rating />
      </div>

      <div className="py-2">
        <p className="text-gray-700 text-base mb-4 hover:underline cursor-pointer">{description}</p>
      </div>

      <div className="py-2">
        <PrimaryButton onClick={onButtonClick}>
          {buttonText}
        </PrimaryButton>
      </div>
    </div>
  );
};

export default BusinessCard;
