import React, { useState } from 'react';
import PriceSummary from '@ui/atoms/SvgAtoms/PriceSummary';
import { ButtonWithTextAndIcon } from '../ButtonWithTextAndIcon';
import PaymentSelectionModal from '../PaymentSelectionModal';

interface OrderSummaryProps {
 // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  cartItems:any[];
  totalCartPrice: number;
  shippingAmount: number;
  Tax: number;
  totalToPay: number;
  handleCheckout: (mode:string) => void;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  onPlaceOrder: () => Promise<void>;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
  totalCartPrice,
  shippingAmount,
  Tax,
  totalToPay,
  handleCheckout,
  isLoading
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true); // Open the modal when checkout is clicked
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  const handleProceedToPayment = (paymentMethod: string) => {
    
    handleCheckout(paymentMethod);
    handleCloseModal(); // Close modal after proceeding
  };

  return (
    <div className="p-4">
      <div className="flex">
        <div className="mr-2">
          <PriceSummary />
        </div>
        <p className='font-HeroNewBold'>Price Summary</p>
      </div>
      <div className="text-[14px] flex justify-between space-x-4 py-1 mt-[10px]">
        <span className='text-[#505050]'>Order Total</span>
        <span className='font-HeroNewSemiBold'>₹ {totalCartPrice.toFixed(2)}</span>
      </div>
      <div className="text-[14px] flex justify-between space-x-4 py-1">
        <span className='text-[#505050]'>Shipping</span>
        <span className='font-HeroNewSemiBold'>₹ {shippingAmount.toFixed(2)}</span>
      </div>
      <div className="text-[14px] flex justify-between space-x-4 py-1">
        <span className='text-[#505050]'>Tax</span>
        <span className='font-HeroNewSemiBold'>₹ {Tax.toFixed(2)}</span>
      </div>
      <hr className="border-l-2 my-4 border-x-[#505050]" />
      <div className="text-[14px] flex justify-between space-x-4 py-1 font-bold">
        <span>To Pay</span>
        <span className='font-HeroNewBold'>₹ {totalToPay.toFixed(2)}</span>
      </div>
      <ButtonWithTextAndIcon className={`w-full !bg-appTheme !text-white hover:!border-appTheme font-HeroNewSemiBold ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`} 
        onClick={handleOpenModal}
        disabled={isLoading}>
          CHECK OUT
      </ButtonWithTextAndIcon>
     
      {isModalOpen && (
        <PaymentSelectionModal
          totalAmount={totalToPay}
          onProceed={handleProceedToPayment}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default OrderSummary;
