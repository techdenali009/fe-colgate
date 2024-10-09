import React from 'react';
import StarRating from '@ui/atoms/StarRating';
import { ButtonWithText } from '../ButtonWithText';


interface ReviewMoleculeProps {
  className?: string; // Optional prop for additional class names
}
const OverallRatingReview: React.FC <ReviewMoleculeProps>= ({className}) => {
  return (
    <div className={`block ${className}`}>
      <h3 className='p-2.5 font-HeroNewLight'>Overall Rating</h3>
      <div className='flex mb-[5px] mx-[5px] px-[5px] pb-[5px] -mt-[12px] '>
        <div className='py-[5px] pr-[5px] text-[45px] font-HeroNewRegular'>3.7</div>
        <ButtonWithText className=' flex flex-col cursor-pointer py-![5px] px-![5px] mt-4'>
          <StarRating rating={3.8} className='!w-4 !h-4'></StarRating>
          <ButtonWithText className='text-base !p-0 !m-0'>19 Reviews</ButtonWithText>
        </ButtonWithText>
      </div>
    </div>
  );
};

export default OverallRatingReview;
