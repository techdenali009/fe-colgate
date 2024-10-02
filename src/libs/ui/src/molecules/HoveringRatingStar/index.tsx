import React, { useState, useEffect } from 'react';

interface StarRatingProps {
  totalStars?: number;
  initialRating?: number;
}

const StarRating: React.FC<StarRatingProps> = ({ totalStars = 5, initialRating = 0 }) => {
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
              {/* SVG star icon, fill always white for inside of the star */}
              <svg
                aria-hidden="true"
                width="20px"
                height="20px"
                fill="none"
                viewBox="0 0 34 34"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current stroke-current"
              >
                <g stroke="none" fill="none" fillRule="evenodd">
                  <g fillRule="nonzero" stroke="#125CE0" strokeWidth="1.5">
                    <path
                      fill="#ffffff" // Inside of the star is always white
                      d="M16.3076923,1.76513255 L20.8381599,11.4172719 L31.0592597,12.978917 L23.6603835,20.5621906 L25.3975353,31.2117909 L16.3076923,26.1870493 L7.21784935,31.2117909 L8.95500108,20.5621906 L1.55612493,12.978917 L11.7772247,11.4172719 L16.3076923,1.76513255 Z"
                    ></path>
                  </g>
                </g>
              </svg>
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

export default StarRating;
