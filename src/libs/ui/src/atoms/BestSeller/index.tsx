import React from 'react';

interface BestSellerProps {
    className?: string;
    size?: 'small' | 'medium' | 'large';
}

const sizeClasses = {
    small: 'text-xs py-1 px-2',
    medium: 'text-sm py-1.5 px-3',
    large: 'text-md py-2 px-4',
};

export const BestSeller: React.FC<BestSellerProps> = ({
    className = '',
    size = 'medium',
}) => {
    return (
        <span
            className={`inline-flex items-center justify-center rounded-full bg-yellow-500 text-black ${sizeClasses[size]} ${className}`}
        >
            Best Seller
        </span>
    );
};
