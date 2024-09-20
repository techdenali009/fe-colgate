import React, { useRef, useEffect, useState } from 'react';

interface PopoverProps {
  children: React.ReactNode;
  position?: string;
}

const Popover: React.FC<PopoverProps> = ({ children, position = 'top-0 left-0' }) => {
  const popoverRef = useRef<HTMLDivElement | null>(null);
  const [calculatedPosition, setCalculatedPosition] = useState<string>(position);

  useEffect(() => {
    const calculatePosition = () => {
      if (!popoverRef.current) return;

      const popoverRect = popoverRef.current.getBoundingClientRect();
      const { innerWidth, innerHeight } = window;

      let newPosition = position;

      // Calculate position based on available space
      if (popoverRect.bottom > innerHeight && popoverRect.top > popoverRect.height) {
        newPosition = 'bottom-auto top-full'; // Show on top if no space at the bottom
      } else if (popoverRect.right > innerWidth && popoverRect.left > popoverRect.width) {
        newPosition = 'right-auto left-full'; // Show on left if no space on right
      } else if (popoverRect.top < 0) {
        newPosition = 'top-auto bottom-full'; // Show at the bottom if no space at the top
      } else if (popoverRect.left < 0) {
        newPosition = 'left-auto right-full'; // Show on the right if no space on the left
      }

      setCalculatedPosition(newPosition);
    };

    // Recalculate position on mount and on window resize
    calculatePosition();
    window.addEventListener('resize', calculatePosition);

    return () => {
      window.removeEventListener('resize', calculatePosition);
    };
  }, [position]);

  return (
    <div
      ref={popoverRef}
      className={`absolute ${calculatedPosition} bg-white shadow-lg rounded-lg p-4 z-10 w-64 h-32`}
      style={{
        backgroundColor: '#ffffff', 
        color: '#4a5568', 
        width: '250px',
        height: 'auto',
        padding: '16px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      }}
    >
      {children}
    </div>
  );
};

export default Popover;
