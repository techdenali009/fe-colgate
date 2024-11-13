import React, { SVGProps } from 'react';

interface ArrowPrevIconProps extends SVGProps<SVGSVGElement> {
    fillColor?: string; // Optional fillColor prop for the rect
}

const ReviewLike: React.FC<ArrowPrevIconProps> = ({
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
        d="M7.146 11.4v3.2a2.4 2.4 0 002.4 2.4l3.2-7.2V1H3.722a1.6 1.6 0 00-1.6 1.36l-1.104 7.2a1.6 1.6 0 001.6 1.84h4.528zm5.6-10.4h2.136a1.848 1.848 0 011.864 1.6v5.6a1.848 1.848 0 01-1.864 1.6h-2.136V1z"
        fill={fillColor}
      />
    </svg>
  );
};

export default ReviewLike;
