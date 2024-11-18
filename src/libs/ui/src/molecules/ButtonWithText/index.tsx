import React from 'react';
import { Button } from '@ui/atoms/Button';

interface ButtonWithTextProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onClick?: () => void;
    children?: React.ReactNode;
    className?: string;
}

export const ButtonWithText: React.FC<ButtonWithTextProps> = ({
  onClick,
  children,
  className = '',
  ...rest // Capture additional props
}) => {
  return (
    <Button
      onClick={onClick}
      className={`text-appTheme  p-2 m-1 transition-all duration-300 ${className}`}
      {...rest} // Spread additional props
    >
      {children}
    </Button>
  );
};
