import React from 'react';
import { Label } from '@ui/atoms/LabelsComponent';

interface HeaderLabelProps {
    text: string;
    className?: string;
}

export const HeaderLabel: React.FC<HeaderLabelProps> = ({ text, className = '' }) => {
    return (
        <Label
            text={text}
            className={`text-2xl font-bold ${className}`} // Adds large size and bold font
        />
    );
};
