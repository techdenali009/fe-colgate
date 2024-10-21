import React, { useState, useEffect } from 'react';
import StarIcon from '../../../assets/star.svg';

interface StarRatingProps {
  totalStars?: number;
  initialRating?: number;
  width?: number;
  height?: number;
  className?: string;
  onChange?: (rating: number) => void; // Add the onChange prop
}

const StarRating: React.FC<StarRatingProps> = ({ 
  totalStars = 5, 
  initialRating = 0, 
  width = 20, 
  height = 20, 
  className = '', 
  onChange // Destructure onChange
}) => {
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
    if (onChange) {
      onChange(index); // Call onChange when the star rating changes
    }
  };

  return (
    <div>
      <div className="flex">
        {Array.from({ length: totalStars }, (_, index) => {
          const isFilled = index < (hoveredStar ?? selectedStar ?? 0);
          return (
            <span
              key={index}
              className={`cursor-pointer transition-colors p-2 mx-1 border-2 rounded-lg 
                ${isFilled ? 'bg-blue-500 border-blue-500' : `bg-white border-blue-500 ${className}`}`}
              onMouseEnter={() => handleMouseEnter(index + 1)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(index + 1)}
            >
              <img src={StarIcon} alt="Star" width={width} height={height} />
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default StarRating;
