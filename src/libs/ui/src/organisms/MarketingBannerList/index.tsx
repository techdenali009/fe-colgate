import React from 'react';
import { MarketingBanner } from '../MarketingBanner';
import { useNavigate } from 'react-router-dom';
interface MarketingBannerListProps {
  marketingBannersData: Array<{
    heading: string;
    subtext: string;
    buttonText: string;
    imageUrl: string;
    bgColor: string;
  }>;
}

export const MarketingBannerList: React.FC<MarketingBannerListProps> = ({
  marketingBannersData,
}) => {
  const navigate = useNavigate();
  const handleViewAllClick = () => {
    navigate('/products'); // Add this function to handle the click event
  };

  return (
    <div className='hidden lg:grid grid-cols-2 lg:gap-8 h-[100%]'>
      {marketingBannersData.map((banner, index) => (
        <div key={index} className='flex '>
          <MarketingBanner
            heading={banner.heading}
            subtext={banner.subtext}
            buttonText={banner.buttonText}
            onButtonClick={handleViewAllClick}
            imageUrl={banner.imageUrl}
            bgColor={banner.bgColor}
          />
        </div>
      ))}
    </div>
  );
};
