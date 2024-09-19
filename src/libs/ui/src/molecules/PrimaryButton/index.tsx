import React from 'react';
import { Button } from '@ui/atoms/Button';

interface IPrimaryButton {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

export const PrimaryButton: React.FC<IPrimaryButton> = ({ children, onClick, className }) => {
    return (
        <Button
            type="button"
            onClick={onClick}
            className={`bg-blue-700 text-white p-3 m-1 hover:bg-black hover:underline ${className}`}
        >
            {children}
        </Button>
    );
};