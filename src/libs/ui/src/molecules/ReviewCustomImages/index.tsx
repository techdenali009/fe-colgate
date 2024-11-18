import React, { useState } from 'react';
import { useReviewContext } from '../ReviewUseContext'; // Adjust the path based on your project structure
// Adjust the path based on your project structure

// Define props for the CustomImages component
interface CustomImagesProps {
  reviewId: number;
  className?: string;
  customImage?:string;
}

// Define the structure of each image
interface ImageProps {
  id: number;
  url: string;
  alt: string;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CustomImages: React.FC<CustomImagesProps> = ({ reviewId, className}) => {
  const { productReviews } = useReviewContext();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [, setSelectedImage] = useState<ImageProps | null>(null);

  // Find the review based on the provided reviewId
  const review = productReviews.find((review) => review.id === reviewId);
  const images = review ? review.Customimages : [];

  // If no images are found, don't render the component
  if (!images || images.length === 0) return null;

  // Open the modal with the clicked image
  const openModal = (image: ImageProps) => {
    setSelectedImage(image);
  };

  // Close the modal
  //   const closeModal = () => {
  //     setSelectedImage(null);
  //   };

  // Only render the modal if `review` is defined
  return (
    <div className={`flex justify-center mt-4 ${className}`}>
      {images.map((image) => (
        <div
          key={image.id}
          onClick={() => openModal(image)}
          className="lg:w-[171px] p-[2px] cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
        >
          {/* <Image src={image.url} alt={image.alt} className={`${customImage}`}  /> */}
        </div>
      ))}

      {/* Render CustomerImageModal when an image is clicked */}
      {/* {selectedImage && review && (
        <CustomerImageModal
          onClose={closeModal}
          review={review} // Ensure review is defined
          like={review.like} // Replace with actual like count if available
          dislike={review.dislike} // Replace with actual dislike count if available
          reviewId={reviewId}
        />
      )} */}
    </div>
  );
};

export default CustomImages;
