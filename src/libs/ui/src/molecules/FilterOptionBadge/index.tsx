import React from 'react';
import CancelIcon from '../../../assets/close-bluebg.aa950da4.svg';

interface FilterBadgeProps {
  onRemove: () => void;
  children: React.ReactNode; 
}

export const FilterBadge: React.FC<FilterBadgeProps> = ({ children, onRemove }) => {
  return (
    <div
      className="flex pr-2 pl-[.9rem] pt-2 pb-2 items-center justify-between bg-gray-200 px-3 py-1 rounded-full m-2 transition-all duration-200 ease-in-out hover:bg-gray-300 hover:scale-110 min-w-[100px]"
    >
      <span className="text-blue-700 hover:font-bold  text-xs mr-2">{children}</span>
      <button
        onClick={onRemove}
        className="ml-4 bg-transparent p-0 border-none text-blue-500 hover:text-blue-700 hover:font-bold"
        aria-label="Remove Filter"
      >
        <img src={CancelIcon} alt="cancel Logo" className="w-5 h-5" />
      </button>
    </div>
  );
};
