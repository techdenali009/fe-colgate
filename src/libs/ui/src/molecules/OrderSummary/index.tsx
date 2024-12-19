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
  isLoading
}) => {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const userId = useSelector((state: RootState) => state.authSlice.userInfo); 
  console.log('userId',userId?.addresses);
  // const isAddressAdded = useSelector((state: RootState) => state.authSlice.isAddressAdded);
  const dispatch = useDispatch();

  const address = userId?.addresses
  console.log('address',address);

  const handleOpenModal = () => {
    if (Array.isArray(address) && address.length > 0) {
      // Address exists
      dispatch(setAddressAdded(false)); // Set flag to true
      navigate('/payment'); // Navigate to payment page
    } else {
      // Address does not exist
      dispatch(setAddressAdded(true)); // Set flag to false
      toast.info('Please add an address before proceeding.');
      navigate('/myaccount/DropshipAddresses'); // Navigate to address page
    }
  };
  const navigate = useNavigate(); // Initialize useNavigate
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

    </div>
  );
};

export default OrderSummary;
