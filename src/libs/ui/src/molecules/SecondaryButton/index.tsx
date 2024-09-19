import React from 'react';
import { Button } from '@ui/atoms/Button';

interface ISecondaryButton {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string; // Allow passing custom class
}

export const SecondaryButton: React.FC<ISecondaryButton> = ({ children, onClick, className = '' }) => {
    return (
        <Button
            type="button"
            onClick={onClick}
            className={`bg-white text-blue-700 p-2 m-1 hover:bg-blue-700 hover:text-white ${className}`} // Merge custom class
        >
            {children}
        </Button>
    );
};
