import React from 'react';
import { Label } from '@ui/atoms/Label';

interface SubtitleLabelProps {
    children: React.ReactNode;
    className?: string;
}

export const SubtitleLabel: React.FC<SubtitleLabelProps> = ({ children, className = '' }) => {
  return (
    <Label
      className={`text-lg text-gray-600 ${className}`} // Smaller size and gray text for subtitles
    >
      {children} {/* Pass children here */}
    </Label>
  );
};
