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
}

const BusinessCard: React.FC<BusinessCardProps> = ({ imageSrc, title, description, buttonText, onButtonClick }) => {
    return (
        <div className="w-[500px] h-auto max-w-full lg:border-b ">
            <Image
                className="object-cover"
                src={imageSrc}
                alt={title}
            />

            <div className="py-4">
                <h2 className="font-bold text-2xl mb-3 hover:underline cursor-pointer">{title}</h2>
            </div>

            <div className="py-4">
                <Rating />
            </div>

            <div className="py-4">
                <p className="text-gray-700 text-base mb-4 hover:underline cursor-pointer">{description}</p>
            </div>

            <div className="py-4">
                <PrimaryButton onClick={onButtonClick}>
                    {buttonText}
                </PrimaryButton>
            </div>
        </div>
    );
};

export default BusinessCard;
