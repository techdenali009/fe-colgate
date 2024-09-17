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
            className={`text-blue-600 underline hover:text-blue-800 focus:ring-2 focus:ring-blue-500 ${className}`}
        >
            {label}
        </Button>
    );
};
