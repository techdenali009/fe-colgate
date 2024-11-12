import React, { SVGProps } from 'react';

interface GreaterArrowProps extends SVGProps<SVGSVGElement> {
  fillColor?: string; 
}

const GreaterArrow: React.FC<GreaterArrowProps> = ({
  fillColor = 'rgb(var(--primary-color))',
  width = '9',
  height = '16',
  ...rest
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 9 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest} 
  >
    <path
      d="M1.53438 15.0664L0.734375 14.2664L7.00078 8.00003L0.734375 1.70002L1.53438 0.900024L8.60078 8.00003L1.53438 15.0664Z"
      fill={fillColor}
    />
  </svg>
);

export default GreaterArrow;
