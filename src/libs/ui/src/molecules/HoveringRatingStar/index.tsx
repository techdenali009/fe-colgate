import React, { useState, useEffect } from 'react';
import StarIcon from '../../../assets/star.svg';

interface StarRatingProps {
  totalStars?: number;
  initialRating?: number;
}

const HoverStarRating: React.FC<StarRatingProps> = ({ totalStars = 5, initialRating = 0 }) => {
  const [hoveredStar, setHoveredStar] = useState<number | null>(null);
  const [selectedStar, setSelectedStar] = useState<number | null>(initialRating);

  useEffect(() => {
    setSelectedStar(initialRating);
  }, [initialRating]);

  const handleMouseEnter = (index: number) => {
    setHoveredStar(index);
  };

  const handleMouseLeave = () => {
    setHoveredStar(null);
  };

  const handleClick = (index: number) => {
    setSelectedStar(index);
  };

  return (
    <div>
      <h3 className="text-lg font-medium mb-4">Review this Product</h3>
      <div className="flex">
        {Array.from({ length: totalStars }, (_, index) => {
          const isFilled = index < (hoveredStar ?? selectedStar ?? 0);
          return (
            <span
              key={index}
              className={`cursor-pointer transition-colors p-2 mx-1 border-2 rounded-lg ${isFilled
                ? 'bg-blue-500 border-blue-500' // Blue background for filled stars
                : 'bg-white border-blue-500' // White background for empty stars
              }`}
              onMouseEnter={() => handleMouseEnter(index + 1)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(index + 1)}
            >
              <img src={StarIcon} alt="Star" width="20" height="20" />
            </span>
          );
        })}
      </div>
      <p className="mt-4 text-sm text-gray-600">
        Adding a review will require a valid email for verification.
      </p>
    </div>
  );
};

export default HoverStarRating;
