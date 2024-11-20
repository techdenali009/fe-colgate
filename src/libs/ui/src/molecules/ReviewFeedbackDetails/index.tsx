import React, { useState } from 'react';
import UserInfoReview from '../UserInfoReview';
import ReviewContent from '../ReviewContent';
import ScrollBarReview from '../ScrollBarReview';
import { formatTimeAgo } from '@utils/appFunctions';
import ReviewRatings from '../QuantityValueScent';

interface ReviewFeedbackProps {
  className?: string;
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  productReviews: Array<any>;
  PCA_Responses?: { date: string; response: string };
}

const ReviewFeedbackDetails: React.FC<ReviewFeedbackProps> = ({ className, productReviews }) => {
  const reviewsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(0);

  const startIndex = currentPage * reviewsPerPage;
  const endIndex = startIndex + reviewsPerPage;
  const currentReviews = productReviews.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (endIndex < productReviews.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className={`flex flex-col  lg:mx-2.5 my-5 ${className}`}>
      {currentReviews.map((review) => (
        <div key={review.id} className="review-item mb-5 lg:flex  !2xs:flex-col sm:flex">
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
            timeAgo={formatTimeAgo(review.timeAgo)}
            content={review.reviewContent}
            reviewerName={review.reviewerName}
            like={review.like}
            dislike={review.dislike}
            reviewId={review.id}
            consumerAffairsText={review.consumerAffairsText}
            pcaTimeAgo={review.pcaTimeAgo}
            PCA_Responses={review.PCA_Responses}
          />

          <ReviewRatings
            ratings={review.ratings}
            barClassName="2xs:w-[59px] sm:!w-[36px] sm:px-[0px] md:!w-[37px] xl:!w-[52px]"
            className="lg:w-[52px] sm:!w-[36px] sm:px-[0px]  md:!w-[37px]  2xs:!px-[10px]"
            partialClassName="2xs:w-[59px] sm:!w-[36px]  sm:px-[0px] md:!w-[37px] xl:!w-[52px]"
            EmptyClassName="2xs:w-[59px] sm:!w-[36px] sm:px-[0px] md:!w-[37px]  xl:!w-[52px]"
          />
        </div>
      ))}

      <ScrollBarReview
        className="w-[327px] lg:w-[892px] bg-[#f7f7f7] h-[56px] items-center content-center ml-4 font-SansSerif md:w-[720px] xl:w-[1300px]"
        visibleRangeclassName=''
        totalReviews={productReviews.length}
        showArrows={true}
        onNext={handleNextPage}
        onPrev={handlePrevPage}
        currentPage={currentPage}
        reviewsPerPage={reviewsPerPage}
      />
    </div>
  );
};

export default ReviewFeedbackDetails;
