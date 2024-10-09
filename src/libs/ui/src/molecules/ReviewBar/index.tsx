import React from 'react';

interface ReviewBarProps {
  reviews: { stars: number; count: number }[];
  barClassName?: string;
  labelClassName?: string;
  countClassName?: string;
  className?: string;
}

const ReviewBar: React.FC<ReviewBarProps> = ({ reviews,className, barClassName,labelClassName,countClassName,
}) => {
  const totalReviews = reviews.reduce((total, review) => total + review.count, 0);

  return (
    <div className="w-[357px] lg:w-[416px] px-[5px] pb-[5px] mx-[5px] mb-[5px]">
      {reviews.map((review) => (
        // eslint-disable-next-line  react/jsx-key
        <div className={`flex items-center" key={review.stars} ${className}`}>
          <div className={`w-16 ${labelClassName} text-black`}>{review.stars} stars</div>
          <div className="flex-grow  h-4 bg-[#eff2f4] rounded-lg mx-2 relative shadow-[inset_0px_0px_0px_1px_rgb(204,204,204)]">
            <div
              className={`h-full ${barClassName} bg-blue-500 rounded-lg`}
              style={{
                width: `${(review.count / totalReviews) * 100}%`,
              }}
            />
          </div>
          <span className={`${countClassName} text-gray-600 `}>{review.count}</span>
        </div>
      ))}
    </div>
  );
};

export default ReviewBar;