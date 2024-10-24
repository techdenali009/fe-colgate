import { RootState } from '@store/store';
import { Button } from '@ui/atoms/Button';
import { ProductImage } from '@ui/atoms/ProductImage';
import StarRating from '@ui/atoms/StarRating';
import BestSellerBadge from '@ui/molecules/BestSeller';
import { ProductProps } from '@utils/Product';

import { useSelector } from 'react-redux';


function Product({ product ,modalSetToggle, openQuickView}: ProductProps) {
  
  const { image, name, isBestSeller, rating ,id} = product;

  const isLoggedIn = useSelector((state: RootState) => state.authSlice.userInfo); 

 
  return (
   
    <div className=" group relative p-2">
      <div>
        <ProductImage src={image} alt={name} className='h-[305px]'></ProductImage>
        {isLoggedIn && (
          <div className="absolute flex inset-0 bg-[#1e293b82] invisible group-hover:visible w-[310px] justify-center items-center h-[320px]">
            <Button
              onClick={() => openQuickView(id)}
              className="w-2/3 absolute bg-appTheme text-[1rem] p-[.344rem ,.118rem] py-[0.625rem] px-[2.313rem] text-white leading-6 font-bold font-HeroNewBold hover:bg-[#555555] justify-center"
            >
              Quick View
            </Button>
          </div>
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
      </div>
      <div className="flex pt-3 justify-center">
        <Button
          className="py-[0.625rem] px-6
          w-full text-appTheme border-appTheme border-2 text-[1rem] font-bold  font-HeroNewBold  leading-6 tracking-[0.3px]
          group-hover:bg-appBlackTheme group-hover:text-white group-hover:underline group-hover:border-white
          hover:bg-appBlackTheme hover:text-white hover:underline hover:border-white   
        "
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
