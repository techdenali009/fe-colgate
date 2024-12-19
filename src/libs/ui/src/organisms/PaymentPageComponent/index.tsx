import React, { useEffect, useState } from 'react';
import Card from '@ui/atoms/Card';
import CardContent from '@ui/atoms/CardContent';
import CardHeader from '@ui/atoms/CardHeader';
import CardTitle from '@ui/atoms/CardTitle';
import { useCreateorderMutation, useGetUserByIdQuery } from '@store/services/Endpoints/UserApi';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, selectCartDetails } from '@store/services/Slices/AddToCartSlice';
import { RootState } from '@store/store';
import RadioButton from '@ui/atoms/RadioButton';
import PriceSummary from '@ui/atoms/SvgAtoms/PriceSummary';
import OrderSuccessModal from '@ui/molecules/OrderSuccessModal';
import { useLazyGetOrderByIdQuery } from '@store/services/Endpoints/OrderApi';
import { ButtonWithTextAndIcon } from '@ui/molecules/ButtonWithTextAndIcon';
import { AppSpinner } from '@ui/atoms/AppSpinner';
import { useNavigate } from 'react-router-dom';
import { setAddressAdded } from '@store/services/Slices/authSlice';

interface paymentProps {
  totalAmount?: number;
  onClose: () => void;
}

const PaymentPage: React.FC<paymentProps> = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('cod');
  const [selectedAddressIndex, setSelectedAddressIndex] = useState<number>(0);
  const [createorder] = useCreateorderMutation();
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => selectCartDetails(state));
  const userId = useSelector((state: RootState) => state.authSlice.userInfo?._id);
  const { data: user } = useGetUserByIdQuery(userId);
  const [loading, setLoading] = useState(false); // Loading state
  const [orderId, setOrderId] = useState<string>('');
  const [orderPlaced, setOrderPlaced] = useState(false); // Flag for when the order is placed
  const navigate = useNavigate();
  const addresses = user?.data?.addresses || [];
  const formatAddress = (address: { street: string; city: string; postalCode: string; country: string; name: string; phone: string; zipCode: string; }) => ({
    address: `${address.street}, ${address.city}, ${address.postalCode}, ${address.country}, ${address.name}, ${address.phone}`,
    street: address.street || '',
    city: address.city || '',
    postalCode: address.zipCode || '',
    country: address.country || '',
    name: address.name || '',
    phone: address.phone || '',
  });
  const formattedAddresses = addresses.map(formatAddress);

  const totalCartPrice = cartItems.reduce(
    (acc, item) => acc + (item.price || 0) * (item.quantity || 0),
    0
  );
  const Tax = +(totalCartPrice * 0.1).toFixed(2);
  const shippingAmount = 49.0;
  const totalToPay = +(totalCartPrice + Tax + shippingAmount).toFixed(2);
  const handleCheckout = async () => {
    const createOrderPayload = {
      userId,
      products: cartItems.map((item) => ({
        product: item.id,
        quantity: item.quantity,
        priceSnapshot: item.price,
      })),
      shippingAddress: formattedAddresses[selectedAddressIndex],
      billingAddress: formattedAddresses[selectedAddressIndex],
      paymentInfo: { method: selectedPaymentMethod },
      taxAmount: Tax,
      totalAmount: totalToPay,
      shippingCost: shippingAmount,
    };

    setLoading(true); // Start loading
    try {
      const response = await createorder(createOrderPayload).unwrap();
      if (response.status === 'Success') {
        setTimeout(() => {
          dispatch(clearCart());
        }, 3000); // Delay navigation for 2 seconds
       
        setOrderId(response.data?.orderId); // Save orderId for modal
        setOrderPlaced(true); // Mark order as placed

        // Wait for modal display and then navigate
        setTimeout(() => {
          navigate('/cart');
        }, 3000); // Delay navigation for 2 seconds
      }
    } catch (error) {
      alert('Failed to create order. Please try again.');
      console.log('error',error);
    } finally {
      setLoading(false); // End loading
    }
  };


  useEffect(() => {
    // Reset the address added flag
    dispatch(setAddressAdded(false));
  }, [dispatch]);

  const [triggerGetOrderById, { data: orderData }] =
    useLazyGetOrderByIdQuery();

  useEffect(() => {
    if (orderId) {
      triggerGetOrderById(orderId);
    }
  }, [orderId, triggerGetOrderById]);
 

  return (
    <>
      <Card className="w-full bg-white relative"> {/* Set relative positioning */}
        <CardHeader className="border-gray-200 p-4">
          <CardTitle className="text-2xl font-semibold text-center">
            {orderPlaced ? '' : 'Checkout'}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6"> {/* Set relative positioning */}
          {/* Show AppSpinner during loading */}
          

          {/* Show the modal after the order is placed, but it doesn't hide the card content */}
          {orderPlaced && (
            <div className="absolute inset-0 flex justify-center items-center z-10"> {/* Modal container */}
              <OrderSuccessModal
                orderNumber={orderData?.data?.order?.orderId || ''}
                totalAmount={orderData?.data?.order?.totalAmount || ''}
              />
            </div>
          )}

          {/* Checkout form when not loading and not placed */}
      
          <div className="flex justify-around gap-[400px]">
            <div className="">
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Select Payment Method</h3>
                <div className="flex gap-4">
                  <RadioButton
                    id="cod"
                    name="paymentMethod"
                    value="cod"
                    label="Cash on Delivery (COD)"
                    selectedValue={selectedPaymentMethod}
                    onChange={setSelectedPaymentMethod}
                    className="flex-1 p-4 border rounded-lg hover:shadow-md cursor-pointer"
                  />
                  <RadioButton
                    id="upi"
                    name="paymentMethod"
                    value="upi"
                    label="UPI Payment"
                    selectedValue={selectedPaymentMethod}
                    onChange={setSelectedPaymentMethod}
                    className="flex-1 p-4 border rounded-lg hover:shadow-md cursor-pointer"
                    disabled
                  />
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Select Shipping Address</h3>
                <div className="grid gap-4">
                  {formattedAddresses.map((address: { name: string ; country: string ; city: string ; phone: number; }, index: React.SetStateAction<number>) => (
                    <div
                      key={String(index)}
                      className={`p-4 border rounded-lg cursor-pointer ${selectedAddressIndex === index
                        ? 'border-blue-500 bg-blue-50'
                        : 'hover:shadow-md'
                      }`}
                      onClick={() => setSelectedAddressIndex(index)}
                    >
                      <p className="font-semibold">{address.name}</p>
                      <div className="flex"><span>{address.country}</span>, <span>{address.city}</span></div>
                      <span>{address.phone}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-[280px] border-l-2 pl-[20px]">
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
              <div className="text-[14px] flex justify-between space-x-4 py-1">
                <span className="text-[#505050]">Shipping</span>
                <span className="font-HeroNewSemiBold">₹ {shippingAmount.toFixed(2)}</span>
              </div>
              <div className="text-[14px] flex justify-between space-x-4 py-1">
                <span className="text-[#505050]">Tax</span>
                <span className="font-HeroNewSemiBold">₹ {Tax.toFixed(2)}</span>
              </div>
              <hr className="border-l-2 my-4 border-x-[#505050]" />
              <div className="text-[14px] flex justify-between space-x-4 py-1 font-bold">
                <span>To Pay</span>
                <span className="font-HeroNewBold">₹ {totalToPay.toFixed(2)}</span>
              </div>

              <div className="relative">
                {loading && (
                  <AppSpinner containerClassName="absolute inset-0 h-full w-full flex justify-center items-center bg-white bg-opacity-20" />
                )}
                <ButtonWithTextAndIcon
                  className={`w-full !bg-appTheme !text-white hover:!border-appTheme font-HeroNewSemiBold ${
                    loading ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  onClick={handleCheckout}
                  disabled={loading} // Disable button during loading
                >
                  {loading ? 'Processing...' : 'Place Order'}
                </ButtonWithTextAndIcon>
              </div>
            </div>
          </div>
 
        </CardContent>
      </Card>
    </>
  );
};

export default PaymentPage;

