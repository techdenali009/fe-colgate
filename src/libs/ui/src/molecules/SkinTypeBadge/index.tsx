import React from 'react';

interface SkinTypeBadgeProps {
  active: boolean;
  children: React.ReactNode; // Accepting children prop
}

const SkinTypeBadge: React.FC<SkinTypeBadgeProps> = ({ active, children }) => {
  return (
    <div
      className={`inline-block px-4 py-2 rounded-full text-white text-sm ${
        active ? 'bg-black' : 'bg-gray-300'
      }`}
    >
      {children}
    </div>
  );
};

export default SkinTypeBadge;
