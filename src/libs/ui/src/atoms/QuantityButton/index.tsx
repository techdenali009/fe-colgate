// import React, { useState } from 'react';

// interface QuantityButtonProps {
//   initialQuantity: number;
//   onQuantityChange: (quantity: number) => void;
//   className?: string;
//   decreaseQuantityclassName?: string; // Optional dynamic class props
//   increaseQuantityclassName?: string;
//   quantityclassName?: string;
// }

// const QuantityButton: React.FC<QuantityButtonProps> = ({
//   initialQuantity,
//   onQuantityChange,
//   className = '',
//   decreaseQuantityclassName = '',
//   increaseQuantityclassName = '',
//   quantityclassName = '',
// }) => {
//   const [quantity, setQuantity] = useState<number>(initialQuantity);

//   const increaseQuantity = () => {
//     setQuantity((prevQuantity) => {
//       const newQuantity = prevQuantity + 1;
//       onQuantityChange(newQuantity);
//       return newQuantity;
//     });
//   };

//   const decreaseQuantity = () => {
//     setQuantity((prevQuantity) => {
//       const newQuantity = Math.max(prevQuantity - 1, 0);
//       onQuantityChange(newQuantity);
//       return newQuantity;
//     });
//   };

//   return (
//     <div className={`flex items-center w-full ${className}`}>
//       <button
//         onClick={decreaseQuantity}
//         className={`bg-appTheme p-2 text-2xl rounded-l-lg hover:bg-appTheme-opacity-70 text-white w-1/3 ${decreaseQuantityclassName}`}
//       >
//         -
//       </button>
//       <span className={`px-4 w-1/3 text-center ${quantityclassName}`}>{quantity}</span>
//       <button
//         onClick={increaseQuantity}
//         className={`bg-appTheme p-2 text-2xl rounded-r-lg hover:bg-appTheme-opacity-70 text-white w-1/3 ${increaseQuantityclassName}`}
//       >
//         +
//       </button>
//     </div>
//   );
// };

// export default QuantityButton;
import React, { useState } from 'react';

interface QuantityButtonProps {
  initialQuantity: number;
  onQuantityChange: (quantity: number) => void;
  containerClassName?: string; // Class for the container
  buttonClassName?: string; // Shared class for buttons
  decreaseButtonClassName?: string; // Specific class for decrease button
  increaseButtonClassName?: string; // Specific class for increase button
  quantityClassName?: string; // Class for quantity display
}

const QuantityButton: React.FC<QuantityButtonProps> = ({
  initialQuantity,
  onQuantityChange,
  containerClassName = '',
  buttonClassName = '',
  decreaseButtonClassName = '',
  increaseButtonClassName = '',
  quantityClassName = '',
}) => {
  const [quantity, setQuantity] = useState<number>(initialQuantity);

  const handleQuantityChange = (delta: number) => {
    setQuantity((prevQuantity) => {
      const newQuantity = Math.max(prevQuantity + delta, 0); // Prevent negative quantities
      onQuantityChange(newQuantity);
      return newQuantity;
    });
  };

  return (
    <div className={`flex items-center h-full  ${containerClassName}`}>
      <button
        onClick={() => handleQuantityChange(-1)}
        className={`px-4 py-2 text-lg rounded-none text-white bg-appTheme w-1/3 ${buttonClassName} ${decreaseButtonClassName}`}
        aria-label="Decrease quantity"
      >
        -
      </button>
      <span
        className={`text-lg font-semibold text-gray-700 w-1/3 text-center ${quantityClassName}`}
        aria-label="Current quantity"
      >
        {quantity}
      </span>
      <button
        onClick={() => handleQuantityChange(1)}
        className={`px-4 py-2 text-lg text-white rounded-none bg-appTheme w-1/3 ${buttonClassName} ${increaseButtonClassName}`}
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
};

export default QuantityButton;
