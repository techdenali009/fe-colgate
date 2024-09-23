import React from 'react';

import { LiaStarHalfSolid } from 'react-icons/lia';
import { RxStarFilled } from 'react-icons/rx';


interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (rating >= i + 1) {
      stars.push(
        <RxStarFilled key={i} className="text-blue-700 w-6 h-6" />
      ); // Full star
    } else if (rating >= i + 0.5) {
      stars.push(
        <LiaStarHalfSolid key={i} className="text-blue-700 w-6 h-6" />
      ); // Half star
    } else {
      stars.push(
        <RxStarFilled key={i} className="text-gray-300 w-6 h-6" />
      ); // Empty star
    }
  }

  return <div className="flex space-x-0.5">{stars}</div>;
};

export default React.memo(StarRating);