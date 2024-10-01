import React, { useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';

interface ScrollToTopButtonProps {
  onClick: () => void;
  isVisible: boolean;
}

export const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({
  onClick,
  isVisible,
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    onClick();

    setTimeout(() => {
      setIsClicked(false); 
    }, 1000); 
  };

  return (
    <button
      id="scrollToTopBtns"
      onClick={handleClick}
      className={`fixed  z-50 right-3 bottom-10 md:right-10 md:bottom-10 w-10 h-10 rounded-full shadow-lg transition duration-400  ${
        isVisible
          ? isClicked
            ? 'bg-[#125CE0] bg-opacity-100'
            : 'bg-[#555555] bg-opacity-100'
          : 'hidden'
      }`}
      style={{ display: isVisible ? 'block' : 'none' }}
    >
      <IoIosArrowUp className="w-10 h-6 text-white !text-xs" />
    </button>
  );
};
