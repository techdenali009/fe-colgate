// ArrowIcon.tsx
import React from 'react';

interface ArrowIconProps {
  isOpen: boolean;
}

const ArrowIcon: React.FC<ArrowIconProps> = ({ isOpen }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d={isOpen ? 'M7 14l5-5 5 5' : 'M7 10l5 5 5-5'}
      fill="none"
      stroke="#747474"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ArrowIcon;
