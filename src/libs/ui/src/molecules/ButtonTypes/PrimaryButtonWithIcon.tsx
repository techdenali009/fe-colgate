import React from 'react';
import { Button } from '@ui/atoms/Button';
import { Icon } from '@ui/atoms/Icons';
import arrowIcon from 'src/libs/ui/assets/Right-Icon.e85181bb.svg';

interface IPrimaryButtonWithIcon {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

export const PrimaryButtonWithIcon: React.FC<IPrimaryButtonWithIcon> = ({ children, onClick, className }) => {
  return (
    <Button
      type="button"
      onClick={onClick}
      className={`!bg-appTheme font-bold  text-sm text-white p-2 m-1 hover:bg-black hover:underline flex items-center border-2 border-transparent ${className} hover:border-white`}
    >
      {children}
      <Icon icon={arrowIcon} className="h-6 w-6 ml-2" />
    </Button>
  );
};
