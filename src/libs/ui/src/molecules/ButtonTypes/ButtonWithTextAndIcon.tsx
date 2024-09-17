import React from 'react';
import { Button } from '@ui/atoms/ButtonComponent/Button';

interface ButtonWithTextAndIconProps {
    onClick?: () => void;
    text: string;
    icon: React.ReactNode;
    iconPosition?: 'left' | 'right'; // Optional positioning, defaults to 'left'
    className?: string;
}

export const ButtonWithTextAndIcon: React.FC<ButtonWithTextAndIconProps> = ({
    onClick,
    text,
    icon,
    iconPosition = 'left',
    className = '',
}) => {
    return (
        <Button
            onClick={onClick}
            className={`flex items-center px-4 py-2 rounded-md transition-all duration-300 hover:bg-gray-100 ${className}`}
        >
            {iconPosition === 'left' && <span className="mr-2">{icon}</span>}
            {text}
            {iconPosition === 'right' && <span className="ml-2">{icon}</span>}
        </Button>
    );
};
