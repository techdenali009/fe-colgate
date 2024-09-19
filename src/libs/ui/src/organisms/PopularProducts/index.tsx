import { useRef, useState, useEffect, useCallback } from "react";
import Product from "../Product";
import ProductHeader from "@ui/molecules/FormField/PopularProductHeading";
import { PRODUCTS_PER_PAGE } from "@utils/constants";
import {  ProductType } from "@utils/Product";

const getCircularProducts = (products: ProductType[]) => {
  return [
    ...products.slice(-PRODUCTS_PER_PAGE),
    ...products,
    ...products.slice(0, PRODUCTS_PER_PAGE),
  ];
};

function PopularProducts({ products }: any) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentProducts, setCurrentProducts] = useState(() =>
    getCircularProducts(products)
  );

  // Handle scrolling
  const handleScroll = useCallback((direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current
        ? scrollContainerRef.current.offsetWidth / PRODUCTS_PER_PAGE
        : 400;

      // const scrollAmount = direction === 'left' ? -655 : 655;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  }, []);

  // Check if scroll position needs to update the product list
  const updateProductList = useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      const maxScrollLeft = scrollWidth - clientWidth;

      if (scrollLeft === 0) {
        setCurrentProducts((prev) =>
          getCircularProducts(prev.slice(PRODUCTS_PER_PAGE))
        );
      } else if (scrollLeft >= maxScrollLeft) {
        setCurrentProducts((prev) =>
          getCircularProducts(prev.slice(0, -PRODUCTS_PER_PAGE))
        );
      }
    }
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", updateProductList);
      return () => {
        container.removeEventListener("scroll", updateProductList);
      };
    }
  }, [updateProductList]);

  return (
    <div>
      <ProductHeader handleScroll={handleScroll} />
      <div className=" mt-10 ml-14 w-11/12">
        <div
          className="flex overflow-x-hidden scroll-smooth gap-4"
          ref={scrollContainerRef}
        >
          {currentProducts.map((product: any) => (
            <div key={product.id} className="">
              <Product product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PopularProducts;
