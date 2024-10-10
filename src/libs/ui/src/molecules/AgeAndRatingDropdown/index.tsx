// src/components/molecules/ReviewFilterDropdowns.tsx
import React from 'react';
import BasicDropdown from '../../atoms/Dropdown';

interface ReviewFilterDropdownsProps {
  selectedRating: number | null;
  setSelectedRating: (rating: number | null) => void;
  selectedAgeGroup: string | null;
  setSelectedAgeGroup: (ageGroup: string | null) => void;
}

const ageGroups = [
  "17 or under",
  "18 to 24",
  "25 to 34",
  "35 to 44",
  "45 to 54",
  "55 to 64",
  "65 or over",
];

const ratings = [1, 2, 3, 4, 5];

const ReviewFilterDropdowns: React.FC<ReviewFilterDropdownsProps> = ({
  selectedRating,
  setSelectedRating,
  selectedAgeGroup,
  setSelectedAgeGroup,
}) => {

  const handleAgeGroupChange = (value: string | number | null) => {
    if (typeof value === 'string' || value === null) {
      setSelectedAgeGroup(value);
    }
  };

  const handleRatingChange = (value: string | number | null) => {
    if (typeof value === 'string') {
      setSelectedRating(Number(value) || null);
    } else {
      setSelectedRating(value);
    }
  };

  return (
    <div className="flex space-x-4">
      <BasicDropdown
        options={ageGroups}
        selectedValue={selectedAgeGroup}
        onChange={handleAgeGroupChange}
        placeholder="Select Age Group"
      />
      <BasicDropdown
        options={ratings}
        selectedValue={selectedRating}
        onChange={handleRatingChange}
        placeholder="Select Rating"
      />
    </div>
  );
};

export default ReviewFilterDropdowns;
