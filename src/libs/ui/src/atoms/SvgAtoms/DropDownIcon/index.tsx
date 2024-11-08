import React, { SVGProps } from 'react';

interface DropDownIconProps extends SVGProps<SVGSVGElement> {
  fillColor?: string;
}

const DropDownIcon: React.FC<DropDownIconProps> = ({
  fillColor = 'rgb(var(--primary-color))',
  width = '24',
  height = '24',
  ...rest
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest} 
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.9683 8.2565L12.2153 14.2845L6.46325 8.2565C6.13725 7.9145 5.56525 7.9145 5.23925 8.2565C4.92025 8.5905 4.92025 9.1745 5.23925 9.5085L11.6033 16.1775C11.7632 16.3455 11.9872 16.4415 12.2153 16.4415C12.4472 16.4415 12.6642 16.3475 12.8273 16.1775L19.1932 9.5085C19.3523 9.3415 19.4403 9.1185 19.4403 8.8825C19.4403 8.6465 19.3523 8.4235 19.1932 8.2565C18.8663 7.9145 18.2943 7.9145 17.9683 8.2565Z"
      fill={fillColor}
    />
  </svg>
);

export default DropDownIcon;
