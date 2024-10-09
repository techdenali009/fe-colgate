// ButtonWithHeading.tsx
import React, { ButtonHTMLAttributes, MouseEventHandler } from 'react';

interface ButtonWithHeadingProps extends ButtonHTMLAttributes<HTMLButtonElement> {
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
  ...rest
}) => (
  <button
    onClick={onClick}
    className={`flex items-center justify-center border rounded-md p-2 ${className}`} // Button styles
    {...rest}
  >
    <span className="flex flex-col items-center">
      <h3 className="text-lg font-semibold">{headingText}</h3>
      <span className="mt-1">{buttonText}</span> {/* Span to hold button text */}
    </span>
  </button>
);

export default ButtonWithHeading;
