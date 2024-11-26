import { useNavigate } from 'react-router-dom';
import { Button } from '@ui/atoms/Button';
import { ProductImage } from '@ui/atoms/ProductImage';
import StarRating from '@ui/atoms/StarRating';
import BestSellerBadge from '@ui/molecules/BestSeller';
import QuickViewButton from '@ui/molecules/QuickViewButton';
import { ProductProps } from '@utils/Product';
import FavoriteButton from '@ui/atoms/ProductDetailsPageFavoriteButton';

function Product({
  id,
  name,
  images,
  isBestSeller,
  rating,
  modalSetToggle,
  className,
  openQuickView,
  showQuickView,
  footerContent,
  isLoggedIn
}: ProductProps) {

  const navigate = useNavigate();
  const handaleClick = (id: string | undefined) => {
    navigate(`/products/${id}/${name}`);
  };
 
  return (
    <div className={'group relative p-2 bg-white dark:bg-appdarkcolor'}>
      <div>
        <ProductImage src={images} alt={name} className="h-[305px]" />
        {showQuickView && <QuickViewButton onClick={() => openQuickView(id)} />}
        {isBestSeller && (
          <BestSellerBadge
            className={
              'absolute top-1 left-1 !bg-appTheme !text-appWhiteTheme !font-HeroNewBold w-[100px] text-xs text-center leading-3 !tracking-[0.3px] !rounded-xl '
            }
          >
            Best-seller
          </BestSellerBadge>
        )}
      </div>
      <div className="">
        <div className="flex my-2">
          <StarRating rating={rating} />
          <span className=" p-[0.15em] text-base leading-5 font-HeroNewRegular text-appTextColor">
            {rating} (150)
          </span>
        </div>
        <h3
          className="mt-2.5 text-appTextColor text-[1rem] h-12 font-HeroNewBold font-bold"
          onClick={() => handaleClick(id)}
        >
          {name}
        </h3>
      </div>
      {footerContent && <>{footerContent}</>}
      {!footerContent && (
        <div>
          {!isLoggedIn && (
            <div className="w-full">
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
          )}

          {isLoggedIn && (
            <>
              {/* This  is the FavoriteButton  add to favorite */}
              <FavoriteButton></FavoriteButton>
              {isLoggedIn.isVerified && (
                <div className="w-full space-y-2">

                  {/* <QuantityButton    //This is the Quantity button which we will use in feature
                    initialQuantity={0}
                    onQuantityChange={() => {
                      console.log("quqantity updated");
                    }}
                  /> */}
                  <Button
                    className={`py-[0.625rem] px-6
        w-full text-appTheme border-appTheme border-2 text-[1rem] font-bold  font-HeroNewBold  leading-6 tracking-[0.3px]
        group-hover:bg-appBlackTheme group-hover:text-white group-hover:underline group-hover:border-white
        hover:bg-appBlackTheme hover:text-white hover:underline hover:border-white  dark:group-hover:text-black  ${className}
      `}
                    type={'submit'}
                  >
                    {'Add To Cart'}
                  </Button>
                </div>
              )}
              {!isLoggedIn.isVerified && (
                <div className="">
                  <div className="text-xs font-HeroNewBold text-appTheme  ">
                    Must be a verified professional to access wholesale pricing
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Product;
