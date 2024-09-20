import React from 'react';
import { ProductName } from '@ui/atoms/ProductName';
import { ProductImage } from '@ui/atoms/ProductImage';
import { BestSeller } from '@ui/atoms/BestSeller'; // Import the badge component

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
    isBestSeller = false,
    imageWidth = '100%',
    imageHeight = 'auto',
}) => {
    return (
        <div className={`relative flex flex-col items-center ${className}`}>
            {/* Conditionally render the BestSeller badge */}
            {isBestSeller && (
                <BestSeller
                    className="absolute top-2 right-2 z-10" // Ensure it’s above other elements
                    size="small"
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
