import React from 'react';
import { Button } from '@ui/atoms/Button';

interface ButtonWithTextAndIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onClick?: () => void;
    children?: React.ReactNode;
    className?: string;
}

export const ButtonWithTextAndIcon: React.FC<ButtonWithTextAndIconProps> = ({
  onClick,
  children,
  className = '',
  ...rest // Capture additional props
}) => {
  return (
    <Button
      onClick={onClick}
      className={`bg-white border border-blue-700 text-blue-700 p-2 m-1 transition-all duration-300 hover:bg-black hover:underline hover:text-white hover:border-black ${className}`}
      {...rest} // Spread additional props
    >
      {children}
    </Button>
  );
};
