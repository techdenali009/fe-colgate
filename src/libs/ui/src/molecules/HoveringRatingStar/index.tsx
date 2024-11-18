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
      <h3 className="text-base font-SansSerif mb-4 ">Review this Product</h3>
      <div className="flex">
        {Array.from({ length: totalStars }, (_, index) => {
          const isFilled = index < (hoveredStar ?? selectedStar ?? 0);
          return (
            <span
              key={index}
              className={` w-[63px] h-[50px] cursor-pointer transition-colors p-2 mx-1 border-[1px] rounded-[4px] lg:w-[55px] lg:h-[50px] flex justify-center md:w-[72px]  ${isFilled
                ? 'bg-appTheme border-appTheme' // Blue background for filled stars
                : 'bg-white border-appTheme' // White background for empty stars
              }`}
              onMouseEnter={() => handleMouseEnter(index + 1)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(index + 1)}
            >
              <img src={StarIcon} alt="Star" width="20" height="20" className='' />
            </span>
          );
        })}
      </div>
      <p className="mt-4 text-[18px] text-black  font-SansSerif">
        Adding a review will require a valid email for verification.
      </p>
    </div>
  );
};

export default HoverStarRating;
