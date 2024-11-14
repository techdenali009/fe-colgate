import React, { useState } from 'react';
import { Button } from '@ui/atoms/Button';
import ReviewModal from '../ReviewModal'; // Import the ReviewModal component
import {useReviewContext } from '../ReviewUseContext';
import { Review } from '@utils/ReviewTypes';
import './UserInfoReview.styles.scss'
interface UserInfoProps {
  name: string;
  location: string;
  ageGroup: string;
  reviewCount: number;
  votesCount: number;
}

const UserInfoReview: React.FC<UserInfoProps> = ({ name, location, ageGroup, reviewCount, votesCount }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedReview, setSelectedReview] = useState<Review | null>(null); // Type correctly as Review | null
  const { productReviews } = useReviewContext();

  // Function to handle modal open and select the review
  const openModal = () => {
    const review = productReviews.find((review) => review.name === name);
    if (review) {
      setSelectedReview(review);  // Set the selected review
      setModalOpen(true); // Open modal
    }
  };

  // Function to handle modal close
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className='inline-block max-w-[22%] lg:min-w-[22%] pt-2.5 mt-0 !font-SansSerif  UserInfoReviewContainer'>
      <div className='mb-[10px]'>
        <Button className='hidden lg:block font-bold bg-transparent ' onClick={openModal}>
          <h3>{name}</h3>
        </Button>
      </div>
      <div className='hidden lg:block'>
        <div className='location mr-[5px]'>
          <span>{location}</span>
        </div>
        <div className='location block'>
          <div>
            <span className='reviewlabel'>Review</span>
            <span className=''>{reviewCount}</span>
          </div>
          <div>
            <span className='reviewlabel'>Votes</span>
            <span className='reviewspan'>{votesCount}</span>
          </div>
        </div>
        <div className='location'>
          <span className='reviewlabel'>Age</span>
          <span className='reviewspan'>{ageGroup}</span>
        </div>
      </div>

      {/* Conditionally render the modal */}
      {isModalOpen && selectedReview && (
        <ReviewModal onClose={closeModal} review={selectedReview} like={selectedReview.like} dislike={selectedReview.dislike} reviewId={selectedReview.id} />
      )}
    </div>
  );
};

export default UserInfoReview;
