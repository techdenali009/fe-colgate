import React from 'react';
import UserInfoReview from '../UserInfoReview';
import ReviewContent from '../ReviewContent';


interface ReviewFeedbackProps {
  className?: string; 
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  productReviews: Array<any>; // Accept product reviews as prop
}

const ReviewFeedbackDetails: React.FC<ReviewFeedbackProps> = ({ className,productReviews }) => {
  return (
    <div className={`flex flex-col  lg:mx-2.5 my-5 ${className} `}>
      {productReviews.map((review) => (
        <div key={review.id} className="review-item mb-5">
          <UserInfoReview
            name={review.name}
            location={review.location}
            reviewCount={review.reviewCount}
            votesCount={review.votesCount}
            ageGroup={review.ageGroup}
          />
          <ReviewContent
            rating={review.rating}
            reviewTitle={review.reviewTitle}
            timeAgo={review.timeAgo}
            content={review.reviewContent}
            reviewerName={review.reviewerName}
          />
        </div>
      ))}
    </div>
  );
};

export default ReviewFeedbackDetails;


