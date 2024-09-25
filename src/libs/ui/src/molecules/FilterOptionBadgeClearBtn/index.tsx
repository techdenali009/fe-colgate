import React from 'react';

interface ClearAllButtonProps {
  onClearAll: () => void;
}

export const ClearAllButton: React.FC<ClearAllButtonProps> = ({ onClearAll }) => {
  return (
    <button
      onClick={onClearAll}
      className="ml-4 text-blue-500 hover:text-blue-700 hover:font-bold transition-all duration-200 ease-in-out hover:scale-110"
    >
      Clear All
    </button>
  );
};
