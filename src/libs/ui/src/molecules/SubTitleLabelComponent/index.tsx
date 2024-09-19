import React from 'react';
import { Label } from '@ui/atoms/LabelsComponent';

interface SubtitleLabelProps {
    text: string;
    className?: string;
}

export const SubtitleLabel: React.FC<SubtitleLabelProps> = ({ text, className = '' }) => {
    return (
        <Label
            text={text}
            className={`text-lg text-gray-600 ${className}`} // Smaller size and gray text for subtitles
        />
    );
};
