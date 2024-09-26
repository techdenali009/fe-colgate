import React from 'react';
import Slider from 'react-slick';
import { PromotionBanner } from '@ui/organisms/PromotionBanner';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 

interface PromotionBannerData {
  heading: string;
  subtext: string;
  imageUrl: string;
}

interface PromotionBannerListProps {
  banners: PromotionBannerData[];
}

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
const PrevArrow: React.FC<any> = ({ onClick }) => (
  <div className="absolute left-0 z-10 cursor-pointer top-1/2 transform -translate-y-1/2" onClick={onClick}>
    <span className="text-4xl text-blue-700">❮</span>
  </div>
);

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
const NextArrow: React.FC<any> = ({ onClick }) => (
  <div className="absolute right-0 z-10 cursor-pointer top-1/2 transform -translate-y-1/2" onClick={onClick}>
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
        breakpoint: 1024, // When the screen width is below 1024px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      {/* Grid layout for larger screens (above lg breakpoint) */}
      <div className='hidden lg:grid gap-4 lg:gap-8 lg:grid-cols-4 py-5 lg:py-8 m-auto'>
        {banners.map((banner, index) => (
          <PromotionBanner
            key={index}
            heading={banner.heading}
            subtext={banner.subtext}
            imageUrl={banner.imageUrl}
          />
        ))}
      </div>

      {/* Slider layout for smaller screens (below lg breakpoint) */}
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
