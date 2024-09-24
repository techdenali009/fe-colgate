import { Button } from "@ui/atoms/Button";
// Import the Star component
import PopularImage from "@ui/atoms/PopularImage";

import StarRating from "@ui/atoms/StarRating";
import { ProductProps } from "@utils/Product";

function Product({ product }: ProductProps) {
  const { image, name, isBestSeller, rating } = product;

  return (
    <div className="lg:w-[300px] group ml-2 w-64">
      <div className="relative">
        <PopularImage src={image} alt={name} />
        {isBestSeller && (
          <div className="absolute top-1 left-1 bg-blue-700 leading-5 text-white text-[12px]  font-HeroNewBold rounded-xl h-5 w-24 items-center text-center tracking-[0.3px] ">
            Best-seller
          </div>
        )}
      </div>
      <div className="flex mt-2">
        <StarRating rating={rating}></StarRating>
        <span className=" mx-2 text-base leading-5  mt-1 font-HeroNewRegular ">{rating}  (150)</span>
      </div> 
      <h3 className="mt-2 text-black text-[1rem] mb-6 h-12 font-HeroNewBold font-bold">
        {name}
      </h3>
      <Button
        className="
          w-full text-blue-700 border-blue-700 border-2 text-[1rem] font-bold h-12 font-HeroNewBold 
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
