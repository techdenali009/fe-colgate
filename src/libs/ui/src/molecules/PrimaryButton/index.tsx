import React from 'react';
import { Button } from '@ui/atoms/Button';

interface IPrimaryButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

export const PrimaryButton: React.FC<IPrimaryButton> = ({ children, onClick, className, ...rest }) => {
  return (
    <Button
      onClick={onClick}
      className={`bg-appTheme text-white p-3 m-1 hover:bg-black hover:underline ${className}`}
      {...rest}
    >
      {children}
    </Button>
  );
};