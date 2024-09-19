import React from 'react';
import { Button } from '@ui/atoms/ButtonComponent';

interface IPrimaryButton {
    children: React.ReactNode;
    onClick?: () => void;
}

export const PrimaryButton: React.FC<IPrimaryButton> = ({ children, onClick }) => {
    return (
        <Button
            type="button"
            onClick={onClick}
            className="bg-blue-700 text-white p-3 m-1 hover:bg-black hover:underline "
        >
            {children}
        </Button>
    );
};