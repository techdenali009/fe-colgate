import React from 'react';

interface ViewCartModalProps {
  handleLogoutClick?: () => void; // Optional prop for future extensibility
}

const AddToCartPageProducts: React.FC<ViewCartModalProps> = () => {
  return (
    <div className="pr-14 pl-14 mt-22 ml-[42px] mr-[42px] mt-16">
      <h1 className="text-[45px] mb-8">Cart</h1>
      <div className="cart-item-section">
        <div className="h-[var(--cart-empty-height)] bg-[#f2f2f2] lg:flex lg:justify-center lg:items-center text-center py-20 mb-14 empty-cart">
          <div>
            <div className="text-base font-bold leading-6 lg:mr-2 empty-cart-message">
              <p>
                <strong>Your cart is currently empty.</strong>
              </p>
            </div>
            <div>
              <a
                className="text-primary-400 text-sm text-blue-500 font-bold hover:text-secondary-400 focus-visible:text-brand-white-100 focus-visible:bg-primary-400 focus-visible:rounded-3xl link inline-block leading-24 tracking-[0.3px] py-1 px-4 -ml-4 mr-4 light primary anchor-wrapper"
                title="Shop Products"
                target="_self"
                href="/products"
              >
                Shop Products
                <span className="arrow-icon right w-4 h-4 ml-2 align-middle inline-block"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCartPageProducts;