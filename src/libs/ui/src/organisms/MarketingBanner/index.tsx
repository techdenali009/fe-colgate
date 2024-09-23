import { Image } from '@ui/atoms/Image';
import { BannerText } from '@ui/molecules/Bannertext';
import { PrimaryButton } from '@ui/molecules/PrimaryButton';
import React from 'react';

interface IMarketingBanner {
    heading: string;
    subtext: string;
    buttonText?: string;
    onButtonClick?: () => void;
    imageUrl: string;
    bgColor?: string;
}

export const MarketingBanner: React.FC<IMarketingBanner> = ({
    heading,
    subtext,
    buttonText,
    onButtonClick,
    imageUrl,
    bgColor,
}) => {
    return (
        <div className={`flex ${bgColor} w-[591.5px] h-auto md:h-[279.750px] flex-col md:flex-row overflow-hidden `}>
            <div className="w-full md:w-1/2 flex flex-col text-left px-8 py-2 overflow-hidden">
                <BannerText heading={heading} subheadingText={subtext} />
                {buttonText && (
                    <div className="group inline-block mt-1">
                        <PrimaryButton
                            onClick={onButtonClick}
                            className="flex items-center border-2 border-transparent group-hover:border-white">
                            {buttonText}
                            <svg
                                className="h-4 w-4 text-gray-300 ml-2"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <line x1="15" y1="16" x2="19" y2="12" />
                                <line x1="15" y1="8" x2="19" y2="12" />
                            </svg>
                        </PrimaryButton>
                    </div>
                )}
            </div>
            <div className="w-full md:w-1/2">
                <Image src={imageUrl} alt={heading} className="w-full h-full" />
            </div>
        </div>
    );
};
