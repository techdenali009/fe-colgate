import React, { SVGProps } from 'react';

interface CustomIconProps extends SVGProps<SVGSVGElement> {
  fillColor?: string;
  strokeColor?: string;
  strokeWidth?: string;
  width?: string;
  height?: string;
}

const UserManagementIcon: React.FC<CustomIconProps> = ({
  fillColor = '#000000',
  strokeColor = '#000000',
  strokeWidth = '2',
  width = '16',
  height = '16',
  ...rest
}) => (
  <svg
    fill={fillColor}
    width={width}
    height={height}
    viewBox='0 0 32 32'
    xmlns='http://www.w3.org/2000/svg'
    {...rest}
  >
    <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
    <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
    <g id='SVGRepo_iconCarrier'>
      <g data-name='79-users' id='_79-users'>
        <circle
          cx='16'
          cy='13'
          r='5'
          fill='none'
          stroke={strokeColor}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={strokeWidth}
        />
        <path
          d='M23,28A7,7,0,0,0,9,28Z'
          fill='none'
          stroke={strokeColor}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={strokeWidth}
        />
        <path
          d='M24,14a5,5,0,1,0-4-8'
          fill='none'
          stroke={strokeColor}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={strokeWidth}
        />
        <path
          d='M25,24h6a7,7,0,0,0-7-7'
          fill='none'
          stroke={strokeColor}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={strokeWidth}
        />
        <path
          d='M12,6a5,5,0,1,0-4,8'
          fill='none'
          stroke={strokeColor}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={strokeWidth}
        />
        <path
          d='M8,17a7,7,0,0,0-7,7H7'
          fill='none'
          stroke={strokeColor}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={strokeWidth}
        />
      </g>
    </g>
  </svg>
);

export default UserManagementIcon;
