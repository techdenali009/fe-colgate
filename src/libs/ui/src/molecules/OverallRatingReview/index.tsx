import React from 'react';
import StarRating from '@ui/atoms/StarRating';
import { ButtonWithText } from '../ButtonWithText';

interface ReviewMoleculeProps {
  className?: string; // Optional prop for additional class names
}

const OverallRatingReview: React.FC<ReviewMoleculeProps> = ({ className }) => {
  // Ensure the function is wrapped properly
  const handleReviewClick = () => {
    // Show reviews section when button is clicked
    console.log('Review section clicked');
  };

  return (
    <div className={`block ${className}`}>
      <h3 className='p-2.5 font-SansSerif'>Overall Rating</h3>
      <div className='flex mb-[5px] mx-[5px] px-[5px] pb-[5px] -mt-[12px]'>
        <div className='py-[5px] pr-[5px] text-[45px] font-SansSerif'>3.7</div>
        <div className='flex flex-col items-start mt-5 cursor-pointer'>
          <StarRating rating={3.8} className='!w-4 !h-4' />
          <ButtonWithText
            onClick={handleReviewClick} // Attach onClick handler here
            className='text-base !p-0 !m-0 font-SansSerif'
          >
            19 Reviews
          </ButtonWithText>
        </div>
      </div>
    </div>
  );
};

export default OverallRatingReview;
