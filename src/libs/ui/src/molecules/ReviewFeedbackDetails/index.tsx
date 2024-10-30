import React from 'react';
import UserInfoReview from '../UserInfoReview';
import ReviewContent from '../ReviewContent';
import ScrollBarReview from '../ScrollBarReview';
import { formatTimeAgo } from '@utils/test';



interface ReviewFeedbackProps {
  className?: string;
// eslint-disable-next-line  @typescript-eslint/no-explicit-any
  productReviews: Array<any>; // Accept product reviews as prop
}

const ReviewFeedbackDetails: React.FC<ReviewFeedbackProps> = ({ className, productReviews }) => {
  return (
    <div className={`flex flex-col  lg:mx-2.5 my-5  ${className}`}>
      {productReviews.map((review) => (
        <div key={review.id} className="review-item mb-5 flex">
          <UserInfoReview
            name={review.name}
            location={review.location}
            reviewCount={review.reviewCount}
            votesCount={review.votesCount}
            ageGroup={review.ageGroup}
          />
          <ReviewContent
            key={review.id}
            rating={review.rating}
            reviewTitle={review.reviewTitle}
            timeAgo={formatTimeAgo(review.timeAgo)} // Convert the date here
            content={review.reviewContent}
            reviewerName={review.reviewerName}
            like={review.like} // Pass like
            dislike={review.dislike} // Pass dislike
            reviewId={review.id} 
            consumerAffairsText={review.consumerAffairsText}
            pcaTimeAgo={review.pcaTimeAgo}
            PCA_Responses={review.PCA_Responses} // Pass PCA_Responses to ReviewContent
          />
            
          {/* <ReviewRatings ratings={{
            quality: {
              score: 5,
              label: 'Quality'
            },
            value: {
              score: 5,
              label: 'Value'
            },
            scent: {
              score: 5,
              label: 'Scent'
            }
          }} barClassName='w-[52px] ' className=''></ReviewRatings> */}

        </div>

      ))}
      <ScrollBarReview className='w-[377px] lg:w-[1308px] bg-[#f7f7f7]  h-[56px] items-center content-center ml-4 font-SansSerif' totalReviews={productReviews.length} showArrows={true} ></ScrollBarReview>
    </div>
  );
};

export default ReviewFeedbackDetails;


