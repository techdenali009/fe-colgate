// AgeAndRatingDropdown.tsx
import React from 'react';
import AgeDropdown from '../AgeSelectDropdown';
import RatingDropdown from '../RatingSelectDropdown';

interface AgeAndRatingDropdownProps {
  onAddFilter: (filter: string) => void;
  ratingButtonClass?: string;   // Optional prop for Rating button classes
  ratingDropdownClass?: string;  // Optional prop for Rating dropdown classes
  ratingOptionClass?: string;    // Optional prop for Rating option classes
  ageButtonClass?: string;       // Optional prop for Age button classes
  ageDropdownClass?: string;     // Optional prop for Age dropdown classes
  ageOptionClass?: string;       // Optional prop for Age option classes
}

const AgeAndRatingDropdown: React.FC<AgeAndRatingDropdownProps> = ({
  onAddFilter,
  ratingButtonClass,
  ratingDropdownClass,
  ratingOptionClass,
  ageButtonClass,
  ageDropdownClass,
  ageOptionClass,
}) => {
  return (
    <div className="flex items-center space-x-4 p-4">
      <RatingDropdown
        onAddFilter={onAddFilter}
        buttonClass={ratingButtonClass}       // Pass custom Rating button class
        dropdownClass={ratingDropdownClass}   // Pass custom Rating dropdown class
        optionClass={ratingOptionClass}       // Pass custom Rating option class
      />
      <AgeDropdown
        onAddFilter={onAddFilter}
        buttonClass={ageButtonClass}          // Pass custom Age button class
        dropdownClass={ageDropdownClass}      // Pass custom Age dropdown class
        optionClass={ageOptionClass}          // Pass custom Age option class
      />
    </div>
  );
};

export default AgeAndRatingDropdown;
