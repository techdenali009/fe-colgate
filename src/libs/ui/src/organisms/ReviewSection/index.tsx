// ReviewSection.tsx
import React from 'react';
import ReviewFeedbackDetails from '@ui/molecules/ReviewFeedbackDetails';
import SnapShotRating from '@ui/molecules/SnapShotRating';
import OverallRatingReview from '@ui/molecules/OverallRatingReview';
import AverageCustomerRatings from '@ui/molecules/AverageCustomerRatings';
import FilterReviews from '@ui/molecules/FilterReviews';
import { Heading } from '@ui/atoms/Heading';
import { useReviewContext } from '@ui/molecules/ReviewUseContext';
import HoverStarRating from '@ui/molecules/HoveringRatingStar';
import { reviews } from '@utils/test';

const ReviewSection: React.FC = () => {
  const { filteredReviews } = useReviewContext();

  return (
    <div className="px-[24px] my-2 flex-col lg:px-14 lg:appPaddingRight lg:my-2 lg:mx-10">
      <div className='lg:mx-2.5 flex'>
        <Heading className='lg:text-xl font-HeroNewBold mt-4'>Reviews</Heading>
      </div>
      <div className='flex flex-col lg:flex-row mx-2.5 border-b border-[#EAEAEA]'>
        <SnapShotRating className='w-[357px] lg:w-[436px] h-[214px]' reviews={reviews} />
        <OverallRatingReview className='w-[357px] h-[109px] lg:w-[436px] lg:h-[214px]'></OverallRatingReview>
        < HoverStarRating></HoverStarRating>
      </div>
      <div className='border-b'>
        <AverageCustomerRatings className='sm:w-[357px] lg:w-[1308px]'></AverageCustomerRatings>
      </div>
      <div className='border-b'>
        <FilterReviews></FilterReviews>
      </div>
      <div className='border-b'>
        <ReviewFeedbackDetails productReviews={filteredReviews}/> {/* Use filtered reviews */}
      </div>
    </div>
  );
};

export default ReviewSection;