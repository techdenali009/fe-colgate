import React from 'react';


export const Icon: React.FC<{
  icon: string;
  className?: string;
  onClick?: () => void;
}> = ({ icon, className = '', onClick }) => (
  <a
    href='#'
    onClick={onClick}
    className=''
  >
    <img
      src={icon}
      alt="Site Icon"
      className={`min-w-min ${className}`}
    />
  </a>
);
