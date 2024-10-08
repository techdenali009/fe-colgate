import React, { useState } from 'react';
import { Star } from '@ui/atoms/Rating/index';

interface RatingProps {
    totalStars?: number; // Total number of stars
    initialRating?: number; // Initial rating value
    onRatingChange?: (rating: number) => void; // Function to handle rating change
    className?: string; 
}

export const Rating: React.FC<RatingProps> = ({
  totalStars = 5,
  initialRating = 0,
  onRatingChange,
  className = '',
}) => {
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [currentRating, setCurrentRating] = useState<number>(initialRating);

  const handleClick = (rating: number) => {
    setCurrentRating(rating);
    if (onRatingChange) {
      onRatingChange(rating);
    }
  };

  const handleMouseEnter = (rating: number) => {
    setHoverRating(rating);
  };

  const handleMouseLeave = () => {
    setHoverRating(null);
  };

  return (
    <div className={`flex ${className}`}>
      {Array.from({ length: totalStars }, (_, index) => {
        const starRating = index + 1;
        return (
          <Star
            key={starRating}
            filled={hoverRating ? starRating <= hoverRating : starRating <= currentRating}
            onClick={() => handleClick(starRating)}
            onMouseEnter={() => handleMouseEnter(starRating)}
            onMouseLeave={handleMouseLeave}
          />
        );
      })}
    </div>
  );
};
