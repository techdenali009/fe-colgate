import React, { useEffect, useState } from 'react';
import { FilterContainer } from '../FilterContainer';
import ScrollBarReview from '../ScrollBarReview';
import SearchBar from '../SearchBar';
import { ageGroups, ratings } from '@utils/test';
import AgeRatingDropdowns from '../AgeAndRatingDropdown';
import { useReviewContext } from '../ReviewUseContext';
import SortByReview from '../SortbyReview';
import ReviewSearchIcon from '@ui/atoms/SvgAtoms/ReviewSearchIcon';
import { reviewsPerPage } from '@utils/constants';

interface FilterReviewsProps {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  productReviews: Array<any>; // Accept product reviews as prop
}

const FilterReviews: React.FC<FilterReviewsProps> = ({ productReviews }) => {
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
  
  const [currentPage, setCurrentPage] = useState(0);
  const startIndex = currentPage * reviewsPerPage;
  const endIndex = startIndex + reviewsPerPage;

  const handleNextPage = () => {
    if (endIndex < productReviews.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="mx-2.5  ">
      <h3 className="p-2.5 font-SansSerif text-[16px] pt-[30px] ">Filter Reviews</h3>

      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} searchclassName='h-12'>

        <ReviewSearchIcon></ReviewSearchIcon>
      </SearchBar>

      <div>
        <AgeRatingDropdowns
          selectedRatings={selectedRatings}
          setSelectedRatings={setSelectedRatings}
          selectedAgeGroups={selectedAgeGroups}
          setSelectedAgeGroups={setSelectedAgeGroups}
        />
        <FilterContainer filters={filters} onRemoveFilter={removeFilter} showStarText={false} onClearAll={clearFilters} className='' />
      </div>

      <div className="flex flex-row lg:flex-row-reverse lg:justify-between mr-6 md:!mr-0 md:!flex-row-reverse md:!justify-between 2xs:flex-col">
        <SortByReview selectedSortBy={selectedSortBy} setSelectedSortBy={setSelectedSortBy} />
        <ScrollBarReview className="mr-auto self-center" totalReviews={productReviews.length} showArrows={false} extraClassName='hidden' visibleRangeclassName='mt-[10px]'
          onNext={handleNextPage}
          onPrev={handlePrevPage}
          currentPage={currentPage}
          reviewsPerPage={reviewsPerPage} />
      </div>

    </div>
  );
};

export default FilterReviews;
