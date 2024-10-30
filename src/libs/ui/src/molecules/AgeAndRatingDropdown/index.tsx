import React, { useState } from 'react';
import ReviewDropdown from '../ReviewDropdown';
import { ageGroups, ratings } from '@utils/test';
import { useReviewContext } from '../ReviewUseContext'; // Adjust path as needed

interface RatingAgeDropdownsProps {
  selectedRatings: string[];
  setSelectedRatings: (ratings: string[]) => void;
  selectedAgeGroups: string[];
  setSelectedAgeGroups: (ageGroups: string[]) => void;
}

const AgeRatingDropdowns: React.FC<RatingAgeDropdownsProps> = ({
  selectedRatings,
  setSelectedRatings,
  selectedAgeGroups,
  setSelectedAgeGroups,
}) => {
  const { updateBarRatingFilter, setSelectedAgeGroups: setAgeGroups } = useReviewContext(); // Get context functions
  const [isRatingOpen, setIsRatingOpen] = useState(false);
  const [isAgeOpen, setIsAgeOpen] = useState(false);

  // Handle item selection for ratings
  const handleRatingSelected = (rating: string) => {
    if (selectedRatings.includes(rating)) {
      setSelectedRatings(selectedRatings.filter(r => r !== rating));
    } else {
      const updatedRatings = [...selectedRatings, rating];
      setSelectedRatings(updatedRatings);
      updateBarRatingFilter(rating); // Update filter in context
    }
  };

  // Handle item selection for age groups
  const handleAgeGroupSelected = (ageGroup: string) => {
    if (selectedAgeGroups.includes(ageGroup)) {
      const updatedAgeGroups = selectedAgeGroups.filter(group => group !== ageGroup);
      setSelectedAgeGroups(updatedAgeGroups);
      setAgeGroups(updatedAgeGroups); // Update context
    } else {
      const updatedAgeGroups = [...selectedAgeGroups, ageGroup];
      setSelectedAgeGroups(updatedAgeGroups);
      setAgeGroups(updatedAgeGroups); // Update context
    }
  };

  return (
    <div className="flex space-x-4 font-SansSerif">
      {/* Rating Dropdown */}
      <ReviewDropdown
        label="Rating"
        items={ratings as string[]}
        selectedItems={selectedRatings}
        onItemClick={handleRatingSelected}
        isOpen={isRatingOpen}
        setIsOpen={setIsRatingOpen}
        isRatingDropdown={true} // Pass true for rating dropdown
        
      />
      {/* Age Group Dropdown */}
      <ReviewDropdown
        label="Age"
        items={ageGroups as string[]}
        selectedItems={selectedAgeGroups}
        onItemClick={handleAgeGroupSelected}
        isOpen={isAgeOpen}
        setIsOpen={setIsAgeOpen}
        // No need to pass isRatingDropdown, it defaults to false
      />
    </div>
  );
};

export default AgeRatingDropdowns;
