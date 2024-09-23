import React from 'react';

interface BestSellerBadgeProps {
  isBestSeller: boolean;
  productName: string;
  badgeText?: string;
  badgeColor?: string;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  badgeClassName?: string;  
  textClassName?: string;   
  containerClassName?: string; 
}

const BestSellerBadge: React.FC<BestSellerBadgeProps> = ({
  isBestSeller,
  badgeText = 'Best Seller',
  position = 'top-right',
  badgeClassName = '',      // Default to empty if not provided
  containerClassName = '',  // Default container class
}) => {
  if (!isBestSeller) {
    return null; // If not a bestseller, don't show the badge
  }

  // Mapping positions to Tailwind CSS classes
  const badgePositionClass = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0',
    'bottom-left': 'bottom-0 left-0',
    'bottom-right': 'bottom-0 right-0',
  }[position];

  return (
    <div className={`absolute ${badgePositionClass} ${containerClassName}`}>
      <span
        className={`text-white font-bold  bg-blue-700  py-1 px-2 rounded-md ${badgeClassName}`}
      >
        {badgeText}
      </span>
    </div>
  );
};

export default BestSellerBadge;
