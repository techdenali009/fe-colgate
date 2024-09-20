import React from 'react';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

const PopularImage: React.FC<ImageProps> = ({ src, alt, className = "" }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`w-full h-5/6 ${className}`}
      loading="lazy" 
      onError={(e) => { 
        e.currentTarget.src = 'path/to/placeholder/image.jpg';
      }}
    />
  );
};

export default PopularImage;
