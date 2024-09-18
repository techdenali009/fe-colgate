import React from 'react';
import { ProductName } from '@ui/atoms/Product/ProductName';
import { ProductImage } from '@ui/atoms/Product/ProductImage';

interface ProductCardProps {
    name: string;
    imageSrc: string;
    altText: string;
    className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ name, imageSrc, altText, className = '' }) => {
    return (
        <div className={`flex flex-col items-center ${className}`}>
            <ProductImage src={imageSrc} alt={altText} className="w-full h-64" />
            <ProductName name={name} className="mt-2 text-center" />
        </div>
    );
};
