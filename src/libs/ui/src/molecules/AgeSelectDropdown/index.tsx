// src/components/molecules/AgeSelectDropdown.tsx
import React from 'react';
import BasicDropdown from '../../atoms/Dropdown';

interface AgeSelectDropdownProps {
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

const AgeSelectDropdown: React.FC<AgeSelectDropdownProps> = ({ selectedAgeGroup, setSelectedAgeGroup }) => {
  const handleAgeGroupChange = (value: string | number | null) => {
    if (typeof value === 'string' || value === null) {
      setSelectedAgeGroup(value); // Only set value if it's a string or null
    }
  };

  return (
    <BasicDropdown
      options={ageGroups}
      selectedValue={selectedAgeGroup}
      onChange={handleAgeGroupChange} // Ensure the handler is type-safe
      placeholder="Select Age Group"
    />
  );
};

export default AgeSelectDropdown;
