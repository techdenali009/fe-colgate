import React, { useState, SVGProps } from 'react';

interface CartRightArrowProps extends SVGProps<SVGSVGElement> {
  fillColor?: string;
}

const CartRightArrow: React.FC<CartRightArrowProps> = ({
  fillColor = 'rgb(var(--primary-color))', // Default color
  width = '18', // Default width
  height = '16', // Default height
  ...rest
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
      onMouseEnter={() => setIsHovered(true)}   // Set hover state to true
      onMouseLeave={() => setIsHovered(false)}  // Set hover state to false
    >
      <path
        d="M12.7992 15.0335L11.9992 14.2663L17.6992 8.5335H0.132812V7.3999H17.6992L11.9992 1.6663L12.7992 0.899902L19.8656 7.9663L12.7992 15.0335Z"
        fill={isHovered ? '#7B3F00' : fillColor}  // Change color on hover
      />
    </svg>
  );
};

export default CartRightArrow;
