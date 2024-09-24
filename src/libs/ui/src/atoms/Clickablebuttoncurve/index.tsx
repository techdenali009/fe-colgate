import React, { useState } from 'react';

interface PrimaryButtonProps {
    children: React.ReactNode;
    className?: string;
}

export const PrimaryButtonClickablecurve: React.FC<PrimaryButtonProps> = ({ children, className = '' }) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        <button
            onClick={handleClick}
            className={`bg-blue-700 text-white transition-all duration-300 rounded-none p-3 m-1 hover:bg-black hover:underline 
         ${isClicked ? 'rounded-l-full rounded-r-full' : 'rounded-md'} ${className} w-48`}
        >
            {children}
        </button>
    );
};
