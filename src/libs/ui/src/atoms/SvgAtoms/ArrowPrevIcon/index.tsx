import React, { SVGProps } from 'react';

interface ArrowPrevIconProps extends SVGProps<SVGSVGElement> {
  fillColor?: string; // Optional fillColor prop for the rect
}

const ArrowPrevIcon: React.FC<ArrowPrevIconProps> = ({
  fillColor = 'rgb(var(--primary-color))',
  width='48',
  height='48',
  ...rest 
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest} 
    >
      <rect width={width} height={height} fill={fillColor} />{' '}
      {/* Use fillColor here */}
      <mask
        id="mask0_7455_69956"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="8"
        y="8"
        width="32"
        height="32"
      >
        <rect x="8" y="8" width="32" height="32" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_7455_69956)">
        <path
          d="M26.666 31.0663L19.5996 23.9999L26.666 16.8999L27.466 17.6999L21.1996 23.9999L27.466 30.2663L26.666 31.0663Z"
          fill="white"
        />
      </g>
    </svg>
  );
};

export default ArrowPrevIcon;
