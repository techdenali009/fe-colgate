import React from "react";
import { MarketingBanner } from "../MarketingBanner";
interface MarketingBannerListProps {
    marketingBannersData: Array<{
        heading: string;
        subtext: string;
        buttonText: string;
        imageUrl: string;
        bgColor: string;
    }>;
}

export const MarketingBannerList: React.FC<MarketingBannerListProps> = ({ marketingBannersData }) => {
    const handleButtonClick = (heading: string) => {
        console.log(`Button clicked on banner: ${heading}`);
    };

    return (
        <div className="hidden lg:grid lg:grid-cols-2 w-full h-auto pb-12 px-16 space-x-6">
            {marketingBannersData.map((banner, index) => (
                <div key={index} className="flex items-center  ">
                    <MarketingBanner
                        heading={banner.heading}
                        subtext={banner.subtext}
                        buttonText={banner.buttonText}
                        onButtonClick={() => handleButtonClick(banner.heading)}
                        imageUrl={banner.imageUrl}
                        bgColor={banner.bgColor}
                    />
                </div>
            ))}
        </div>
    );
};
