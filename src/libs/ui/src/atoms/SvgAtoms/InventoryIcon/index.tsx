import React, { SVGProps } from 'react';

interface CustomIconProps extends SVGProps<SVGSVGElement> {
  fillColor?: string;
  width?: string;
  height?: string;
}

const InventoryIcon: React.FC<CustomIconProps> = ({
  fillColor = '#000000',
  width = '16', // Adjusted width for your SVG dimensions
  height = '16', // Adjusted height for your SVG dimensions
  ...rest
}) => (
  <svg
    fill={fillColor}
    width={width}
    height={height}
    viewBox='0 0 32 32' // The correct viewBox for your provided SVG
    xmlns='http://www.w3.org/2000/svg'
    {...rest}
  >
    <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
    <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
    <g id='SVGRepo_iconCarrier'>
      <path d='M26,30H6a2.0023,2.0023,0,0,1-2-2V4A2.0023,2.0023,0,0,1,6,2H26a2.0023,2.0023,0,0,1,2,2V28A2.0023,2.0023,0,0,1,26,30ZM6,4V28H26V4Z'></path>
      <rect x='10' y='7' width='12' height='2' transform='translate(32 16) rotate(-180)'></rect>
      <rect x='12' y='12' width='8' height='2' transform='translate(32 26) rotate(-180)'></rect>
      <rect id='_Transparent_Rectangle_' data-name='<Transparent Rectangle>' fill='none' width='32' height='32'></rect>
    </g>
  </svg>
);

export default InventoryIcon;
