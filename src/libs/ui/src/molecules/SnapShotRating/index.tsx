import React, { useState } from 'react';
import { useReviewContext } from '../ReviewUseContext';
import ReviewBar from '../ReviewBar';

interface ReviewMoleculeProps {
  className?: string;
  reviews: { stars: number; count: number }[];
}

const SnapShotRating: React.FC<ReviewMoleculeProps> = ({ className, reviews }) => {
  const { updateBarRatingFilter, setSelectedRatings } = useReviewContext();
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const [, setSelectedRatingsLocal] = useState<string[]>([]);

  function handleRatingClick(stars: number): void {
    const starString = stars.toString();
    // Update the context with the selected rating
    updateBarRatingFilter(starString);

    // Update local selected ratings state
    setSelectedRatingsLocal((prev) => {
      const updatedRatings = prev.includes(starString)
        ? prev.filter((rating) => rating !== starString) // Remove if already selected
        : [...prev, starString]; // Add if not selected

      // Update the context with the new selected ratings
      setSelectedRatings(updatedRatings); // Update context

      return updatedRatings; // Return updated local state
    });
  }

  return (
    <div className={`${className}`}>
      <h3 className="p-2.5 text-base font-SansSerif">Rating Snapshot</h3>
      <h3 className="pb-[15px] pt-[5px] text-base font-SansSerif ml-[9px]">
        Select a row below to filter reviews.
      </h3>

      {/* Removed selected filter badges */}

      <div>
        <ReviewBar reviews={reviews} onRatingClick={handleRatingClick} />
      </div>
    </div>
  );
};

export default SnapShotRating;
