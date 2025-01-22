import React from 'react';
import PriceSummary from '@ui/atoms/SvgAtoms/PriceSummary';
import { ButtonWithTextAndIcon } from '../ButtonWithTextAndIcon';
// import PaymentSelectionModal from '../PaymentSelectionModal';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store/store';
import { toast } from 'react-toastify';
import { setAddressAdded } from '@store/services/Slices/authSlice';

interface OrderSummaryProps {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  cartItems: any[];
  totalCartPrice: number;
  shippingAmount: number;
  Tax: number;
  totalToPay: number;
  handleCheckout: (mode: string) => void;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  onPlaceOrder: () => Promise<void>;
  discountAmount: number
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
  totalCartPrice,
  shippingAmount,
  Tax,
  isLoading,
  discountAmount,
}) => {
  const navigate = useNavigate();
  const userId = useSelector((state: RootState) => state.authSlice.userInfo);
  const dispatch = useDispatch();

  const address = userId?.addresses;

  // Calculate discount
  const discount = totalCartPrice > 1000 ? totalCartPrice * 0.2 : 0;
  const discountedPrice = totalCartPrice - discount;
  const totalToPay = discountedPrice + shippingAmount + Tax;

  const handleOpenModal = () => {
    if (Array.isArray(address) && address.length > 0) {
      dispatch(setAddressAdded(false)); // Set flag to true
      navigate('/payment'); // Navigate to payment page
    } else {
      dispatch(setAddressAdded(true)); // Set flag to false
      toast.info('Please add an address before proceeding.');
      navigate('/myaccount/DropshipAddresses'); // Navigate to address page
    }
  };

  return (
    <div className="p-4">
      <div className="flex">
        <div className="mr-2">
          <PriceSummary />
        </div>
        <p className="font-HeroNewBold">Price Summary</p>
      </div>
      <div className="text-[14px] flex justify-between space-x-4 py-1 mt-[10px]">
        <span className="text-[#505050]">Order Total</span>
        <span className="font-HeroNewSemiBold">₹ {totalCartPrice.toFixed(2)}</span>
      </div>
      {discount > 0 && (
        <div className="text-[14px] flex justify-between space-x-4 py-1">
          <span className="text-[#505050]">Discount (20%)</span>
          <span className="font-HeroNewSemiBold">- ₹ {discount.toFixed(2)}</span>
        </div>
      )}
      <div className="text-[14px] flex justify-between space-x-4 py-1">
        <span className="text-[#505050]">Shipping</span>
        <span className="font-HeroNewSemiBold">₹ {shippingAmount.toFixed(2)}</span>
      </div>
      <div className="text-[14px] flex justify-between space-x-4 py-1">
        <span className="text-[#505050]">Tax</span>
        <span className="font-HeroNewSemiBold">₹ {Tax.toFixed(2)}</span>
      </div>
      <span className="font-HeroNewSemiBold text-red-500">
        -₹{Math.abs(Number(discountAmount - totalCartPrice)).toFixed(2)}
      </span>

      <hr className="border-l-2 my-4 border-x-[#505050]" />
      <div className="text-[14px] flex justify-between space-x-4 py-1 font-bold">
        <span>To Pay</span>
        <span className="font-HeroNewBold">₹ {totalToPay.toFixed(2)}</span>
      </div>
      <ButtonWithTextAndIcon
        className={`w-full !bg-appTheme !text-white hover:!border-appTheme font-HeroNewSemiBold ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={handleOpenModal}
        disabled={isLoading}
      >
        CHECK OUT
      </ButtonWithTextAndIcon>
    </div>
  );
};

export default OrderSummary;
