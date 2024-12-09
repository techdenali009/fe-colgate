

import React, { SVGProps } from 'react';

interface ArrowPrevIconProps extends SVGProps<SVGSVGElement> {
    fillColor?: string; // Optional fillColor prop for the rect
}

const AddFavouriteCloseIcon: React.FC<ArrowPrevIconProps> = ({
  fillColor = 'rgb(var(--primary-color))',
  width = '24',
  height = '24',
  ...rest
}) => {
  return (

    <svg width={width}height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <mask id="mask0_9604_20896" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
        <rect width="24" height="24" fill={fillColor} />
      </mask>
      <g mask="url(#mask0_9604_20896)">
        <path d="M6.35 18.2504L5.75 17.6504L11.4002 12.0002L5.75 6.35L6.35 5.75L12.0002 11.4002L17.6504 5.75L18.2504 6.35L12.6002 12.0002L18.2504 17.6504L17.6504 18.2504L12.0002 12.6002L6.35 18.2504Z" fill="#125CE0" />
      </g>
    </svg>
  );
};

export default AddFavouriteCloseIcon;