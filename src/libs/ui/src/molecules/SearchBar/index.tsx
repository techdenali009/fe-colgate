import React, {  useState } from 'react';
import { Input } from '@ui/atoms/Input';
import { Button } from '@ui/atoms/Button';
import ReviewCloseSearch from '@ui/atoms/SvgAtoms/ReviewCloseSearch';
import useDebounce from '../UseDebounce';
import ReviewSearchIcon from '@ui/atoms/SvgAtoms/ReviewSearchIcon';

interface SearchBarProps {
  InputclassName?: string;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  searchclassName?: string;

  placeholder?: string;

}

const SearchBar: React.FC<SearchBarProps> = ({
  InputclassName = '',
  searchQuery,
  setSearchQuery,
  searchclassName = '',

  placeholder = '',
}) => {
  const [localQuery, setLocalQuery] = useState<string>(searchQuery); 
  const debouncedQuery = useDebounce(localQuery, 2000); 


  React.useEffect(() => {
    setSearchQuery(debouncedQuery);
  }, [debouncedQuery, setSearchQuery]);

  const handleClear = () => {
    setLocalQuery('');
    setSearchQuery(''); 
  };

  return (
    <div>
      <div
        className={`my-4 2xs:w-[357px] flex items-center border-solid border-[rgba(17,17,17,0.6)] border-[1px] rounded p-2 focus-within:border-appTheme focus-within:border-2 xl:!w-[546px] h-[42px] text-sm ${searchclassName}`}
      >
        <Input
          type="text"
          value={localQuery}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLocalQuery(e.target.value)}
          placeholder={placeholder}
          className={`focus:outline-none w-full ${InputclassName}`}
        />
        {localQuery ? (
          <Button onClick={handleClear} className="ml-2">
            <ReviewCloseSearch size={12}/>
          </Button>
        ) : (
          <ReviewSearchIcon></ReviewSearchIcon>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
