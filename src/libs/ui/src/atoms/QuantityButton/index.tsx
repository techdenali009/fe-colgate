import React, { useState } from 'react';

interface QuantityButtonProps {
  initialQuantity: number;
  onQuantityChange: (quantity: number) => void;
}

const QuantityButton: React.FC<QuantityButtonProps> = ({ initialQuantity, onQuantityChange }) => {
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
    <div className="flex items-center">
      <button
        onClick={decreaseQuantity}
        className="bg-appTheme p-2 rounded-l-lg hover:bg-appTheme-opacity-70 text-white"
      >
        -
      </button>
      <span className="px-4">{quantity}</span>
      <button
        onClick={increaseQuantity}
        className="bg-appTheme p-2 rounded-r-lg hover:bg-appTheme-opacity-70 text-white"
      >
        +
      </button>
    </div>
  );
};

export default QuantityButton;
