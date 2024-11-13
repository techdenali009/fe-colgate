import React, { SVGProps } from 'react';

interface ArrowPrevIconProps extends SVGProps<SVGSVGElement> {
    fillColor?: string; // Optional fillColor prop for the rect
}

const ConsumerAffairsLogo: React.FC<ArrowPrevIconProps> = ({
  fillColor = '#000',
  width = '22',
  height = '20',
  ...rest
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 22 20"  xmlns="http://www.w3.org/2000/svg"  {...rest} aria-hidden="true"><defs><filter id="bv-rnr_255253570_0"><feColorMatrix in="SourceGraphic" values="0 0 0 0 0.290196 0 0 0 0 0.290196 0 0 0 0 0.290196 0 0 0 1.000000 0"></feColorMatrix></filter></defs><g transform="translate(-17 -8)" filter="&quot;url(https://www.pcaskinpro.com/products/dual-action-redness-relief-prof/p?variant=Dual%20Action%20Redness%20Relief)&quot;" fill="#000" fillRule="evenodd"><path d="M36.609 8H24.766a2.362 2.362 0 00-2.368 2.358v7.143a2.362 2.362 0 002.368 2.358h8.13l2.688 2.676c.16.159.387.272.638.272.227 0 .432-.09.614-.25.183-.158.274-.407.274-.657v-2.109c1.07-.226 1.89-1.179 1.89-2.313v-7.097A2.386 2.386 0 0036.609 8zm-2.528 5.918l-.957.953-2.186 2.177-1.07-1.066 1.32-1.315h-3.894V13.17h3.894l-.364-.363-.957-.952 1.07-1.066.957.952 1.116 1.112.797.793.274.272zM17 22.694v-7.166a2.362 2.362 0 012.369-2.358h1.434v1.655H19.37a.708.708 0 00-.706.703v7.143c0 .386.318.726.728.726h1.185v1.86l1.867-1.86h8.814a.732.732 0 00.729-.726v-1.224h.273l1.366 1.36c-.068 1.247-1.116 2.222-2.368 2.222h-8.153l-2.688 2.699a.815.815 0 01-.615.272.887.887 0 01-.888-.884v-2.11C17.82 24.78 17 23.829 17 22.695z" fill={fillColor} fillRule="nonzero"></path></g></svg>

  );
};

export default ConsumerAffairsLogo;
