import { Heading } from '@ui/atoms/Heading';
import AverageCustomerRatings from '@ui/molecules/AverageCustomerRatings';
import HoverStarRating from '@ui/molecules/HoveringRatingStar';
import OverallRatingReview from '@ui/molecules/OverallRatingReview';
import ReviewFeedbackDetails from '@ui/molecules/ReviewFeedbackDetails';
import SnapShotRating from '@ui/molecules/SnapShotRating';
import React from 'react';

interface ReviewSectionProps {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  productReviews: Array<any>; // Accept product reviews as prop
}

const ReviewSection: React.FC<ReviewSectionProps> = ({productReviews, }) => {
  return (
    <div className="px-[24px] my-2 flex-col  lg:px-14 lg:appPaddingRight lg:my-2 lg:mx-10 ">
      <div className=' lg:mx-2.5 flex'>
        <Heading className=' lg:text-xl font-HeroNewBold  mt-4 '>Reviews</Heading>
      </div>
      <div className='flex flex-col lg:flex-row  mx-2.5  border-[#EAEAEA]'>
        <SnapShotRating className='w-[357px]  lg:w-[436px] h-[214px]'></SnapShotRating>
        <OverallRatingReview className='w-[357px] h-[109px]   lg:w-[436px] lg:h-[214px]'></OverallRatingReview>
        <div className=' w-[357px] h-[155px] lg:w-[436px] lg:h-[214px] '>
          <HoverStarRating />
        </div>
      </div>
      <AverageCustomerRatings className='sm:w-[357px] lg:w-[1308px]'></AverageCustomerRatings>
      <ReviewFeedbackDetails productReviews={productReviews}/>
    </div>
  );
};

export default ReviewSection;