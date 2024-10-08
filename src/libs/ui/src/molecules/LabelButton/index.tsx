import React from 'react';
import { Button } from '@ui/atoms/Button';

interface LabelButtonProps {
    onClick?: () => void;
    className?: string;
    children: React.ReactNode; // Use children for button content instead of label
}

export const LabelButton: React.FC<LabelButtonProps> = ({ className = '', ...rest }) => {
  return (
    <Button
      className={`text-black p-2 m-1 hover:text-blue-700 hover:underline hover:bg-blue-50 focus:ring-2 focus:ring-blue-500 ${className}`}
      {...rest} 
    />
  );
};
