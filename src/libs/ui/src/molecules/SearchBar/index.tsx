import React, { useState, ChangeEvent, useEffect } from 'react';
import CloseIcon from '../../../assets/close-icon.svg';  // Adjust the path as needed
import SearchIcon from '../../../assets/SeachBarIcon.svg';

interface SearchBarProps {
  placeholder?: string;
  onSearch: (searchTerm: string) => void;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder = "Search topics and reviews", onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Call the onSearch function whenever the searchTerm changes, including when cleared
  useEffect(() => {
    onSearch(searchTerm);
  }, [searchTerm, onSearch]);

  return (
    <div className="flex items-center border border-black rounded-lg p-2 focus-within:border-blue-600 focus-within:border-2 w-1/2 text-sm">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="focus:outline-none w-full"
      />
      {searchTerm ? (
        <button
          type="button"
          onClick={() => setSearchTerm("")} // Clear search field
          className="ml-2 text-black text-xl"
        >
          {/* Cancel Icon */}
          <img src={CloseIcon} alt="Clear Search" />
        </button>
      ) : (
        <div className="ml-2 text-black text-xl">
          {/* Search Icon */}
          <img src={SearchIcon} alt="Search" />
        </div>
      )}
    </div>
  );
};

export default SearchBar;
