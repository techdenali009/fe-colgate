import React from 'react';

interface ArrowPrevIconProps {
  fillColor?: string;
}

const CarouselNextArrow: React.FC<ArrowPrevIconProps> = ({
  fillColor = 'rgb(var(--primary-color))',
}) => {
  return (
    <svg
      width="9"
      height="16"
      viewBox="0 0 9 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.5334 15.0663L0.733398 14.2663L6.9998 7.9999L0.733398 1.6999L1.5334 0.899902L8.5998 7.9999L1.5334 15.0663Z"
        fill={fillColor}
      />
    </svg>
  );
};

export default CarouselNextArrow;
