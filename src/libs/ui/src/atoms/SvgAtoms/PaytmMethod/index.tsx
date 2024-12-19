



import React, { SVGProps } from 'react';

interface ArrowPrevIconProps extends SVGProps<SVGSVGElement> {
  fillColor?: string; // Optional fillColor prop for the rect
}

const PaytmMethod: React.FC<ArrowPrevIconProps> = ({
  fillColor = 'rgb(var(--primary-color))',
  width = '24',
  height = '24',
  ...rest
}) => {
  return (

    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <mask id="mask0_10369_2740" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
        <rect width="24" height="24" fill={fillColor}/>
      </mask>
      <g mask="url(#mask0_10369_2740)">
        <path d="M21 6.4502V17.5502C21 17.9502 20.8584 18.2918 20.5752 18.575C20.2916 18.8586 19.9498 19.0004 19.5498 19.0004H4.4502C4.0502 19.0004 3.7084 18.8586 3.4248 18.575C3.1416 18.2918 3 17.9502 3 17.5502V6.4502C3 6.0502 3.1416 5.7086 3.4248 5.4254C3.7084 5.1418 4.0502 5 4.4502 5H19.5498C19.9498 5 20.2916 5.1418 20.5752 5.4254C20.8584 5.7086 21 6.0502 21 6.4502ZM3.8502 8.8754H20.1498V6.4502C20.1498 6.3002 20.0874 6.1626 19.9626 6.0374C19.8374 5.9126 19.6998 5.8502 19.5498 5.8502H4.4502C4.3002 5.8502 4.1626 5.9126 4.0374 6.0374C3.9126 6.1626 3.8502 6.3002 3.8502 6.4502V8.8754ZM3.8502 11.0252V17.5502C3.8502 17.7002 3.9126 17.8378 4.0374 17.963C4.1626 18.0878 4.3002 18.1502 4.4502 18.1502H19.5498C19.6998 18.1502 19.8374 18.0878 19.9626 17.963C20.0874 17.8378 20.1498 17.7002 20.1498 17.5502V11.0252H3.8502Z" fill={fillColor}/>
      </g>
    </svg>
  );
};

export default PaytmMethod;



