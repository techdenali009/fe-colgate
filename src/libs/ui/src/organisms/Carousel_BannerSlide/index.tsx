import { Image } from "@ui/atoms/Carousel_Image";
import { BannerContent } from "@ui/molecules/Carousel_Banner_Content";
import { BannerSlideProps } from "@utils/interfaces";
import React from "react";

export const BannerSlide: React.FC<BannerSlideProps> = ({
  imgSrc,
  imgAlt,
  heading,
  subheading,
  buttonText,
}) => {
  return (
    <div className="flex flex-row w-full h-[400px]">
      <div className="w-1/2">
        <Image src={imgSrc} alt={imgAlt} />
      </div>
      <div className="w-1/2 bg-gray-100 p-8">
        <BannerContent
          heading={heading}
          subheading={subheading}
          buttonText={buttonText}
        />
      </div>
    </div>
  );
};
