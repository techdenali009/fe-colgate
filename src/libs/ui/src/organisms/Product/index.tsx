
import { Button } from '@ui/atoms/Button';
import { ProductImage } from '@ui/atoms/ProductImage';
import StarRating from '@ui/atoms/StarRating';
import BestSellerBadge from '@ui/molecules/BestSeller';
import QuickViewButton from '@ui/molecules/QuickViewButton';
import { ProductProps } from '@utils/Product';


function Product({ product ,modalSetToggle,className, openQuickView,showQuickView }: ProductProps) {
  
  const { image, name, isBestSeller, rating ,id} = product;


 
  return (
   
    <div className={'group relative p-2 bg-white dark:bg-appdarkcolor'}>
      <div> 
        <ProductImage src={image} alt={name} className='h-[305px]'></ProductImage>
        {showQuickView && (
          <QuickViewButton onClick={() => openQuickView(id)}></QuickViewButton>
        )}
        {isBestSeller && (
          <BestSellerBadge
            className={
              'absolute top-1 left-1 !bg-appTheme !text-appWhiteTheme !font-HeroNewBold w-[100px]  text-xs text-center leading-3  !tracking-[0.3px] !rounded-xl '
            }
          >
            Best-seller
          </BestSellerBadge>
        )}
      </div>
      <div className="">
        <div className="flex my-2 ">
          <StarRating rating={rating}></StarRating>
          <span className=" p-[0.15em] text-base leading-5  font-HeroNewRegular text-appTextColor">
            {rating} (150)
          </span>
        </div>
        <h3 className="mt-2.5  text-appTextColor text-[1rem] h-12 font-HeroNewBold font-bold">
          {name}
        </h3>
        {/* <h2>${price}</h2> */}
      </div>
      <div className="flex pt-3 justify-center">
        <Button
          className={`py-[0.625rem] px-6
          w-full text-appTheme border-appTheme border-2 text-[1rem] font-bold  font-HeroNewBold  leading-6 tracking-[0.3px]
          group-hover:bg-appBlackTheme group-hover:text-white group-hover:underline group-hover:border-white
          hover:bg-appBlackTheme hover:text-white hover:underline hover:border-white  dark:group-hover:text-black  ${className}
        `}
          type={'submit'}
          onClick={modalSetToggle}
        >
          {' Log In to Order'}
        </Button>
      </div>
      
    </div>
  );
}

export default Product;
