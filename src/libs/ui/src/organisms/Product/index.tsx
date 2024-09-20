import { Button } from "@ui/atoms/Button";
// Import the Star component
import PopularImage from "@ui/atoms/PopularImage";

import StarRating from "@ui/atoms/StarRating";
import { ProductProps } from "@utils/Product";

function Product({ product }: ProductProps) {
  const { image, name, isBestSeller, rating } = product;

  return (
    <div className="w-[290px] group ml-2">
      <div className="relative">
        <PopularImage src={image} alt={name} />
        {isBestSeller && (
          <div className="absolute top-1 left-1 bg-blue-700 text-white text-sm font-heroBold rounded-xl h-5 w-24 items-center text-center tracking-wide">
            Best-seller
          </div>
        )}
      </div>
      <div className="flex mt-2">
        <StarRating rating={rating}></StarRating>
        <span className=" mx-2 text-lg font-heroBold ">{rating}</span>
      </div>
      <h3 className="mt-2 text-black text-base mb-6 h-12 font-heroBold font-bold">
        {name}
      </h3>
      <Button
        className="
          w-full text-blue-700 border-blue-700 border text-lg font-bold h-12 font-heroBold 
          group-hover:bg-black group-hover:text-white group-hover:underline group-hover:border-white
          hover:bg-black hover:text-white hover:underline hover:border-white
        "
        type={"submit"}
      >
        {" Log In to Order"}
      </Button>
    </div>
  );
}

export default Product;
