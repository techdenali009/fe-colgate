import React, { useState, useEffect } from 'react';
import RelevancyInfo from '../RelevancyInfoReviewsection'; // Import the new component
import { sortByOptions } from '@utils/constants';
import { useReviewContext } from '../ReviewUseContext';
import ReviewDropdown from '../ReviewDropdown';

interface SortByDropdownsProps {
  selectedSortBy: string[];
  setSelectedSortBy: (sortBy: string[]) => void;
}

const SortByReview: React.FC<SortByDropdownsProps> = ({
  selectedSortBy,
  setSelectedSortBy,
}) => {
  const { updateSortByFilter } = useReviewContext();
  const defaultSortOption = sortByOptions[4];

  const [isSortOpen, setIsSortOpen] = useState(false);
  const [currentSortOption, setCurrentSortOption] = useState<string>(defaultSortOption);

  const handleSortBySelected = (sortBy: string) => {
    const updatedSortBy = [sortBy];
    setSelectedSortBy(updatedSortBy);
    setCurrentSortOption(sortBy);
    updateSortByFilter(sortBy);
    setIsSortOpen(false);
  };

  useEffect(() => {
    if (!selectedSortBy.length) {
      setSelectedSortBy([defaultSortOption]);
      setCurrentSortOption(defaultSortOption);
      updateSortByFilter(defaultSortOption);
    }
  }, [defaultSortOption, setSelectedSortBy, updateSortByFilter, selectedSortBy]);

  return (
    <div className="relative lg:flex-col items-center space-x-4  md:-mr-[20px] ">
      
      {/* Tooltip Element */}
      {currentSortOption === 'Most Relevant' && <RelevancyInfo/>}

      {/* Dropdown Element */}
     
      <ReviewDropdown
        className="w-[357px] lg:px-4 py-2.5 lg:w-[280px] 2xs:!ml-0"
        FaCheckCircleclassName="hidden"
        sortdropclassName="!text-black !hover:text-white"
        IoMdAddCircleOutlineclassName="hidden"
        labelclassName="text-[15px] !font-SansSerif"
        selectdropclassName="w-[357px] lg:w-[280px] text-[16px]"
        label={`Sort by ${currentSortOption || ''}`}
        items={sortByOptions as string[]}
        selectedItems={selectedSortBy}
        onItemClick={handleSortBySelected}
        isOpen={isSortOpen}
        setIsOpen={setIsSortOpen}
        dropclassName='lg:py-[8px] lg:px-[30px]'
      />
    </div>
    
  );
};

export default SortByReview;
