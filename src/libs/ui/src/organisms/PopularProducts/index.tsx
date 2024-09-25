import { useRef } from "react";
import Slider from "react-slick";
import Product from "../Product";

import { PopularProductsProps } from "@utils/Product";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductHeader from "@ui/molecules/PopularProductHeading";

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  swipeToSlide: true,
  centerPadding: "20px",  // Adjust padding between products
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        centerPadding: "15px",  // Smaller gap for this screen size
      },
    },
    {
      breakpoint: 1125,
      settings: {
        slidesToShow: 2,
        centerPadding: "10px",
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerPadding: "5px",
      },
    },
  ],
};

function PopularProducts({ products }: PopularProductsProps) {
  const sliderRef = useRef<any>(null);
 

  const handleScroll = (direction: "left" | "right") => {
    if (direction === "left") {
      sliderRef.current.slickPrev();
      return;
    }
    sliderRef.current.slickNext();
  };
  
  return (
    <div className="w-full mb-8">
      <ProductHeader handleScroll={handleScroll} />
      <div className="px-14 mx-10 ">
        <Slider ref={sliderRef} {...sliderSettings}>
          {products.map((product) => (
            <div key={product.id} className="mt-1"> {/* Add padding between products */}
              <Product product={product} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default PopularProducts;
