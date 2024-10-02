import React, { useState } from 'react';

interface PrimaryButtonProps {
    children: React.ReactNode;
    className?: string;
}

export const CreateAccountButton: React.FC<PrimaryButtonProps> = ({ children, className = '' }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <button
      onClick={handleClick}
      className={`bg-[#125CE0] text-white transition-all duration-300 rounded-none !px-6 py-2.5 hover:bg-black hover:underline 
         ${isClicked ? 'rounded-l-full rounded-r-full' : 'rounded-md'} ${className} w-44 `}
    >
      {children}
    </button>
  );
};
