import { selectCartDetails } from '@store/services/Slices/AddToCartSlice';
import { RootState } from '@store/store';
import CartRightArrow from '@ui/atoms/SvgAtoms/cartModalRightArrow';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AddToCartPageProducts from '../AddToCartPageProducts';

const CartModal: React.FC = () => {
  const [, setIsVisible] = useState(false);
  const cartItems = useSelector((state: RootState) => selectCartDetails(state));
  const [showCartDetails, setShowCartDetails] = useState(false);
  
  const totalCartPrice = cartItems.reduce((acc, item) => {
    const price = item.price || 0;
    const quantity = item.quantity || 0;
    return acc + price * quantity;
  }, 0);
  return (
    <div
      className="relative "
      onMouseEnter={() => setIsVisible(true)} // Show on hover
      onMouseLeave={() => setIsVisible(false)} // Hide on leave
    >
      <div
        className="absolute float-right right-0 h-auto bg-white px-4 py-4  
                     bg-brand-white-100 
                    shadow-md rounded-b-3xl flex flex-col !rounded-none -mr-[80px] z-[999]"
      >
        {/* <div className="p-4 mb-4 leading-5 rounded-lg bg-blue-100 text-appTheme text-xs global-cart-promotion-message">
          {promotionMessage}
        </div> */}

        {cartItems.length > 0 ? (
          <AddToCartPageProducts
            showCartDetails={showCartDetails}
            setShowCartDetails={setShowCartDetails} // Pass the state setter to the child
          />
        ) : (
          <div className="flex font-HeroNewRegular flex-col items-center justify-center min-h-[15.625rem] global-cart-empty-view">
            <h2>There is nothing here yet</h2>
            <a
              className="text-appTheme relative gap-1 flex font-bold text-base font-HeroNewBold py-1 px-4 -ml-4 mr-4 light"
              href="/products"
            >
              <h2>Start Shopping</h2>
              <CartRightArrow className="mt-1" />
            </a>
          </div>
        )}

        <div className="flex flex-row  justify-between pt-4 pb-2 gap-16">
          <div className="flex flex-row">
            <a
              className="text-primary-400 font-bold text-base bg-appTheme hover:text-secondary-400 text-white 
                                 focus-visible:rounded-3xl link inline-block leading-24 tracking-[0.3px] 
                                py-4 px-4 -ml-4 mr-4 light secondary anchor-wrapper false align-middle text-center 
                                 font-HeroNewBold !m-0 !w-40 justify-center hover:!bg-black hover:!underline hover:!bg-brand-black-100 global-cart-view-button"
                href="/cart"
              >
                View Cart
              </a>
            </div>
            <div className="flex flex-row mr-5 py-4 px-4">
              <span className="text-base ">Subtotal:</span>
              <span className="font-HeroNewSemiBold">
                &#8377;{totalCartPrice.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default CartModal;
