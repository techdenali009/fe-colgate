// ReviewSection.tsx
import React from 'react';
import ReviewFeedbackDetails from '@ui/molecules/ReviewFeedbackDetails';
import SnapShotRating from '@ui/molecules/SnapShotRating';
import OverallRatingReview from '@ui/molecules/OverallRatingReview';
import FilterReviews from '@ui/molecules/FilterReviews';
import { Heading } from '@ui/atoms/Heading';
import { useReviewContext } from '@ui/molecules/ReviewUseContext';
import HoverStarRating from '@ui/molecules/HoveringRatingStar';
import { reviews } from '@utils/test';
import AverageCustomerRatings from '@ui/molecules/AverageCustomerRatings';
import ReviewCustomImages from '@ui/molecules/ReviewCustomImages';

const ReviewSection: React.FC = () => {
  const { filteredReviews } = useReviewContext();
  const reviewId = filteredReviews.length > 0 ? filteredReviews[0].id : 0;

  return (
    <div className="px-[24px] my-2 flex-col lg:px-14 lg:appPaddingRight lg:my-2 lg:mx-10 md:flex-row">
      <div className=''>
        <div className='lg:mx-2.5 flex'>
          <Heading className='text-xl font-HeroNewBold mt-4'>Reviews</Heading>
        </div>
        <div className='flex flex-col lg:flex-row mx-2.5 border-b border-[#EAEAEA]'>
          <SnapShotRating className='' reviews={reviews} />
          <OverallRatingReview className='w-[357px] h-[109px] lg:w-[436px] lg:h-[214px]'></OverallRatingReview>
          < HoverStarRating></HoverStarRating>
        </div>
      </div>
      <div className='border-b'>
        <AverageCustomerRatings></AverageCustomerRatings>
        
      </div>
      <div className=''>
        {/* <h3 className='text-center font-SansSerif p-[10px]'>Customer Images</h3> */}
        <ReviewCustomImages reviewId={reviewId} customImage='w-[170px] h-[170px] ' />
      </div>
      <div className='border-b'>
        <FilterReviews productReviews={filteredReviews}></FilterReviews>
      </div>
      <div className='border-b'>
        <ReviewFeedbackDetails className='lg:!p-0' productReviews={filteredReviews} />
      </div>
    </div>
  );
};

export default ReviewSection;