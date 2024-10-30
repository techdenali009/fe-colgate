// src/components/atoms/BasicDropdown.tsx
import React from 'react';

interface BasicDropdownProps {
  options: string[] | number[];
  selectedValue: string | number | null;
  onChange: (value: string | number | null) => void;
  placeholder: string;
  className?:string;
}

const BasicDropdown: React.FC<BasicDropdownProps> = ({ options, selectedValue, onChange, placeholder, className}) => {
  return (
    <select
      value={selectedValue ?? ''}
      onChange={(e) => onChange(e.target.value || null)}
      className={`px-4 py-2 items-center justify-between cursor-pointer mt-1.5 border border-[rgba(17,17,17,0.6)] rounded-md bg-white text-black  font-HeroNewRegular mr-1.5 mb-0 min-w-[7em] ${className}`}
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
