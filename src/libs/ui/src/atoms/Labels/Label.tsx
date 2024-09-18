import React from 'react';

interface LabelProps {
    text: string;
    className?: string;
    children: React.ReactNode;
}

export const Label: React.FC<LabelProps> = ({ className = '', children }) => {
    return <label className={`text-base ${className}`}>{children}</label>;
};