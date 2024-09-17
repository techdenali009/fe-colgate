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
            className={`bg-white border border-blue-700 text-blue-700 p-2 m-1 rounded-md transition-all duration-300 hover:bg-black hover:underline hover:text-white hover:border-black ${className}`}
        >
            {iconPosition === 'left' && <span className="mr-2">{icon}</span>}
            {text}
            {iconPosition === 'right' && <span className="ml-2">{icon}</span>}
        </Button>
    );
};
