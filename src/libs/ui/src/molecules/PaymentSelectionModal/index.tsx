import React, { useEffect, useState } from 'react';
import Card from '@ui/atoms/Card';
import CardContent from '@ui/atoms/CardContent';
import CardHeader from '@ui/atoms/CardHeader';
import CardTitle from '@ui/atoms/CardTitle';
import { useCreateorderMutation } from '@store/services/Endpoints/UserApi';
import OrderSuccessModal from '../OrderSuccessModal';
import { ButtonWithTextAndIcon } from '../ButtonWithTextAndIcon';
import RadioButton from '@ui/atoms/RadioButton';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, selectCartDetails } from '@store/services/Slices/AddToCartSlice';
import { RootState } from '@store/store';
import { useLazyGetOrderByIdQuery } from '@store/services/Endpoints/OrderApi';
import { AppSpinner } from '@ui/atoms/AppSpinner';

interface PaymentSelectionModalProps {
  totalAmount?: number;
  onProceed: (paymentMethod: string) => void;
  onClose: () => void;
}

const PaymentSelectionModal: React.FC<PaymentSelectionModalProps> = ({
  totalAmount = 0,
  
  onClose
}) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('cod');
  const [orderId, setOrderId] = useState<string>('');
  const [createorder] = useCreateorderMutation();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => selectCartDetails(state));
  const userId = useSelector((state: RootState) => state.authSlice.userInfo?._id);
  const shippingAddress = useSelector((state: RootState) => state.authSlice.userInfo?.addresses);

  const billingAddress = useSelector((state: RootState) => state.authSlice.userInfo?.addresses);
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const formatAddress = (addresses: any) => {


    if (!addresses) return null;

    const formattedAddress = {
      address: addresses[0].street || '',
      city: addresses[0].city || '',
      postalCode: addresses[0].zipCode || '',
      country: addresses[0].country || '',
    };
    return formattedAddress;
  };
  const formattedBillingAddress = billingAddress ? formatAddress(billingAddress) : null;
  const formattedShippingAddress = shippingAddress ? formatAddress(shippingAddress) : null;
  console.log('data', formatAddress(shippingAddress));
  const totalCartPrice = cartItems.reduce((acc, item) => acc + (item.price || 0) * (item.quantity || 0), 0);
  const Tax = +(totalCartPrice * 0.1).toFixed(2);
  const shippingAmount = 49.0;
  const totalToPay = +(totalCartPrice + Tax + shippingAmount).toFixed(2);

  const [triggerGetOrderById, { data: orderData, isLoading: getorderIDloading }] =
    useLazyGetOrderByIdQuery();

  useEffect(() => {
    if (orderId) {
      triggerGetOrderById(orderId);
    }
  }, [orderId, triggerGetOrderById]);

  let createOrderPayload = {
    userId,
    products: cartItems.map((item) => ({
      product: item.id,
      quantity: item.quantity,
      priceSnapshot: item.price,
    })),
    shippingAddress: formattedShippingAddress,
    billingAddress: formattedBillingAddress,
    paymentInfo: { method: 'COD' },
    taxAmount: Tax,
    totalAmount: totalToPay,
    shippingCost: shippingAmount,
  };
  


  const handleSuccessClose = () => {
  
    onClose(); // Optionally close the payment modal as well
  };

  const handleCheckout = async (payMentMode: string) => {
    try {

      createOrderPayload = { ...createOrderPayload, paymentInfo: { method: payMentMode } };

      const response = await createorder(createOrderPayload).unwrap();
      if (response.status === 'Success') {
        setShowSuccessModal(true);
        setTimeout(() => {
          dispatch(clearCart());
        }, 2000);
      }

      setOrderId(response.data?.orderId);


    } catch (error) {
      alert('Failed to create order. Please try again.');
      console.error('Error creating order:', error);
    }
  };
  return (

    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ">
      <Card className="w-full max-w-md  p-6 bg-white text-center ">
        <CardHeader className="flex flex-col items-center">
          <CardTitle className="text-center text-[20px]">Select Payment Method</CardTitle>

        </CardHeader>
        <CardContent>
          <div className="space-y-4">

            <RadioButton
              id="cod"
              name="paymentMethod"
              value="cod"
              label="Cash on Delivery (COD)"
              selectedValue={selectedPaymentMethod}
              onChange={setSelectedPaymentMethod}
              className='!font-HeroNewBold !text-lg'
            />
            <RadioButton
              id="upi"
              name="paymentMethod"
              value="upi"
              label="UPI Payment"
              selectedValue={selectedPaymentMethod}
              onChange={setSelectedPaymentMethod}
              disabled={true} // Disable UPI payment option
              className='!font-HeroNewBold !text-lg' />


            <p className="text-center text-lg font-HeroNewRegular mt-[20px]">
              Total Amount: <span className='text-appTheme'>₹{(totalAmount || 0).toFixed(2)}</span>
            </p>


            <div className="flex space-x-4 !mt-8">
              <ButtonWithTextAndIcon

                className="w-full  shadow-md shadow-slate-300 !bg-black !text-white !border-none"
                onClick={onClose}
              >
                Cancel
              </ButtonWithTextAndIcon>

              <ButtonWithTextAndIcon
                className="w-full  !bg-appTheme shadow-md shadow-slate-300 !text-white  !border-none"
                onClick={() => { handleCheckout('COD') }}
              // disabled={}
              >
                Proceed
              </ButtonWithTextAndIcon>


            </div>
          </div>
        </CardContent>
        {/* Close Button */}

      </Card>
      {getorderIDloading ? (
        // Show a loading indicator or placeholder
        <AppSpinner containerClassName="!h-[350px] flex justify-center items-center absolute top-25" />
      ) : (
        showSuccessModal && (
          <OrderSuccessModal
            orderNumber={orderData?.data?.order?.orderId || ''}
            totalAmount={totalAmount}
            onClose={handleSuccessClose}
          />
        )
      )}

    </div>
  );
};

export default PaymentSelectionModal;