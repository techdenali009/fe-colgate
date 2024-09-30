
import { Button } from '@ui/atoms/Button';
import PopularImage from '@ui/atoms/PopularImage';
import StarRating from '@ui/atoms/StarRating';
import BestSellerBadge from '@ui/molecules/BestSeller';
import { ProductProps } from '@utils/Product';

function Product({ product }: ProductProps) {
  const { image, name, isBestSeller, rating } = product;

  return (
   
    <div className=" group">
      <div className="relative">
        <PopularImage src={image} alt={name} />

        {isBestSeller && (
          <BestSellerBadge
            className={
              'absolute top-[-4px] left-0 !bg-appTheme !text-appWhiteTheme !font-HeroNewBold w-[100px]  text-xs text-center leading-3  !tracking-wide !rounded-xl'
            }
          >Best seller
          </BestSellerBadge>
        )}
      </div>
      <div className="p-0.5">
        <div className="flex mt-1 ">
          <StarRating rating={rating}></StarRating>
          <span className="mx-1 text-base leading-5 mt-1 font-HeroNewRegular text-appTextColor">
            {rating} (150)
          </span>
        </div>
        <h3 className="mt-2.5  text-appTextColor text-[1rem] mb-6 h-9 font-HeroNewBold font-bold">
          {name}
        </h3>
      </div>
      <Button
        className=" align-middle
          w-full text-appTheme border-appTheme border-2 text-[1rem] font-bold h-12 font-HeroNewBold 
          group-hover:bg-appBlackTheme group-hover:text-white group-hover:underline group-hover:border-white
          hover:bg-appBlackTheme hover:text-white hover:underline hover:border-white   
        "
        type={'submit'}
      >
        {' Log In to Order'}
      </Button>
    </div>
  );
}

export default Product;
