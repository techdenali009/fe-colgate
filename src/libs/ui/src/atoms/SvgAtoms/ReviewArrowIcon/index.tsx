import React, { SVGProps } from 'react';

interface ArrowIconProps extends SVGProps<SVGSVGElement> {
  isOpen: boolean;
  fillColor?: string;
  width?: string;
  height?: string;
}

const ReviewArrowIcon: React.FC<ArrowIconProps> = ({
  isOpen,
  fillColor = '#747474',
  width = '24',
  height = '24',
  ...rest
}) => (
  <svg
    aria-hidden="true"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      d={isOpen ? 'M7 14l5-5 5 5' : 'M7 10l5 5 5-5'}
      fill="none"
      stroke={fillColor}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ReviewArrowIcon;
