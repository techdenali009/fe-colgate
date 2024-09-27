import React from 'react';

interface StarProps {
    filled: boolean; // Indicates if the star is filled or not
    onClick?: () => void; // Optional click handler for the star
    onMouseEnter?: () => void; // Optional hover handler
    onMouseLeave?: () => void; // Optional hover out handler
    className?: string; // Optional custom className
}

export const Star: React.FC<StarProps> = ({ filled, onClick, onMouseEnter, onMouseLeave, className = '' }) => {
  return (
    <span
      className={`cursor-pointer ${className}`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {filled ? '★' : '☆'}
    </span>
  );
};
