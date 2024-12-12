import React, { SVGProps } from 'react';

interface MenuIconProps extends SVGProps<SVGSVGElement> {
  strokeColor?: string;
}

const HamburgerIcon: React.FC<MenuIconProps> = ({
  strokeColor = '#ffffff', // Default stroke color
  width = '25', // Default width
  height = '25', // Default height
  ...rest
}) => (
  <svg
    width={width}
    height={height}
    viewBox="-0.5 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      d="M2 12.32H22"
      stroke={strokeColor}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 18.32H22"
      stroke={strokeColor}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 6.32001H22"
      stroke={strokeColor}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default HamburgerIcon;
