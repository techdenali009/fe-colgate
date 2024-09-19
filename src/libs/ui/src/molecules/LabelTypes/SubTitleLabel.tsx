import React from 'react';
import { Label } from '@ui/atoms/Labels/Label';

interface SubtitleLabelProps {
    text: string;
    className?: string;
}

export const SubtitleLabel: React.FC<SubtitleLabelProps> = ({ text, className = '' }) => {
    return (
        <Label
            
        className={`text-lg text-gray-600 ${className}`} // Adds large size and bold font
        text={''} >{text}</Label>
    );
};
