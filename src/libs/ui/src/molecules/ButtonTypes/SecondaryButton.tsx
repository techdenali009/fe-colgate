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
            className="bg-secondary text-white hover:bg-secondary-dark"
        >
            {children}
        </Button>
    );
};