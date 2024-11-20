import React from 'react';

import ReviewDropClose from '@ui/atoms/SvgAtoms/ReviewDropclose';

import FilterCloseIcon from '@ui/atoms/SvgAtoms/BadgeClose';

interface FilterBadgeProps {
  onRemove: () => void;
  children: React.ReactNode; 
  useAltSvg?: boolean; // Add this prop to conditionally render SVGs
  className?: string;
  spanclassName?: string;
  ReviewimgclassName?: string;
  imgclassName?: string;
  
}

export const FilterBadge: React.FC<FilterBadgeProps> = ({ children, onRemove, useAltSvg, className, spanclassName }) => {
  return (
    <div
      className={`flex items-center justify-between bg-gray-200 px-3 py-1 rounded-full m-2 transition-all duration-200 ease-in-out hover:bg-gray-300 hover:scale-110 min-w-[100px] ${className}`}
    >
      <span className={`text-appTheme hover:font-bold text-xs leading-[1.6rem] ${spanclassName}`}>
        {children} 
      </span>
      <button
        onClick={onRemove}
        className="ml-2 bg-transparent p-0 border-none text-appTheme hover:text-appTheme hover:font-bold"
        aria-label="Remove Filter"
      >
        {useAltSvg ? (
          <ReviewDropClose></ReviewDropClose>
        ) : (
       
          <FilterCloseIcon/>
        )}
       
        
      </button>
    </div>
  );
};
