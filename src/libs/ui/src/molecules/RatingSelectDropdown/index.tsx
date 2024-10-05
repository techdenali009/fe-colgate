// src/components/molecules/RatingSelectDropdown.tsx
import React from 'react';
import BasicDropdown from '../../atoms/Dropdown';

interface RatingSelectDropdownProps {
  selectedRating: number | null;
  setSelectedRating: (rating: number | null) => void;
}

const RatingSelectDropdown: React.FC<RatingSelectDropdownProps> = ({ selectedRating, setSelectedRating }) => {
  const ratings = [1, 2, 3, 4, 5];

  const handleRatingChange = (value: string | number | null) => {
    if (typeof value === 'string') {
      setSelectedRating(Number(value) || null);
    } else {
      setSelectedRating(value);
    }
  };

  return (
    <BasicDropdown
      options={ratings}
      selectedValue={selectedRating}
      onChange={handleRatingChange} // Convert string to number if needed
      placeholder="Select Rating"
    />
  );
};

export default RatingSelectDropdown;
