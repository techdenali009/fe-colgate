import React, { SVGProps } from 'react';

interface ArrowPrevIconProps extends SVGProps<SVGSVGElement> {
  fillColor?: string;
}

const ArrowNextIcon: React.FC<ArrowPrevIconProps> = ({
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
      <rect width={width} height={height} fill={fillColor} />
      <mask
        id="mask0_7455_69960"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="8"
        y="8"
        width="32"
        height="32"
      >
        <rect x="8" y="8" width="32" height="32" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_7455_69960)">
        <path
          d="M20.5344 31.0663L19.7344 30.2663L26.0008 23.9999L19.7344 17.6999L20.5344 16.8999L27.6008 23.9999L20.5344 31.0663Z"
          fill="white"
        />
      </g>
    </svg>
  );
};

export default ArrowNextIcon;
