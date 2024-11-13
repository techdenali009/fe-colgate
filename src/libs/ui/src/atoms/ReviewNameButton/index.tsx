// ButtonWithHeading.tsx
import React, { MouseEventHandler } from 'react';
import { Button } from '../Button';// Adjust the import path as needed

interface ButtonWithHeadingProps {
  buttonText: string;         // Text for the button
  headingText: string;        // Text for the h3 heading
  onClick?: MouseEventHandler<HTMLButtonElement>; // Optional click handler
  className?: string;         // Additional class names for styling
}

const ButtonWithHeading: React.FC<ButtonWithHeadingProps> = ({
  buttonText,
  headingText,
  onClick,
  className = '',
}) => (
  <Button
    onClick={onClick}
    className={`flex items-center justify-center border rounded-md p-2 ${className}`} // Button styles
  >
    <span className="flex flex-col items-center">
      <h3 className="text-lg font-semibold">{headingText}</h3>
      <span className="mt-1">{buttonText}</span> {/* Span to hold button text */}
    </span>
  </Button>
);

export default ButtonWithHeading;
