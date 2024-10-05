// src/components/molecules/SearchBar.tsx
import React from 'react';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  className?: string; 
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery, className = '' }) => {
  return (
    <input
      type="text"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search reviews..."
      className={`p-2 border rounded w-full ${className}`}
    />
  );
};

export default SearchBar;
