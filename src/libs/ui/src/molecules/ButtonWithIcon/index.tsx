import React from 'react';
import { Button } from '@ui/atoms/Button';

interface ButtonWithIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
}

export const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({ onClick, children, className = '', ...rest }) => {
  return (
    <Button
      onClick={onClick}
      className={`border border-b p-2 m-1 hover:bg-gray-200 focus:ring-2 focus:ring-gray-300 ${className}`}
      {...rest} // Spread additional props
    >
      {children}
    </Button>
  );
};
