import React, { useState } from 'react';
import { Button } from '@ui/atoms/Button';
import Paragraph from '@ui/atoms/Paragraph/paragraph';
import StarRating from '@ui/atoms/StarRating';
import LikeAndReport from '../LikeAndReport';
import OriginallyPostReview from '@ui/atoms/OriginallyPostReview';
import ResponseCard from '../ResponsePCASkin';
import { formatTimeAgo } from '@utils/appFunctions';
import ReviewCustomImages from '../ReviewCustomImages';
import ReviewModal from '../ReviewModal';
import {  useReviewContext } from '../ReviewUseContext';
import { Review } from '@utils/ReviewTypes';


interface ReviewContentProps {
  reviewId: number;
  rating: number;
  reviewTitle: string;
  content: string;
  reviewerName: string;
  timeAgo: string;
  like: number;
  dislike: number;
  consumerAffairsText: string;
  pcaTimeAgo?: string;
  PCA_Responses?: { date: string; response: string }; // Make this optional
}

const ReviewContent: React.FC<ReviewContentProps> = ({
  reviewId,
  rating,
  reviewTitle,
  content,
  reviewerName,
  timeAgo,
  like,
  dislike,
  PCA_Responses,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedReview, setSelectedReview] = useState<Review | null>(null); // Type correctly as Review | null
  const { productReviews } = useReviewContext();

  // Function to handle modal open and select the review
  const openModal = () => {
    const review = productReviews.find((review) => review.name === reviewerName);
    if (review) {
      setSelectedReview(review);  // Set the selected review
      setModalOpen(true); // Open modal
    }
  };

  // Function to handle modal close
  const closeModal = () => {
    setModalOpen(false);
  };

  const handleReport = () => {
    console.log(`Reported review: ID ${reviewId}, Name: ${reviewerName}`);
  };
  return (
    <div className="w-[377px] xl:w-[663px] inline-block p-[16px] font-SansSerif ">
      <StarRating rating={rating} className="!w-[17px]" />
      <h3 className="text-[rgb(112,115,114)]">{reviewTitle}</h3>
      <div className="lg:mt-[5px] lg:flex">
        <Button className="block lg:hidden  text-black font-HeroNewBold bg-transparent" onClick={openModal}>
          <h3>{reviewerName}</h3>
        </Button>
        <span className="text-[16px] font-SansSerif py-[10px]">{timeAgo}</span>
      </div>
      <Paragraph className='mt-[10px]'>{content}</Paragraph>
      <div className='flex'>
        <ReviewCustomImages reviewId={reviewId} className='flex-nowrap'customImage='w-[175px] h-[175px] '  />
      </div>
      <OriginallyPostReview/>
      <LikeAndReport className="hidden lg:flex" initialLikeCount={like} initialDislikeCount={dislike} reviewId={reviewId} onReport={handleReport} />
      {PCA_Responses && (
        <ResponseCard
          containerClassName='2xs:w-[327px] md:!w-[680px] xl:!w-[1000px]'
          title="Response from PCA SKIN"
          reviewId={reviewId}
          pcaTimeAgo={formatTimeAgo(PCA_Responses.date)}
          iconSrc="responsePCASkin"
          consumerAffairsText={PCA_Responses.response}
        />
      )}
      {/* Conditionally render the modal */}
      {isModalOpen && selectedReview && (
        <div className=''>
          <ReviewModal  onClose={closeModal} review={selectedReview} like={selectedReview.like} dislike={selectedReview.dislike} reviewId={selectedReview.id}/>
        </div>
      )}
    </div>
  );
};

export default ReviewContent;
