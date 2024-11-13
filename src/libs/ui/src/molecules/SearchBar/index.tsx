// src/components/molecules/SearchBar.tsx
import { Input } from '@ui/atoms/Input';
import React, { ReactNode } from 'react';
import { Button } from '@ui/atoms/Button';
import ReviewCloseSearch from '@ui/atoms/SvgAtoms/ReviewCloseSearch';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  searchclassName?: string;
  children?: ReactNode;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery, searchclassName = '', children }) => {
  const handleClear = () => {
    setSearchQuery('');
  };

  return (
    <div className='my-4'>
      <div className={`2xs:w-[357px] flex items-center border-solid border-[rgba(17,17,17,0.6)] border-[1px] rounded p-2 focus-within:border-blue-600 focus-within:border-2 xl:!w-[546px]  h-[42px] text-sm ${searchclassName}`}>
        <Input
          type="text"
          value={searchQuery}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
          placeholder="Search topics and reviews"
          className="focus:outline-none w-full"
        />
        {searchQuery ? (
          <Button onClick={handleClear} className="ml-2">
            <ReviewCloseSearch></ReviewCloseSearch>
          </Button >
        ) : (
          children // Render the magnifying glass SVG icon
        )}
      </div>
    </div>
  );
};

export default SearchBar;
