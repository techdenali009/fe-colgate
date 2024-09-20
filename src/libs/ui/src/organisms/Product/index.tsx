import { Button } from "@ui/atoms/Button";
import StarRating from "@ui/atoms/StarRating";
import PopularImage from "@ui/atoms/PopularImage";
import { ProductProps } from "@utils/Product";




function Product({ product }: ProductProps) {
  const { image, name, isBestSeller, rating } = product;

  return (
    <div className="p-2 w-[338px] group">
      <div className="relative">
        <PopularImage src={image} alt={name} />
        {isBestSeller && (
          <div className="absolute top-1 left-1 bg-blue-700 text-white text-sm font-bold rounded-xl h-5 w-24 items-center text-center tracking-wide">
            Best-seller
          </div>
        )}
      </div>
      <StarRating
        rating={rating}
        className="text-blue-700 mt-10 border-white"
      />
      <h3 className="mt-2 text-black text-base mb-6  h-12 font-heroNewBold font-bold">
        {name}
      </h3>
      <Button
        className="
          w-full text-blue-700 border-blue-700 border text-lg font-bold h-12 
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
