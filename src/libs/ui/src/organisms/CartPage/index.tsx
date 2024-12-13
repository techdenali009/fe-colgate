import { useCreateorderMutation } from '@store/services/Endpoints/UserApi';
import { clearCart, selectCartDetails } from '@store/services/Slices/AddToCartSlice';
import { RootState } from '@store/store';
import AddToCartPageProducts from '@ui/molecules/AddToCartPageProducts';
import OrderSummary from '@ui/molecules/OrderSummary';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const CartPage: React.FC = () => {
  const cartItems = useSelector((state: RootState) => selectCartDetails(state));
  const [createorder, { isLoading, isError, isSuccess }] = useCreateorderMutation();
  const [, setIsModalOpen] = React.useState(false); // Track modal state
  const dispatch = useDispatch();
  const totalCartPrice = cartItems.reduce((acc, item) => acc + (item.price || 0) * (item.quantity || 0), 0);
  const Tax = +(totalCartPrice * 0.1).toFixed(2);
  const shippingAmount = 49.0;
  const totalToPay = +(totalCartPrice + Tax + shippingAmount).toFixed(2);

  const handleOrderPlacement = async () => {
    try {
      const response = await createorder({ items: cartItems, totalAmount: totalToPay }).unwrap();
      console.log('response', response);
      setIsModalOpen(true);
      dispatch(clearCart());
    } catch (error) {
      console.error('Error creating order:', error);
      alert('Something went wrong while placing the order. Please try again.');
    }
  };
  const [showCartDetails, setShowCartDetails] = useState(true);

  return (
    <div className="flex-col px-6  lg:flex-row flex lg:px-[84.8px] w-full pt-10">

      <div className='w-full'>
        <AddToCartPageProducts
          showCartDetails={showCartDetails}
          setShowCartDetails={setShowCartDetails} // Pass the state setter to the child
        />
      </div>
      {cartItems.length > 0 && (
        <>
          <div className=' border-l-2  mx-4 border-gray-100 h-auto'></div>
          <div className='lg:w-[30%] w-full'>
            <OrderSummary
              cartItems={cartItems}
              totalCartPrice={totalCartPrice}
              shippingAmount={shippingAmount}
              Tax={Tax}
              totalToPay={totalToPay}
              handleCheckout={() => setIsModalOpen(true)} // Open modal on checkout
              isLoading={isLoading}
              isError={isError}
              onPlaceOrder={handleOrderPlacement}
              isSuccess={isSuccess}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
