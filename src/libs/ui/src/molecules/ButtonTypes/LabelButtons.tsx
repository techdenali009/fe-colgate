import React from 'react';
import { Button } from '@ui/atoms/ButtonComponent/Button';

interface LabelButtonProps {
    onClick?: () => void;
    label: string;
    className?: string;
}

export const LabelButton: React.FC<LabelButtonProps> = ({ onClick, label, className = '' }) => {
    return (
        <Button
            onClick={onClick}
            className={`text-black p-2 m-1 hover:text-blue-700 hover:underline hover:bg-blue-50 focus:ring-2 focus:ring-blue-500 ${className}`}
        >
            {label}
        </Button>
    );
};
