import React, { useState } from 'react';

interface ImageProps {
    src: string;
    alt: string;
    className?: string;
    width?: string | number;
    height?: string | number;
    fallbackSrc?: string; 
}

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  fallbackSrc = 'https://dummyimage.com/600/fcfcfc/a69ea6.png&text=Image' // Online fallback image
}) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      width={width}
      height={height}
      onError={() => setImgSrc(fallbackSrc)} // Replace with dummy image on error
    />
  );
};
