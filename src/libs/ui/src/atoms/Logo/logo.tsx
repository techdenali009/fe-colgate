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
      className={`${className}`} // Optional clickable class for styling
      width={width}
      height={height}
      onClick={onClick} // Only assign onClick if clickable
    />
  );
};




// import React from 'react';

// interface IImage {
//   src: string; 
//   alt: string; 
//   className?: string;
// }

// export const Image: React.FC<IImage> = ({ src, alt, className = '', ...rest }) => (
//   <img src={src} alt={alt} className={className} {...rest} />
// );
