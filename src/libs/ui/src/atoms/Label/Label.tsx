import React from 'react';

interface LabelProps {
    className?: string;
    children: React.ReactNode;
}

export const Label: React.FC<LabelProps> = ({ className = '', children }) => {
    return <label className={`${className}`}>{children}</label>;
};