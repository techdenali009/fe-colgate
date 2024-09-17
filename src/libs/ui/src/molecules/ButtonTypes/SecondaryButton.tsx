import React from 'react';
import { Button } from '@ui/atoms/ButtonComponent/Button';

interface ISecondaryButton {
    children: React.ReactNode;
    onClick?: () => void;
}

export const SecondaryButton: React.FC<ISecondaryButton> = ({ children, onClick }) => {
    return (
        <Button
            type="button"
            onClick={onClick}
            className="bg-white text-blue-700 rounded p-2 m-1 hover:bg-blue-700 hover:text-white"
        >
            {children}
        </Button>
    );
};