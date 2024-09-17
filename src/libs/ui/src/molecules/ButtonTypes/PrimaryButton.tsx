import React from 'react';
import { Button } from '@ui/atoms/ButtonComponent/Button';

interface IPrimaryButton {
    children: React.ReactNode;
    onClick?: () => void;
}

export const PrimaryButton: React.FC<IPrimaryButton> = ({ children, onClick }) => {
    return (
        <Button
            type="button"
            onClick={onClick}
            className="bg-blue-700 text-white hover:bg-primary-dark"
        >
            {children}
        </Button>
    );
};