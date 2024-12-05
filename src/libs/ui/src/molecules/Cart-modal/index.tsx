import CartRightArrow from '@ui/atoms/SvgAtoms/cartModalRightArrow';
import React, { useState } from 'react';



const CartModal: React.FC = () => {

  const [, setIsVisible] = useState(false);

  const [promotionMessage] = useState<string>('Free drop-shipping for any order $100 or above');

  return (
    <div
      className="relative "
      onMouseEnter={() => setIsVisible(true)}  // Show on hover
      onMouseLeave={() => setIsVisible(false)} // Hide on leave
    >
           
          
      <div className="absolute float-right right-0 h-auto bg-white px-4 py-4  
                     bg-brand-white-100 
                    shadow-md rounded-b-3xl flex flex-col !rounded-none -mr-[80px] z-[999]"
      >
        <div className="p-4 mb-4 leading-5 rounded-lg bg-blue-100 text-blue-600 text-xs global-cart-promotion-message">
          {promotionMessage}
        </div>
        <div className="flex font-HeroNewRegular flex-col items-center justify-center min-h-[15.625rem] global-cart-empty-view">
          <h2>There is nothing here yet</h2>
          <a
            className="text-blue-600 relative gap-1 flex font-bold text-base font-HeroNewBold py-1 px-4 -ml-4 mr-4 light"
            href="/products"
          >
            <h2>Start Shopping</h2><CartRightArrow  className='mt-1'/>
                           
          </a>
        </div>

        <div className="flex justify-between pt-4 pb-2 gap-16">
          <a
            className="text-primary-400 font-bold text-base bg-blue-600 hover:text-secondary-400 text-white 
                                 focus-visible:rounded-3xl link inline-block leading-24 tracking-[0.3px] 
                                py-4 px-4 -ml-4 mr-4 light secondary anchor-wrapper false align-middle text-center 
                                 font-HeroNewBold !m-0 !w-40 justify-center hover:!bg-black hover:!underline hover:!bg-brand-black-100 global-cart-view-button"
            href="/cart"
          >
                            View Cart
          </a>
          <div className="flex flex-col mr-5 global-cart-subtotal py-4 px-4">
            <span className="text-base font-HeroNewRegular">Subtotal</span>
          </div>
        </div>
      </div>
          
    </div>
  );
};

export default CartModal;
