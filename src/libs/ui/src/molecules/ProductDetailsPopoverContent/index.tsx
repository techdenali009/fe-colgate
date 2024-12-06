import React from 'react';
import { ProductType } from '@utils/Product';
import { RxStarFilled } from 'react-icons/rx';
import ProductDetailsPopoverbutton from '@ui/atoms/ProductDetailsPopoverbutton';

interface CustomReviewContentProps {
  reviews?: ProductType['reviews'];
}

const CustomReviewContent: React.FC<CustomReviewContentProps> = ({ reviews }) => {
  // Safeguard to ensure `reviews` is an array
  const safeReviews = Array.isArray(reviews) ? reviews : [];
  
  // Calculate total reviews
  const totalReviews = safeReviews.reduce((total, review) => total + review.count, 0);

  return (
    <div className="review-content w-[220px] mt-6 mx-[10px] mb-6">
      {safeReviews.length > 0 ? (
        safeReviews.map((review) => (
          <div
            className="review-item flex items-center bg-gray-100 hover:bg-gray-200 cursor-pointer p-2 rounded-md mb-1"
            key={review.stars}
          >
            {/* Star Rating */}
            <span className="review-stars text-black font-medium">{review.stars}</span>
            <RxStarFilled className="text-appTheme w-6 h-6 mx-2" />

            {/* Progress Bar */}
            <div className="progress-bar-container flex-grow h-2 bg-gray-300 rounded-md mx-2 relative">
              <div
                className="progress-bar h-full bg-appTheme rounded-md"
                style={{ width: `${(review.count / totalReviews) * 100}%` }}
              />
            </div>

            {/* Review Count */}
            <div className="review-count text-gray-700 font-medium">{review.count}</div>
          </div>
        ))
      ) : (
        <div className="no-reviews text-gray-500 text-sm text-center">
          No reviews available.
        </div>
      )}
      {/* Call to Action Button */}
      <ProductDetailsPopoverbutton />
    </div>
  );
};

export default CustomReviewContent;
