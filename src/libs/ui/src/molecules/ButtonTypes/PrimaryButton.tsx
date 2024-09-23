import React from 'react';
import { Button } from '@ui/atoms/ButtonComponent/Button';

interface IPrimaryButton {
    children: React.ReactNode;
    onClick?: () => void;
    classname ?: string
}

export const PrimaryButton: React.FC<IPrimaryButton> = ({ children, onClick, classname }) => {
    return (
        <Button
            type="button"
            onClick={onClick}
            className={`bg-blue-700 text-white p-3 m-1 hover:bg-black hover:underline ${classname}`}


        >
            {children}
        </Button>
    );
};