import React from 'react';
import Slider from 'react-slick';
import { PromotionBanner } from '@ui/organisms/PromotionBanner';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 

interface PromotionBannerData {
  heading: string;
  subtext: string;
 
}

interface PromotionBannerListProps {
  banners: PromotionBannerData[];
}

interface ArrowProps {
  onClick?: () => void;
  currentSlide: number;
  slideCount: number;
}

const PrevArrow: React.FC<ArrowProps> = ({ onClick, currentSlide }) => (
  <div
    className={`absolute left-0 z-10 cursor-pointer top-1/2 transform -translate-y-1/2 ${
      currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : ''
    }`}
    onClick={currentSlide === 0 ? undefined : onClick} 
  >
    <span className="font-SwiperIconns text-[44px] text-appTheme">prev</span>
  </div>
);

const NextArrow: React.FC<ArrowProps> = ({ onClick, currentSlide, slideCount }) => (
  <div
    className={`absolute right-0 z-10 cursor-pointer top-1/2 transform -translate-y-1/2 ${
      currentSlide === slideCount - 1 ? 'opacity-50 cursor-not-allowed' : ''
    }`}
    onClick={currentSlide === slideCount - 1 ? undefined : onClick} 
  >
    <span className="font-SwiperIconns text-[44px] text-appTheme">next</span>
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
    prevArrow: <PrevArrow currentSlide={0} slideCount={0} />,
    nextArrow: <NextArrow currentSlide={0} slideCount={0} />,
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
    <div>
      <div className='hidden lg:grid gap-8 grid-cols-4 py-8 w-[94.25%] mx-auto'>
        {banners.map((banner, index) => (
          <PromotionBanner
            key={index}
            heading={banner.heading}
            subtext={banner.subtext}
          
          />
        ))}
      </div>
      <div className="lg:hidden relative px-4 py-3">
        <Slider
          {...settings}
          prevArrow={<PrevArrow currentSlide={0} slideCount={0} />}
          nextArrow={<NextArrow currentSlide={0} slideCount={0} />}
        >
          {banners.map((banner, index) => (
            <PromotionBanner
              key={index}
              heading={banner.heading}
              subtext={banner.subtext}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};
