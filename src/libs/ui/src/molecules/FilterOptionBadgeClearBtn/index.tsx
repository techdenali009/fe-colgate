import React from 'react';
import { ButtonWithText } from '@ui/molecules/ButtonWithText/index';
interface ClearAllButtonProps {
  onClearAll: () => void;
  className?:string;
}

export const ClearAllButton: React.FC<ClearAllButtonProps> = ({ onClearAll }) => {
  return (
    <ButtonWithText
      onClick={onClearAll}
      className=" ml-4 text-appTheme  text-base  font-bold font-SansSerif !tracking-wider ease-in-out"
      
    >
      Clear All
    </ButtonWithText>
  );
};
