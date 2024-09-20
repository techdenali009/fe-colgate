import React, { useEffect, useRef, useState } from 'react';

interface PopoverProps {
    children: React.ReactNode;
    position?: string; 
}

const Popover: React.FC<PopoverProps> = ({ children, position = ''}) => {
    const [popoverStyle, setPopoverStyle] = useState({});
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



    useEffect(() => {
        const handleResize = () => {
            if (popoverRef.current) {
                const rect = popoverRef.current.getBoundingClientRect();
                const { innerWidth, innerHeight } = window;

                const newStyles: React.CSSProperties = {};

                if (rect.right > innerWidth) {
                    newStyles.right = '0';
                }
                if (rect.bottom > innerHeight) {
                    newStyles.bottom = '0';
                }
                
                setPopoverStyle(newStyles);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div
            ref={popoverRef}
            className={`absolute ${position} bg-white p-4 shadow-lg rounded-lg w-max`}
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
            style={popoverStyle}
        >
            {children}
        </div>
    );
};

export default Popover;
