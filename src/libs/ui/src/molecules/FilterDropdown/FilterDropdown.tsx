import React, { useState, useRef, useEffect, ReactNode } from 'react';

interface FilterDropdownProps {
  options: string[];
  onSelect: (option: string) => void;
  children?: ReactNode; // Accept children
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({ options, onSelect, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [prevOption, setPrevOption] = useState(options[0]);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionSelect = (option: string) => {
    setPrevOption(selectedOption); // Save previous option
    setSelectedOption(option);
    onSelect(option); // Send selected option to parent
    setIsOpen(false); // Close dropdown after selection
  };

  // Close the dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSelectedOption(prevOption); // Revert to previous option if closed
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [prevOption]);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className={`flex items-center px-4 py-2 bg-white border rounded-full shadow-sm focus:outline-none ${isOpen ? 'border-blue-500' : 'border-gray-300'}`}
      >
        <svg
          className="mr-2 h-4 w-4 text-blue-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
        <span className="text-sm font-medium text-gray-700">{selectedOption}</span>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg">
          <ul className="py-1 max-h-60 overflow-y-auto">
            {options.map((option) => (
              <li
                key={option}
                onClick={() => handleOptionSelect(option)}
                className={`cursor-pointer px-4 py-2 text-sm text-gray-700 ${selectedOption === option ? 'bg-blue-800 text-white' : 'hover:bg-blue-800 hover:text-white'}`}
              >
                {option}
              </li>
            ))}
          </ul>
          {children} {/*children*/}
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
