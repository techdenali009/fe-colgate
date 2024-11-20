import React, { SVGProps } from 'react';

interface ArrowPrevIconProps extends SVGProps<SVGSVGElement> {
    fillColor?: string; // Optional fillColor prop for the rect
}

const ReviewDisLike: React.FC<ArrowPrevIconProps> = ({
  fillColor = 'rgb(var(--primary-color))',
  width = '16',
  height = '16',
  ...rest
}) => {
  return (


    <svg
      aria-hidden="true"
      width={width}
      height={height}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M10.6 6.6V3.4A2.4 2.4 0 008.2 1L5 8.2V17h9.024a1.6 1.6 0 001.6-1.36l1.104-7.2a1.6 1.6 0 00-1.6-1.84H10.6zM5 17H2.6A1.6 1.6 0 011 15.4V9.8a1.6 1.6 0 011.6-1.6H5V17z"
        fill={fillColor}
      />
    </svg>
  );
};

export default ReviewDisLike;
