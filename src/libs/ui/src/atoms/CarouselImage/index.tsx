import { ImageProps } from '@utils/interface';
import React from 'react';



export const Image: React.FC<ImageProps> = ({ src, alt }) => {
  return <img src={src} alt={alt} className='carousel-image w-full h-full object-cover' />;
};
