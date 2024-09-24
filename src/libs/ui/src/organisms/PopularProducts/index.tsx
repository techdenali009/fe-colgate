import { useRef } from "react";
import Slider from "react-slick";
import Product from "../Product";

import { PopularProductsProps, ProductType } from "@utils/Product";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductHeader from "@ui/molecules/PopularProductHeading";
import { useGetProductsQuery } from "@store/services/PopularProductEndPoint";

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
      breakpoint: 1024,
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

function PopularProducts() {
  const {data:products,error,isLoading}=useGetProductsQuery();
  const sliderRef = useRef<any>(null);
 
  const handleScroll = (direction: "left" | "right") => {
    if (direction === "left") {
      sliderRef.current.slickPrev();
      return;
    }
    sliderRef.current.slickNext();
  };
  
  return (
    <div className="w-full pb-8">
      <ProductHeader handleScroll={handleScroll} />
      <div className="px-14 mx-11 ">
        <Slider ref={sliderRef} {...sliderSettings}>
          {products?.map((products: ProductType) => (
            <div key={products.id} className="mt-1 ">
              <Product product={products} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default PopularProducts;
