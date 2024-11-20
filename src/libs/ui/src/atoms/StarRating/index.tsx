import React from 'react';

import { LiaStarHalfSolid } from 'react-icons/lia';
import { RxStarFilled } from 'react-icons/rx';


interface StarRatingProps {
  rating: number;
  className?: string;
  starclassName?: string;
}

const StarRating: React.FC<StarRatingProps> = ({ rating,className,starclassName }) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (rating >= i + 1) {
      stars.push(
        <RxStarFilled key={i} className={`text-appTheme w-[23px] h-[23px] ${className}`}  />
      ); // Full star
    } else if (rating >= i + 0.5) {
      stars.push(
        <LiaStarHalfSolid key={i} className={`text-appTheme w-[23px] h-[23px] ${className}`} />
      ); // Half sta3
    } else {
      stars.push(
        <RxStarFilled key={i} className={`text-gray-300  w-[23px] h-[23px] ${className}`} />
      ); // Empty star
    }
  }

  return <div className={`flex -space-x-0.5 ${starclassName}`}>{stars}</div>;
};

export default React.memo(StarRating);
  