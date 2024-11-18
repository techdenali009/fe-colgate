import React from 'react';
import CancelIcon from '../../../assets/close-bluebg.aa950da4.svg';
import ReviewDropClose from '@ui/atoms/SvgAtoms/ReviewDropclose';


interface FilterBadgeProps {
  onRemove: () => void;
  children: React.ReactNode; 
  useAltSvg?: boolean; // Add this prop to conditionally render SVGs
  className?: string;
  spanclassName?: string;
  ReviewimgclassName?: string;
  imgclassName?: string;
}

export const FilterBadge: React.FC<FilterBadgeProps> = ({ children, onRemove, useAltSvg, className, spanclassName,imgclassName }) => {
  return (
    <div
      className={`flex items-center justify-between bg-gray-200 px-3 py-1 rounded-full m-2 transition-all duration-200 ease-in-out hover:bg-gray-300 hover:scale-110 min-w-[100px] ${className}`}
    >
      <span className={`text-blue-700 hover:font-bold text-sm ${spanclassName}`}>
        {children} 
      </span>
      <button
        onClick={onRemove}
        className="ml-4 bg-transparent p-0 border-none text-blue-500 hover:text-blue-700 hover:font-bold"
        aria-label="Remove Filter"
      >
        {useAltSvg ? (
          <ReviewDropClose></ReviewDropClose>
        ) : (
          <img src={CancelIcon} alt="cancelff Logo" className={`w-4 h-4 ${imgclassName}`} />
        )}
      </button>
    </div>
  );
};
