import React, { useState } from 'react';
import { useApplyCouponMutation } from '@store/services/Endpoints/OrderApi';// Adjust the path accordingly

interface Props {
  totalAmount: number;
  setDiscountedTotal: (amount: number) => void;
}

const CouponForm: React.FC<Props> = ({ totalAmount, setDiscountedTotal }) => {
  const [couponCode, setCouponCode] = useState('');
  const [message, setMessage] = useState('');
  const [applyCoupon, { isLoading }] = useApplyCouponMutation();

  const handleApplyCoupon = async () => {
    setMessage('');
    try {
      const { data } = await applyCoupon({ code: couponCode, totalAmount }).unwrap();
      const { discountValue } = data;
  
      setDiscountedTotal(discountValue); // Send discounted value to parent
      setMessage(`Coupon applied! You saved ₹${discountValue.toFixed(2)}.`);
    } 
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    catch (error:any) {
      setMessage(error?.data?.message || 'Error applying coupon.');
    }
  };
  

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', width: '300px' }}>
      <h3>Apply Coupon</h3>
      <input
        type="text"
        placeholder="Enter coupon code"
        value={couponCode}
        onChange={(e) => setCouponCode(e.target.value)}
        className='w-full p-2 mb-[10px]'
      />
      <button
        onClick={handleApplyCoupon}
        disabled={isLoading}
        className='w-full p-[10px] bg-[#4CAF50] text-white border-none '
      >
        {isLoading ? 'Applying...' : 'Apply Coupon'}
      </button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default CouponForm;
