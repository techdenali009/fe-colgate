import React, { useRef } from 'react';

interface PopoverProps {
    children: React.ReactNode;
    position?: string;
    maxWidth?: string;
}

const Popover: React.FC<PopoverProps> = ({ children, position = '' }) => {
    const popoverRef = useRef<HTMLDivElement>(null);

    const handleMouseEnter = () => {
        if (popoverRef.current) {
            popoverRef.current.style.display = 'block';
        }
    };

    const handleMouseLeave = () => {
        if (popoverRef.current) {
            popoverRef.current.style.display = 'none';
        }
    };

    return (
        <div
            ref={popoverRef}
            className={`absolute ${position} bg-white p-4 shadow-lg rounded-lg min-w-72 $maxWidth`}
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
        >
            {children}
        </div>
    );
};

export default Popover;
