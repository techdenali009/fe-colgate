import React from 'react';

interface ReviewBarProps {
  reviews: { stars: number; count: number }[];
  barClassName?: string;
  labelClassName?: string;
  countClassName?: string;
  className?: string;
  onRatingClick: (stars: number) => void;
}

const ReviewBar: React.FC<ReviewBarProps> = ({
  reviews,
  className,
  labelClassName,
  countClassName,
  onRatingClick,
}) => {
  const totalReviews = reviews.reduce((total, review) => total + review.count, 0);

  return (
    <div className="w-[337px] lg:w-[416px] px-[5px] pb-[5px] mx-[5px] mb-[5px]  md:w-[680px] ">
      {reviews.map((review) => (
        <div
          key={review.stars} // Correctly set the key for each item
          className={`flex items-center ${className} bg-rgb(247, 247, 247) hover:bg-gray-200 hover:cursor-pointer  `}
          onClick={() => onRatingClick(review.stars)} // Call onRatingClick when clicked
        >
          <div className={`w-12 ${labelClassName} text-black font-SansSerif`}>
            {review.stars} stars
          </div>
          <div className="flex-grow h-4 bg-[#eff2f4] rounded-lg mx-2 relative shadow-[inset_0px_0px_0px_1px_rgb(204,204,204)]">
            <div
              className={`h-full ${className} bg-appTheme rounded-l-lg`}
              style={{
                width: totalReviews > 0 ? `${(review.count / totalReviews) * 100}%` : '0%',
              }}
            />
          </div>
          <span className={`${countClassName} text-gray-600 font-SansSerif`}>
            {review.count}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ReviewBar;
