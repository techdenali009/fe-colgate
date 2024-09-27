import React from 'react';
import { Label } from '@ui/atoms/Label';

interface HeaderLabelProps {
    className?: string;
    children: React.ReactNode;
}

export const HeaderLabel: React.FC<HeaderLabelProps> = ({ className = '', children }) => {
  return (
    <Label
      className={`text-2xl font-bold ${className}`} // Adds large size and bold font
    >
      {children} {/* Pass children here */}
    </Label>
  );
};
