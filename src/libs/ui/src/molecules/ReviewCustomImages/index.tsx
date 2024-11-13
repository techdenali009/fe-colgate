import React from 'react';
import { useReviewContext } from '../ReviewUseContext'; // Adjust the path based on your project structure
import { Image } from '@ui/atoms/Image'; // Adjust the import path for your Image component

interface CustomImagesProps {
  reviewId: number;
  className?:string;
}

const CustomImages: React.FC<CustomImagesProps> = ({ reviewId,className }) => {
  const { productReviews } = useReviewContext();

  // Find the review based on the provided reviewId
  const review = productReviews.find((review) => review.id === reviewId);
  const images = review ? review.Customimages : [];

  // If no images found, don't render the component
  if (!images || images.length === 0) return null;

  return (
    <div className={`flex  justify-center mt-4 ${className}`}>
      {images.map((image) => (
        <Image
          key={image.id}
          src={image.url}
          alt={image.alt}
          className="w-[171px] p-[2px] cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
        />
      ))}
    </div>
  );
};

export default CustomImages;
