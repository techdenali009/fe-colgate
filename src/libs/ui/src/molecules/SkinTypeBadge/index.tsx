import React from 'react';

interface SkinTypeBadgeProps {
  active: boolean;
  children: React.ReactNode; // Accepting children prop
}

const SkinTypeBadge: React.FC<SkinTypeBadgeProps> = ({ active, children }) => {
  return (
    <div
      className={`min-w-[6.6rem] p-[6px] px-[10px] text-[13px] font-hero font-semibold rounded-3xl bg-black text-white mr-1 text-center leading-6${
        active ? 'bg-black' : 'bg-gray-300'
      }`}
    >
      {children}
    </div>
  );
};

export default SkinTypeBadge;
