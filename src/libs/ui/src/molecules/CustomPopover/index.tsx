import React, { useState } from 'react';
import { Popover, PopoverPosition } from 'react-tiny-popover';


interface CustomPopoverProps {
  trigger: React.ReactNode;
  content: React.ReactNode;
  positions?: PopoverPosition[]; // Use PopoverPosition[] instead of string[]
  align?: 'start' | 'center' | 'end';
}

const CustomPopover: React.FC<CustomPopoverProps> = ({
  trigger,
  content,
  positions = ['bottom'],
  align = 'center',
}) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [isPopoverHovered, setIsPopoverHovered] = useState(false);
  const [isTriggerHovered, setIsTriggerHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsPopoverOpen(true);
    setIsTriggerHovered(true);
  };

  const handleMouseLeave = () => {
    if (!isPopoverHovered) setIsPopoverOpen(false);
    setIsTriggerHovered(false);
  };

  const handlePopoverMouseEnter = () => {
    setIsPopoverHovered(true);
  };

  const handlePopoverMouseLeave = () => {
    setIsPopoverHovered(false);
    if (!isTriggerHovered) setIsPopoverOpen(false);
  };

  return (
    <Popover
      isOpen={isPopoverOpen}
      positions={positions} // Now positions has the correct type
      onClickOutside={() => setIsPopoverOpen(false)}
      content={
        <div
          className="custom-popover-content"
          onMouseEnter={handlePopoverMouseEnter}
          onMouseLeave={handlePopoverMouseLeave}
        >
          {content}
        </div>
      }
      align={align}
    >
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {trigger}
      </div>
    </Popover>
  );
};

export default CustomPopover;