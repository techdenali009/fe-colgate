import React from 'react';
import { Image } from '@ui/atoms/Image'; // Adjust the import path as needed

interface ProductImageProps {
    src: string;
    alt: string;
    className?: string;
    width?: string | number;
    height?: string | number;
}

export const ProductImage: React.FC<ProductImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      className={`object-cover ${className}`}
      width={width}
      height={height}
    />
  );
};
