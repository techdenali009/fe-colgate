import React, { SVGProps } from 'react';

interface DropDownIconProps extends SVGProps<SVGSVGElement> {
  fillColor?: string;
}

const HomeIcon: React.FC<DropDownIconProps> = ({
  fillColor = '#000000',
  width = '16',
  height = '16',
  ...rest
}) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 16 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...rest}
  >
    <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
    <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
    <g id='SVGRepo_iconCarrier'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M8 0L0 6V8H1V15H4V10H7V15H15V8H16V6L14 4.5V1H11V2.25L8 0ZM9 10H12V13H9V10Z'
        fill={fillColor}
      >
      </path>
    </g>
  </svg>
);

export default HomeIcon;
