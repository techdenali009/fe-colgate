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
            <Heading className="text-secondary-400 font-HeroNewRegular text-xl w-2/3">
                {heading}
            </Heading>
            <div className="mt-6 mb-6 ">
                <Subheading className="font-HeroNewRegular font-light text-sm leading-6 line-clamp-3 overflow-hidden text-ellipsis ">
                    {subheadingText}
                </Subheading>    
            </div>
        </div>
    );
};
