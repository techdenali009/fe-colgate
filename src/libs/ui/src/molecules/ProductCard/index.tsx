import React from 'react';
import { ProductName } from '@ui/atoms/ProductName';
import { ProductImage } from '@ui/atoms/ProductImage';
import BestSellerBadge from '@ui/molecules/BestSeller/index';

interface ProductCardProps {
    name: string;
    imageSrc: string;
    altText: string;
    className?: string;
    isBestSeller?: boolean;  // Prop to control badge visibility
    imageWidth?: string | number;
    imageHeight?: string | number;
}

export const ProductCard: React.FC<ProductCardProps> = ({
    name,
    imageSrc,
    altText,
    className = '',
    imageWidth = '100%',
    imageHeight = 'auto',
    isBestSeller = true,
}) => {
    return (
        <div className={`relative flex flex-col items-center ${className}`}>
            {/* Conditionally render the BestSellerBadge */}
            {isBestSeller && (
                <BestSellerBadge
                    isBestSeller={isBestSeller}
                    productName={name}
                    position="top-right"  // Position badge at top-right by default
                />
            )}
            <ProductImage
                src={imageSrc}
                alt={altText}
                className="w-full h-64"
                width={imageWidth}
                height={imageHeight}
            />
            <ProductName
                name={name}
                className="mt-2 text-center text-lg font-semibold"
            />
        </div>
    );
};
