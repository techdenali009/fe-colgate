import React, { useEffect, useState } from 'react';
import { Check, Gift } from 'lucide-react';
import CardHeader from '@ui/atoms/CardHeader';
import Card from '@ui/atoms/Card';
import CardTitle from '@ui/atoms/CardTitle';
import CardContent from '@ui/atoms/CardContent';
import { ButtonWithTextAndIcon } from '../ButtonWithTextAndIcon';
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';

interface OrderSuccessModalProps {
  orderNumber?: string;

  totalAmount?: number;
}

const OrderSuccessModal: React.FC<OrderSuccessModalProps> = ({
  orderNumber = 'N/A',

  totalAmount = 0
}) => {
  const navigate = useNavigate();
  const [confettiActive, setConfettiActive] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setConfettiActive(false); // Stop confetti after 5 seconds
    }, 5000);

    // Clean up the timer if the component is unmounted before the timer is done
    return () => clearTimeout(timer);
  }, []);

  const handleContinueShopping = () => {
    setTimeout(() => {


      navigate('/products');
    }, 15000)
    // Redirect to the PLP page
  };

  // Get window dimensions for Confetti
  const { innerWidth: width, innerHeight: height } = window;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      {confettiActive && (
        <Confetti
          width={width}
          height={height}
          numberOfPieces={500}
        />
      )}
      <Card className="w-full max-w-md p-4 text-center bg-white ">
        <CardHeader className="flex flex-col items-center">
          <div className="bg-green-500 rounded-full p-4 mb-4">
            <Check className="w-12 h-12 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold text-green-600">
            Order Completed Successfully!
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <div className="flex justify-between items-center">
              <span className="font-medium">Order Number:</span>
              <span className="font-bold text-green-700">{orderNumber}</span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="font-medium">Total Amount:</span>
              <span className="font-bold text-green-700">₹{(totalAmount || 0).toFixed(2)}</span>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-2 text-green-700">
            <Gift className="w-5 h-5" />
            <span>Thank you for your purchase!</span>
          </div>

          <ButtonWithTextAndIcon
            className="w-full mt-4 !bg-appTheme !text-white"
            onClick={handleContinueShopping}
          >
            Continue Shopping
          </ButtonWithTextAndIcon>
        </CardContent>
      </Card>
    </div>
  );
};

export default OrderSuccessModal;
