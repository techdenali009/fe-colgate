import React from 'react';
import { Label } from '@ui/atoms/Labels/Label';

interface HeaderLabelProps {
    text: string;
    className?: string;
}

export const HeaderLabel: React.FC<HeaderLabelProps> = ({ text, className = '' }) => {
    return (
        <Label
            
            className={`text-2xl font-bold ${className}`} // Adds large size and bold font
            text={''} >{text}</Label>
    );
};
