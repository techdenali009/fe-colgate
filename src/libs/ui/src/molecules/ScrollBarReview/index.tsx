import React from 'react';
import { PrimaryButton } from '../PrimaryButton'; // Assuming you have a custom PrimaryButton component
import ReviewLeftArrow from '@ui/atoms/SvgAtoms/ReviewLeftArrow';
import ReviewRightArrow from '@ui/atoms/SvgAtoms/ReviewRightArrow';

interface ScrollBarReviewProps {
  className?: string;
  extraClassName?: string;
  totalReviews: number;
  reviewsPerPage?: number;
  showArrows?: boolean;
  currentPage: number;
  onNext: () => void;
  onPrev: () => void;
  visibleRangeclassName?: string;
}

const ScrollBarReview: React.FC<ScrollBarReviewProps> = ({
  className = '',
  extraClassName = '',
  totalReviews,
  reviewsPerPage = 8,
  showArrows = true,
  currentPage,
  visibleRangeclassName,
  onNext,
  onPrev,
}) => {
  const startReview = currentPage * reviewsPerPage + 1;
  const remainingReviews = totalReviews - startReview + 1;
  const endReview = Math.min(startReview + reviewsPerPage - 1, totalReviews);
  const visibleRange = `${startReview} – ${endReview}`;

  return (
    <div>
      {remainingReviews <= 5 && (
        <div className={`text-[#707372] mb-[10px] ${extraClassName}`}>
          <h3 className='mx-[19px] font-SansSerif font-bold'>{remainingReviews} Ratings-Only Reviews</h3>
        </div>
      )}

      <div className={`relative flex flex-nowrap mb-1 text-base font-sans text-black leading-[19.5px] mr-2.5 pr-0 ml-2.5 pl-0 ${className}`}>
        <div className={`relative float-left py-2 pl-2 mr-auto self-center outline-none font-SansSerif ${visibleRangeclassName}`}>
          {visibleRange} of {totalReviews} Reviews
        </div>

        {showArrows && (
          <ul className="float-right m-0 flex box-border">
            <li>
              <PrimaryButton
                className="relative overflow-hidden !p-0 !bg-white box-border h-14 w-12 border border-gray-400 rounded-md pt-1.5"
                onClick={onPrev} // Use passed onPrev
                disabled={currentPage === 0}
              >
                <div className="items-center text-gray-400 m-2 w-5">
              
                  <ReviewLeftArrow></ReviewLeftArrow>
                </div>
              </PrimaryButton>
            </li>
            <li>
              <PrimaryButton
                className="relative overflow-hidden !p-0 !bg-white box-border h-14 w-12 border border-gray-400 rounded-md pt-1.5"
                onClick={onNext} // Use passed onNext
                disabled={endReview >= totalReviews}
              >
                <div className="items-center text-gray-400 m-2 w-5">
      
                  <ReviewRightArrow></ReviewRightArrow>
                </div>
              </PrimaryButton>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default ScrollBarReview;
