import React, { useState, useEffect } from 'react';
import ReviewDropdown from '../ReviewDropdown';
import { sortByOptions } from '@utils/test'; // Import sorting options like ['Price', 'Newest', 'Highest Rating']
import { useReviewContext } from '../ReviewUseContext'; // Adjust path as needed

interface SortByDropdownsProps {
  selectedSortBy: string[];
  setSelectedSortBy: (sortBy: string[]) => void;
}

const SortByReview: React.FC<SortByDropdownsProps> = ({
  selectedSortBy,
  setSelectedSortBy,
}) => {
  const { updateSortByFilter } = useReviewContext(); // Assuming there's a sort filter function in context

  // Set default sorting option (e.g., 'Price')
  const defaultSortOption = sortByOptions[0];

  const [isSortOpen, setIsSortOpen] = useState(false);
  const [currentSortOption, setCurrentSortOption] = useState<string>(defaultSortOption); // Default option

  // Handle item selection for sorting options
  const handleSortBySelected = (sortBy: string) => {
    if (selectedSortBy.includes(sortBy)) {
      setSelectedSortBy(selectedSortBy.filter(s => s !== sortBy));
      setCurrentSortOption(''); // Reset current option if deselected
    } else {
      const updatedSortBy = [sortBy]; // Only allow one selection at a time
      setSelectedSortBy(updatedSortBy);
      setCurrentSortOption(sortBy);
      updateSortByFilter(sortBy); // Update filter in context
    }
  };

  // Set default sort option when the component first renders
  useEffect(() => {
    if (!selectedSortBy.length) {
      setSelectedSortBy([defaultSortOption]);
      setCurrentSortOption(defaultSortOption);
      updateSortByFilter(defaultSortOption); // Ensure the default option is applied in the context
    }
  }, [defaultSortOption, setSelectedSortBy, updateSortByFilter, selectedSortBy]);

  return (
    <div className="flex items-center space-x-4 relative left-[66%] ">
      {/* Sort By Dropdown */}
      <ReviewDropdown
      
        className="w-[280px] px-4 py-2.5"
        FaCheckCircleclassName="hidden"
        IoMdAddCircleOutlineclassName="hidden"
        labelclassName="text-[15px] !font-SansSerif"
        selectdropclassName="w-[280px] text-[16px] "
        label={`Sort by ${currentSortOption || ''}`} // Dynamically pass the label
        items={sortByOptions as string[]}
        selectedItems={selectedSortBy}
        onItemClick={handleSortBySelected}
        isOpen={isSortOpen}
        setIsOpen={setIsSortOpen}
      />
    </div>
  );
};

export default SortByReview;
