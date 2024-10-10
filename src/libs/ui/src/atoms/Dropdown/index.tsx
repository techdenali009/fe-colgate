// src/components/atoms/BasicDropdown.tsx
import React from 'react';

interface BasicDropdownProps {
  options: string[] | number[];
  selectedValue: string | number | null;
  onChange: (value: string | number | null) => void;
  placeholder: string;
}

const BasicDropdown: React.FC<BasicDropdownProps> = ({ options, selectedValue, onChange, placeholder }) => {
  return (
    <select
      value={selectedValue ?? ''}
      onChange={(e) => onChange(e.target.value || null)}
      className="p-2 border rounded"
    >
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default BasicDropdown;
