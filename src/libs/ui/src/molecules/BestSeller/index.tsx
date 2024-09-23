import React from 'react';

interface BestSellerBadgeProps {
  isBestSeller: boolean;
  productName: string;
  badgeText?: string;
  badgeColor?: string;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  badgeStyle?: React.CSSProperties;
}

const BestSellerBadge: React.FC<BestSellerBadgeProps> = ({
  isBestSeller,
  productName,
  badgeText = 'Best Seller',
  badgeColor = '#ffbe0b',  // Default badge color
  position = 'top-right',
  badgeStyle = {},
}) => {
  if (!isBestSeller) {
    return null; // If not a bestseller, don't show the badge
  }

  const badgePositionClass = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0',
    'bottom-left': 'bottom-0 left-0',
    'bottom-right': 'bottom-0 right-0',
  }[position];

  return (
    <div className={`absolute ${badgePositionClass}`} style={{ ...badgeStyle }}>
      <span
        style={{
          backgroundColor: badgeColor,
          padding: '5px 10px',
          borderRadius: '5px',
          color: '#fff',
          fontWeight: 'bold',
        }}
      >
        {badgeText}
      </span>
    </div>
  );
};

export default BestSellerBadge;
