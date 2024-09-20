import { useRef } from "react";
import Slider from "react-slick";
import Product from "../Product";
import ProductHeader from "@ui/molecules/FormField/PopularProductHeading";
import { PopularProductsProps } from "@utils/Product";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

function PopularProducts({ products }: PopularProductsProps) {
  const sliderRef = useRef<any>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (direction === "left") {
      sliderRef.current.slickPrev();
      return
    } 
    sliderRef.current.slickNext();
  };

  return (
    <div className="p-4 md:p-16 w-full">
      <ProductHeader handleScroll={handleScroll} />
      <div className="ml-0 md:ml-12 space-x-10">
        <Slider ref={sliderRef} {...sliderSettings}>
          {products.map((product) => (
            <div key={product.id}>
              <Product product={product} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default PopularProducts;
