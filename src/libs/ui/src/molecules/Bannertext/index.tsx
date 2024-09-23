import { Heading } from '@ui/atoms/Heading';
import { Subheading } from '@ui/atoms/Subheading';
import React from 'react';

type BannerTextProps = {
    heading: string;
    subheadingText: string;
};

export const BannerText: React.FC<BannerTextProps> = ({ heading, subheadingText }) => (
    <div>
        <Heading
            type="h1"
            className="text-secondary-400 font-normal text-xl w-2/3 mb-6 ">
            {heading}
        </Heading>
        <div className="mt-4 mb-4 pr-8 leading-[1.25rem]">
            <Subheading 
                text={subheadingText} 
                className="font-light leading-6 text-sm"
            />
        </div>
    </div>
);

