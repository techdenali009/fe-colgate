import React from 'react';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

const PopularImage: React.FC<ImageProps> = ({ src, alt, className = '' }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`w-full align-middle  ${className}`}
      loading="lazy" 
      onError={(e) => { 
        e.currentTarget.src = 'path/to/placeholder/image.jpg';
      }}
    />
  );
};

export default PopularImage;
