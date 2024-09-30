import React, { useState, useRef, useEffect } from 'react';

const FilterDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Alphabetical A - Z');
  const [prevOption, setPrevOption] = useState('Alphabetical A - Z');
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionSelect = (option: string) => {
    setPrevOption(selectedOption); // Save previous option
    setSelectedOption(option);
    setIsOpen(false); // Close dropdown after selection
  };

  const handleScroll = () => {
    // Remove background on scroll
    const listItems = dropdownRef.current?.querySelectorAll('li');
    listItems?.forEach((item) => {
      item.classList.remove('bg-blue-800', 'text-white');
    });
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
        <div className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg" onScroll={handleScroll}>
          <ul className="py-1 max-h-60 overflow-y-auto">
            {['Alphabetical A - Z', 'Alphabetical Z - A', 'Price Low to High', 'Price High to Low'].map((option) => (
              <li
                key={option}
                onClick={() => handleOptionSelect(option)}
                className={`cursor-pointer px-4 py-2 text-sm text-gray-700 ${
                  selectedOption === option ? 'bg-blue-800 text-white' : 'hover:bg-blue-800 hover:text-white'
                }`}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
