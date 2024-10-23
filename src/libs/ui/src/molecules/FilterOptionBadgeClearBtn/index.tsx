import React from 'react';
import { ButtonWithText } from '@ui/molecules/ButtonWithText/index';
interface ClearAllButtonProps {
  onClearAll: () => void;
}

export const ClearAllButton: React.FC<ClearAllButtonProps> = ({ onClearAll }) => {
  return (
    <ButtonWithText
      onClick={onClearAll}
      className="ml-4 text-blue-500 text-xs hover:text-blue-700 hover:font-bold transition-all duration-200 ease-in-out hover:scale-110"
    >
      Clear All
    </ButtonWithText>
  );
};
