
import React, { SVGProps } from 'react';

interface ArrowPrevIconProps extends SVGProps<SVGSVGElement> {
    fillColor?: string; // Optional fillColor prop for the rect
}

const CartDetails: React.FC<ArrowPrevIconProps> = ({
  // fillColor = 'rgb(var(--primary-color))',
  width = '24',
  height = '24',
  ...rest
}) => {
  return (

    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path d="M8.60327 4.34082H6.33093C5.7437 4.34082 5.15647 4.57061 4.72242 4.97912C4.28838 5.38763 4.05859 5.94933 4.05859 6.53656V19.7621C4.05859 20.3493 4.28838 20.911 4.72242 21.3195C5.15647 21.7281 5.71817 21.9578 6.33093 21.9578H17.6416C18.2288 21.9578 18.816 21.7281 19.2501 21.3195C19.6841 20.911 19.9139 20.3493 19.9139 19.7621V6.53656C19.9139 5.94933 19.6841 5.38763 19.2501 4.97912C18.816 4.57061 18.2543 4.34082 17.6416 4.34082H15.3692" stroke="#1D1D1D" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.0201 2.04297H10.8499C9.6499 2.04297 8.67969 3.03871 8.67969 4.26425C8.67969 5.48978 9.6499 6.48552 10.8499 6.48552H13.0201C14.2201 6.48552 15.1903 5.48978 15.1903 4.26425C15.2159 3.03871 14.2456 2.04297 13.0201 2.04297Z" stroke="#1D1D1D" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 13H16" stroke="#1D1D1D" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 17H16" stroke="#1D1D1D" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 13H9" stroke="#1D1D1D" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 17H9" stroke="#1D1D1D" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default CartDetails;