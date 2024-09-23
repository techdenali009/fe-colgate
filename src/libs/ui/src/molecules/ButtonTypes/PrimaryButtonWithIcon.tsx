import React from 'react';
import { Button } from '@ui/atoms/Button';

interface IPrimaryButtonWithIcon {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

export const PrimaryButtonWithIcon: React.FC<IPrimaryButtonWithIcon> = ({ children, onClick, className }) => {
    return (
        <Button
            type="button"
            onClick={onClick}
            className={`bg-blue-600 font-bold  text-sm text-white p-2 m-1 hover:bg-black hover:underline flex items-center border-2 border-transparent ${className} hover:border-white`}
        >
            {children}
            <svg
                className="ml-2 h-6 w-6 text-gray-300 "
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1="5" y1="12" x2="19" y2="12" />
                <line x1="15" y1="16" x2="19" y2="12" />
                <line x1="15" y1="8" x2="19" y2="12" />
            </svg>
        </Button>
    );
};
