// src/ui/molecules/StarRatingPopover/StarRatingPopover.tsx
import React, { useState } from 'react';
import { Popover } from 'react-tiny-popover'; // Updated import
import StarRating from '@ui/atoms/StarRating';
import ReviewBar from '@ui/molecules/ReviewBar'; // Import the ReviewBar component
import './ReviewPopOver.styles.scss';

interface StarRatingPopoverProps {
  rating: number;
  reviews: { stars: number; count: number }[]; // Accept reviews as props
}

const StarRatingPopover: React.FC<StarRatingPopoverProps> = ({ rating, reviews }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  // Handlers for mouse enter and leave events
  const handleMouseEnter = () => {
    setIsPopoverOpen(true);
  };

  const handleMouseLeave = () => {
    setIsPopoverOpen(false);
  };

  return (
    <Popover
      isOpen={isPopoverOpen}
      positions={['bottom']} // Position of the popover
      onClickOutside={() => setIsPopoverOpen(false)} // Close on outer click
      content={
        <div className="popover-content">
          <ReviewBar reviews={reviews} /> {/* Render the ReviewBar here */}
        </div>
      }
      align="center" // Align the popover center to the button
    >
      <button 
        className="flex" 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave} // Use hover events
      >
        <StarRating rating={rating} />
        <span className="rating p-[0.15em] text-base leading-5 font-HeroNewRegular text-appTextColor font-hero font-thin">
          {rating} (150)
        </span>
      </button>
    </Popover>
  );
};

export default StarRatingPopover;
