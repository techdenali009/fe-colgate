import React from 'react';

interface ReviewBarProps {
    reviews: { stars: number; count: number }[];
}

const ReviewBar: React.FC<ReviewBarProps> = ({ reviews }) => {
  const totalReviews = reviews.reduce((total, review) => total + review.count, 0);

  return (
    <div className="w-80">
      <h3 className="text-lg font-medium mb-2">Reviews Bar</h3>
      {reviews.map((review) => (
        <div className="flex items-center" key={review.stars}>
          <div className="w-16 text-black">{review.stars} stars</div>
          <div className="flex-grow h-4 bg-gray-300 rounded-lg mx-2 relative">
            <div
              className="h-full bg-blue-500 rounded-lg"
              style={{
                width: `${(review.count / totalReviews) * 100}%`,
              }}
            >
            </div>
          </div>
          <span className="text-gray-600">{review.count}</span>
        </div>
      ))}
    </div>
  );
};

export default ReviewBar;
