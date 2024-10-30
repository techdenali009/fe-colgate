// src/components/molecules/SearchBar.tsx
import { Input } from '@ui/atoms/Input';
import React, { ReactNode } from 'react';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  className?: string;
  children?: ReactNode;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery, className = '', children }) => {
  const handleClear = () => {
    setSearchQuery('');
  };

  return (
    <div className='my-4'>
      <div className={`w-[292px] flex items-center border-solid border-[rgba(17,17,17,0.6)] border-[1px] rounded p-2 focus-within:border-blue-600 focus-within:border-2 lg:w-[546px] h-[42px] text-sm ${className}`}>
        <Input
          type="text"
          value={searchQuery}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
          placeholder="Search topics and reviews"
          className="focus:outline-none w-full"
        />
        {searchQuery ? (
          <button onClick={handleClear} className="ml-2">
            {/* Close Button */}
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="black" aria-hidden="true">
              <path d="M12 10.586l4.95-4.95 1.414 1.414L13.414 12l4.95 4.95-1.414 1.414L12 13.414l-4.95 4.95-1.414-1.414L10.586 12 5.636 7.05l1.414-1.414z" />
            </svg>
          </button>
        ) : (
          children // Render the magnifying glass SVG icon
        )}
      </div>
    </div>
  );
};

export default SearchBar;
