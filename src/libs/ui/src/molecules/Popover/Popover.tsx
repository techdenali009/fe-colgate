import React from 'react';

interface PopoverProps {
    children: React.ReactNode;
    position?: string; 
}

const Popover: React.FC<PopoverProps> = ({ children, position = '' }) => {
    return (
        <div className={`absolute ${position} bg-white border p-4 shadow-lg rounded-md`}>
            {children}
        </div>
    );
};

export default Popover;
