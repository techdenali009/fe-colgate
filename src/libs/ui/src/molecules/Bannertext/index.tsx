import { Heading } from '@ui/atoms/Heading';
import { Subheading } from '@ui/atoms/Subheading';
import React from 'react';

type BannerTextProps = {
    heading: string;
    subheadingText: string;
};

export const BannerText: React.FC<BannerTextProps> = ({ heading, subheadingText }) => {
    return (
        <div>
            <Heading className="text-secondary-400 font-HeroNewRegular text-xl w-2/3 mb-6">
                {heading}
            </Heading>
            <div className="mt-4 mb-4 leading-[1.25rem]">
                <Subheading className="font-normal leading-6 text-base  ">
                    {subheadingText}
                </Subheading>    
            </div>
        </div>
    );
};
