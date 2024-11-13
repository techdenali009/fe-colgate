import React from 'react';

interface StrongTextProps {
  children: React.ReactNode;
  className?: string;
}

export const StrongText: React.FC<StrongTextProps> = ({ children, className }) => {
  return (
    <strong className={`font-HeroNewBold  text-appTextColor text-sm ${className}`}>
      {children}
    </strong>
  );
};
