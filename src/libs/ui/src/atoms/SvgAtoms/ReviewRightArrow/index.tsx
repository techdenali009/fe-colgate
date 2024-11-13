import React, { SVGProps } from 'react';

interface ArrowPrevIconProps extends SVGProps<SVGSVGElement> {
  fillColor?: string; // Optional fillColor prop for the rect
}

const ReviewRightArrow: React.FC<ArrowPrevIconProps> = ({
  fillColor = 'none',
  width = '20',
  height = '20',
  stroke = '#595959',
  ...rest
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"  {...rest} aria-hidden="true"><title></title><defs><filter id="pagination_right"><feColorMatrix in="SourceGraphic" values="0 0 0 0 0.239216 0 0 0 0 0.462745 0 0 0 0 0.749020 0 0 0 1.000000 0"></feColorMatrix></filter></defs><g fill={fillColor} fillRule="evenodd"><path d="M0 0h30v30H0z"></path><g filter="&quot;url(https://www.pcaskinpro.com/products/exlinear-pro-peptide-serum-pro/p?variant=ExLinea%C2%AE%20Pro%20Peptide%20Serum#pagination_right)&quot;"><path fill="none" d="M29 1v28H1V1z"></path><path stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M10.5 2.5l11 12-11 12"></path></g></g></svg>
  );
};

export default ReviewRightArrow;