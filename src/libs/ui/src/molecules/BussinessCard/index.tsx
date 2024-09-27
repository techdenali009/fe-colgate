import React from 'react';
import { PrimaryButton } from '../PrimaryButton';
import { Rating } from '../Rating';

interface BusinessCardProps {
    imageSrc: string;
    title: string;
    description: string;
    buttonText: string;
    onButtonClick: () => void;
}

const BusinessCard: React.FC<BusinessCardProps> = ({ imageSrc, title, description, buttonText, onButtonClick }) => {
    return (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg border border-gray-200">

            <img className="w-full h-48 object-cover" src={imageSrc} alt={title} />

            <Rating />

            <div className="px-6 py-4">
                <h2 className="font-bold text-xl mb-2 hover:underline cursor-pointer">{title}</h2>
                <p className="text-gray-700 text-base hover:underline cursor-pointer">{description}</p>
            </div>


            <div className="px-6 py-4">
                <PrimaryButton
                    onClick={onButtonClick}
                >
                    {buttonText}
                </PrimaryButton>
            </div>
        </div>
    );
};

export default BusinessCard;
