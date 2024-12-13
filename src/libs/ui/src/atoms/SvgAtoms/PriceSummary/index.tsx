

import React, { SVGProps } from 'react';

interface ArrowPrevIconProps extends SVGProps<SVGSVGElement> {
    fillColor?: string; // Optional fillColor prop for the rect
}

const PriceSummary: React.FC<ArrowPrevIconProps> = ({
  // fillColor = 'rgb(var(--primary-color))',
  width = '24',
  height = '24',
  ...rest
}) => {
  return (
    <svg width={width} height={height}  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path d="M6.29308 2C5.70048 2 5.10789 2.26087 4.66989 2.72464C4.23188 3.18841 4 3.82609 4 4.49275V19.5072C4 20.1739 4.23188 20.8116 4.66989 21.2754C5.10789 21.7391 5.67472 22 6.29308 22H17.7069C18.2995 22 18.8921 21.7391 19.3301 21.2754C19.7681 20.8116 20 20.1739 20 19.5072V4.49275C20 3.82609 19.7681 3.18841 19.3301 2.72464C18.8921 2.26087 18.3253 2 17.7069 2" stroke="#1D1D1D" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17.7069 22C18.2995 22 18.8921 21.7391 19.3301 21.2754C19.7681 20.8116 20 20.1739 20 19.5072L20 4.49275C20 3.82609 19.7681 3.18841 19.3301 2.72464C18.8921 2.26087 18.3253 2 17.7069 2L6.29308 2C5.70048 2 5.10789 2.26087 4.66989 2.72464C4.23188 3.1884 4 3.82609 4 4.49275L4 19.5072C4 20.1739 4.23188 20.8116 4.66989 21.2754C5.10789 21.7391 5.67472 22 6.29307 22" stroke="#1D1D1D" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 15H16" stroke="#1D1D1D" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 18H13" stroke="#1D1D1D" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 5H14" stroke="#1D1D1D" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M10 7H14" stroke="#1D1D1D" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M10.4048 5.00514C11.3223 4.95133 13.1032 5.30107 12.9953 6.96908C12.8874 8.63708 10.9445 8.87921 10 8.7985L12.9953 12" stroke="#1D1D1D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
    
export default PriceSummary;