import React, { useState } from 'react';

interface QuantityButtonProps {
  initialQuantity: number;
  onQuantityChange: (quantity: number) => void;
  className?: string;
  decreaseQuantityclassName?: string; // Optional dynamic class props
  increaseQuantityclassName?: string;
  quantityclassName?: string;
}

const QuantityButton: React.FC<QuantityButtonProps> = ({ initialQuantity,quantityclassName, onQuantityChange,className,decreaseQuantityclassName,increaseQuantityclassName }) => {
  const [quantity, setQuantity] = useState<number>(initialQuantity);

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + 1;
      onQuantityChange(newQuantity);
      return newQuantity;
    });
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity > 1 ? prevQuantity - 1 : 1;
      onQuantityChange(newQuantity);
      return newQuantity;
    });
  };

  return (
    <div className={`flex items-center !w-[90%]  ${className}`}>
      <button
        onClick={decreaseQuantity}
        className={`bg-appTheme p-2 text-2xl rounded-l-lg hover:bg-appTheme-opacity-70 text-white w-1/3 ${decreaseQuantityclassName}`}
      >
        -
      </button>
      <span className={`px-4 w-1/3  ${quantityclassName}`}>{quantity}</span>
      <button
        onClick={increaseQuantity}
        className={`bg-appTheme p-2 text-2xl rounded-r-lg hover:bg-appTheme-opacity-70 text-white w-1/3 ${increaseQuantityclassName}`}
      >
        +
      </button>
    </div>
  );
};

export default QuantityButton;
