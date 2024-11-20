import React, { SVGProps } from 'react';

interface ArrowPrevIconProps extends SVGProps<SVGSVGElement> {
  fillColor?: string; // Optional fillColor prop for the rect
}

const ReviewSearchIcon: React.FC<ArrowPrevIconProps> = ({
  fillColor ='rgb(var(--primary-color))',
  width='21px',
  height='19px',
  ...rest
}) => {
  return (

    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={fillColor} aria-hidden="true" {...rest}><path d="M21.172 24l-7.387-7.387A8.945 8.945 0 019 18c-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9a8.951 8.951 0 01-1.387 4.785L24 21.172 21.172 24zM9 16c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z"></path></svg>
  );
};

export default ReviewSearchIcon;
