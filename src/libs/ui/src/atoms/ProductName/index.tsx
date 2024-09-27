import React from 'react';

interface ProductNameProps {
    name: string;
    className?: string;
}

export const ProductName: React.FC<ProductNameProps> = ({ name, className = '' }) => {
  return <h1 className={`text-lg font-medium ${className}`}>{name}</h1>;
};
