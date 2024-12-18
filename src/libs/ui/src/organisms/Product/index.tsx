import { Button } from '@ui/atoms/Button';
import { ProductImage } from '@ui/atoms/ProductImage';
import BestSellerBadge from '@ui/molecules/BestSeller';
import QuickViewButton from '@ui/molecules/QuickViewButton';
import { ProductProps } from '@utils/Product';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store/store';
import FavoriteButton from '@ui/atoms/ProductDetailsPageFavoriteButton';

import QuantityButton from '@ui/atoms/QuantityButton';
import { addToCart, removeFromCart, updateQuantity } from '@store/services/Slices/AddToCartSlice';
import { useEffect } from 'react';


interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

function Product({
  product,
  modalSetToggle,
  className,
  openQuickView,
  showQuickView,
  footerContent,
  overallclassName,
  ProductImageClassName,
  showAddToCartButton = true,
}: ProductProps & { showAddToCartButton?: boolean }) {
  const { image, name, isBestSeller, id, price } = product;
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const handleNavigate = () => navigate(`/products/${id}/${name}`);

  const isLoggedIn = useSelector((state: RootState) => state.authSlice.userInfo);
  const cartItems: CartItem[] = useSelector((state: RootState) => state.addtocart.items);
  useEffect(() => {
    console.log('Cart Items Updated:', cartItems); // Log cart items in component
  }, [cartItems]);
  const isProductInCart = cartItems.find((item) => item.id === id?.toString());

  const handleAddToCart = () => {
    if (!isProductInCart || isProductInCart.quantity < 1) {
      dispatch(
        addToCart({
          id: id?.toString() || '',
          name,
          price: price as number,
          image,
          quantity: 1,
        })
      );
    }
  };

  // Function to handle the quantity change
  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity < 1) {
      // Dispatch removeFromCart when quantity is 0
      dispatch(removeFromCart(id?.toString() || ''));
    } else {
      dispatch(updateQuantity({ id: id?.toString() || '', quantity: newQuantity }));
    }
  };
  
   
  const handaleClick = (id: number) => {
    // const handaleClick = (id: number) => {
    // navigate(`/products/${id}/${name}`);
    console.log('id',id);
  };


   
  return (
    <div
      className={`group relative p-2 bg-white dark:bg-appdarkcolor ${overallclassName}`}
      onClick={() => handaleClick(Number(id))}
    // onClick={handleNavigate}
    >
      <div className={`${ProductImageClassName}`}>
        <ProductImage
          src={image}
          alt={name}
          className="h-[305px]"
        />
        {showQuickView && (
          <QuickViewButton onClick={() => openQuickView(Number(id))}></QuickViewButton>
        )}
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
        {/* <div className="flex my-2">
          <StarRating rating={rating} />
          <span className=" p-[0.15em] text-base leading-5 font-HeroNewRegular text-appTextColor">
            {rating} (150)
          </span>
        </div> */}
        <h3
          className="mt-2.5 text-appTextColor text-[1rem] h-12 font-HeroNewBold font-bold"
          onClick={() => handaleClick(Number(id))}
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
              <FavoriteButton productId={id?.toString() || ''}></FavoriteButton>
              {isLoggedIn.isVerified && (
                <div className="w-full space-y-2">
                  {showAddToCartButton && (
                    <>
                      {!isProductInCart ? (
                        <Button
                          className={`py-[0.625rem] px-6
       w-full text-appTheme border-appTheme border-2 text-[1rem] font-bold  font-HeroNewBold  leading-6 tracking-[0.3px]
       group-hover:bg-appBlackTheme group-hover:text-white group-hover:underline group-hover:border-white
       hover:bg-appBlackTheme hover:text-white hover:underline hover:border-white  dark:group-hover:text-black  ${className}
     `}
                          type={'submit'}
                          onClick={handleAddToCart}
                        >
                          {'Add To Cart'}
                        </Button>

                      ) : (
                        <QuantityButton
                          initialQuantity={isProductInCart.quantity}
                          containerClassName="!border-2 !border-appTheme w-full"
                          decreaseButtonClassName="!rounded-none w-1/3 "
                          increaseButtonClassName="!rounded-none w-1/3 "
                          quantityClassName=" w-1/3"
                          onQuantityChange={handleQuantityChange}
                        />
                      )}
                    </>
                  )}
                </div>
              )}
              {!isLoggedIn.isVerified && (
                <div className="">
                  <div className="text-xs font-HeroNewBold text-appTheme">
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

