import React, { SVGProps } from 'react';

interface ArrowPrevIconProps extends SVGProps<SVGSVGElement> {
  fillColor?: string; // Optional fillColor prop for the rect
}

const SortReviewTick: React.FC<ArrowPrevIconProps> = ({
  width = '17',
  height = '12',
  ...rest
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 17 12" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  {...rest} className="fill-current text-brown hover:text-white">
      <path d="M5.773 9.493L2.193 5.73 1 6.985 5.773 12 16 1.254 14.807 0z" strokeWidth="0.5" fillRule="evenodd"></path>
    </svg>


  );
};

export default SortReviewTick;
