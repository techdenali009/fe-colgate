// src/components/molecules/SearchBar.tsx
import React from 'react';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery, className = '' }) => {
  return (
    <div className={`flex items-center border border-black rounded-lg p-2 focus-within:border-blue-600 focus-within:border-2 w-1/2 text-sm ${className}`}>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search reviews..."
        className="focus:outline-none w-full"
      />
    </div>

  );
};

export default SearchBar;
