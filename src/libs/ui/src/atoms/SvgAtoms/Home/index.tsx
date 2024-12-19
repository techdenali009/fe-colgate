import React, { SVGProps } from 'react';

interface ArrowPrevIconProps extends SVGProps<SVGSVGElement> {
  fillColor?: string; // Optional fillColor prop for the rect
}

const Home: React.FC<ArrowPrevIconProps> = ({
  fillColor = 'rgb(var(--primary-color))',
  width = '24',
  height = '24',
  ...rest
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <mask
        id="mask0_10369_2697"
        style={{ maskType: 'alpha' }} // Fixed here
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <rect width="24" height="24" fill={fillColor} />
      </mask>
      <g mask="url(#mask0_10369_2697)">
        <path
          d="M4.99922 20V10.6502L2.97422 12.2252L2.44922 11.5502L4.99922 9.6002V7.0502H5.84942V8.9252L11.9994 4.25L21.5496 11.5502L21.0246 12.2252L18.9996 10.6502V20H4.99922ZM5.84942 19.1504H10.6992V14.375H13.2996V19.1504H18.1494V10.025L11.9994 5.3252L5.84942 10.025V19.1504ZM4.99922 5.7752C4.99922 5.192 5.18682 4.692 5.56202 4.2752C5.93682 3.8584 6.46602 3.65 7.14962 3.65C7.61602 3.65 7.94922 3.525 8.14922 3.275C8.34922 3.025 8.44922 2.725 8.44922 2.375H9.29942C9.29942 2.9586 9.11602 3.4586 8.74922 3.875C8.38282 4.2918 7.84962 4.5002 7.14962 4.5002C6.69962 4.5002 6.37042 4.621 6.16202 4.8626C5.95362 5.1042 5.84942 5.4084 5.84942 5.7752H4.99922Z"
          fill={fillColor}
        />
      </g>
    </svg>
  );
};

export default Home;
