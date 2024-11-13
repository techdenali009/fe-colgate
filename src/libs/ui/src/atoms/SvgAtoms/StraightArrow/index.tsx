import React, { SVGProps } from 'react';

interface ArrowPrevIconProps extends SVGProps<SVGSVGElement> {
  fillColor?: string;
}

const StraightArrow: React.FC<ArrowPrevIconProps> = ({
  fillColor = 'rgb(var(--primary-color))', 
  width='20',
  height='20',
  ...rest
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest} 
    >
      <path
        d="M10.0008 19.6337L0.367188 10.0001L10.0008 0.366455L10.8008 1.16646L2.50079 9.43365H19.6344V10.5665H2.50079L10.8008 18.8337L10.0008 19.6337Z"
        fill={fillColor}
      />
    </svg>
  );
};

export default StraightArrow;
