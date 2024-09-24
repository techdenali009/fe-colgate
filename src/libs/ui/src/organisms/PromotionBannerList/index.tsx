import React from 'react';
import Slider from 'react-slick';
import { PromotionBanner } from '@ui/organisms/PromotionBanner';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

interface PromotionBannerData {
  heading: string;
  subtext: string;
  imageUrl: string;
}

interface PromotionBannerListProps {
  banners: PromotionBannerData[];
}

const PrevArrow: React.FC<any> = ({ onClick }) => (
  <div className="absolute left-0 z-10 cursor-pointer top-44" onClick={onClick}>
    <span className="text-4xl text-blue-700">❮</span>
  </div>
);

const NextArrow: React.FC<any> = ({ onClick }) => (
  <div className="absolute right-0 z-10 cursor-pointer top-44" onClick={onClick}>
    <span className="text-4xl text-blue-700">❯</span>
  </div>
);

export const PromotionBannerList: React.FC<PromotionBannerListProps> = ({ banners }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
     
    ],
  };

  return (
    <div className="px-12 py-6">
      <div className="hidden lg:block">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {banners.map((banner, index) => (
            <PromotionBanner key={index} heading={banner.heading} subtext={banner.subtext} imageUrl={banner.imageUrl} />
          ))}
        </div>
      </div>

      <div className="lg:hidden relative">
        <Slider {...settings}>
          {banners.map((banner, index) => (
            <PromotionBanner
              key={index}
              heading={banner.heading}
              subtext={banner.subtext}
              imageUrl={banner.imageUrl}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};
