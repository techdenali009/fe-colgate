import React from 'react';
import CancelIcon from '../../../assets/close-bluebg.aa950da4.svg';

interface FilterBadgeProps {
  onRemove: () => void;
  children: React.ReactNode; 
}

export const FilterBadge: React.FC<FilterBadgeProps> = ({ children, onRemove }) => {
  return (
    <div
      className="flex p-2 items-center justify-between bg-gray-200  rounded-full m-1 transition-all duration-200 ease-in-out hover:bg-gray-300 hover:scale-110 min-w-[100px]"
    >
      <span className="text-appTheme hover:font-bold  text-xs mr-1">{children}</span>
      <button
        onClick={onRemove}
        className="ml-2 bg-transparent p-0 border-none text-appTheme hover:text-appTheme hover:font-bold"
        aria-label="Remove Filter"
      >
        <img src={CancelIcon} alt="cancel Logo"  className="w-5 h-5" />
      </button>
    </div>
  );
};
