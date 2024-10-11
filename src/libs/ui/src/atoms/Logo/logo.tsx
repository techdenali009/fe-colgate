import React from 'react';

interface ImageProps {
    src: string;
    alt: string;
    className?: string;
    width?: string | number;
    height?: string | number;
    onClick?: () => void;
}

export const Logo: React.FC<ImageProps> = ({ 
  src, 
  alt, 
  className = '', 
  width, 
  height, 
  onClick = () => console.log('clicked'), 
}) => {
 
  return (
    <img
      src={src}
      alt={alt}
      className={`${className}`} 
      width={width}
      height={height}
      onClick={onClick} 
    />
  );
};



