import React, { useEffect, useState } from 'react';
import { FilterContainer } from '../FilterContainer';
import ScrollBarReview from '../ScrollBarReview';
import SearchBar from '../SearchBar';
import { ageGroups, ratings } from '@utils/test';
import AgeRatingDropdowns from '../AgeAndRatingDropdown';
import { useReviewContext } from '../ReviewUseContext';
import SortByReview from '../SortbyReview';



const FilterReviews: React.FC = () => {
  const {
    selectedRatings,
    setSelectedRatings,
    selectedAgeGroups,
    setSelectedAgeGroups,
    selectedSortBy,
    setSelectedSortBy,
    searchQuery,        // Get search query from context
    setSearchQuery,     // Get search query setter from context
  } = useReviewContext(); // Access context values

  const [filters, setFilters] = useState<string[]>([]);

  useEffect(() => {
    const newFilters = [...selectedRatings, ...selectedAgeGroups];
    setFilters(newFilters);
  }, [selectedRatings, selectedAgeGroups]);

  const clearFilters = () => {
    setSelectedRatings([]); // Clear selected ratings
    setSelectedAgeGroups([]); // Clear selected age groups
    setSearchQuery(''); // Clear search query
  };

  const removeFilter = (filter: string) => {
    if (ratings.includes(filter)) {
      setSelectedRatings(selectedRatings.filter((rating) => rating !== filter));
    } else if (ageGroups.includes(filter)) {
      setSelectedAgeGroups(selectedAgeGroups.filter((ageGroup) => ageGroup !== filter));
    }
  };

  return (
    <div className="mx-2.5">
      <h3 className="p-2.5 font-SansSerif text-[16px] pt-[30px]">Filter Reviews</h3>
      {/* Pass searchQuery and setSearchQuery from context */}
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} className='h-12'>
        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="rgb(68, 137, 205)" aria-hidden="true">
          <path d="M21.172 24l-7.387-7.387A8.945 8.945 0 019 18c-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9a8.951 8.951 0 01-1.387 4.785L24 21.172 21.172 24zM9 16c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z" />
        </svg>
      </SearchBar>

      <div>
        <AgeRatingDropdowns
          selectedRatings={selectedRatings}
          setSelectedRatings={setSelectedRatings} 
          selectedAgeGroups={selectedAgeGroups}
          setSelectedAgeGroups={setSelectedAgeGroups}
        />
        <FilterContainer filters={filters} onRemoveFilter={removeFilter} onClearAll={clearFilters} />
      </div>

      <div className='flex mb-3'>
        <ScrollBarReview className='mr-auto' totalReviews={19} showArrows={false} />
        <SortByReview selectedSortBy={selectedSortBy} setSelectedSortBy={setSelectedSortBy} />
      </div>
    </div>
  );
};

export default FilterReviews;
