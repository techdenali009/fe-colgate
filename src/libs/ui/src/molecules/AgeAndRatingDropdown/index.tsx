import React, { useState } from 'react';
import ReviewDropdown from '../ReviewDropdown';
import { ageGroups, ratings } from '@utils/test';
import { useReviewContext } from '../ReviewUseContext'; // Adjust path as needed

interface RatingAgeDropdownsProps {
  selectedRatings: string[];
  setSelectedRatings: (ratings: string[]) => void;
  selectedAgeGroups: string[];
  setSelectedAgeGroups: (ageGroups: string[]) => void;
}

const AgeRatingDropdowns: React.FC<RatingAgeDropdownsProps> = ({
  selectedRatings,
  setSelectedRatings,
  selectedAgeGroups,
  setSelectedAgeGroups,
}) => {
  const { updateBarRatingFilter, setSelectedAgeGroups: setAgeGroups } = useReviewContext(); // Get context functions
  const [isRatingOpen, setIsRatingOpen] = useState(false);
  const [isAgeOpen, setIsAgeOpen] = useState(false);

  // Handle item selection for ratings
  const handleRatingSelected = (rating: string) => {
    if (selectedRatings.includes(rating)) {
      setSelectedRatings(selectedRatings.filter(r => r !== rating));
    } else {
      const updatedRatings = [...selectedRatings, rating];
      setSelectedRatings(updatedRatings);
      updateBarRatingFilter(rating); // Update filter in context
    }
  };

  // Handle item selection for age groups
  const handleAgeGroupSelected = (ageGroup: string) => {
    if (selectedAgeGroups.includes(ageGroup)) {
      const updatedAgeGroups = selectedAgeGroups.filter(group => group !== ageGroup);
      setSelectedAgeGroups(updatedAgeGroups);
      setAgeGroups(updatedAgeGroups); // Update context
    } else {
      const updatedAgeGroups = [...selectedAgeGroups, ageGroup];
      setSelectedAgeGroups(updatedAgeGroups);
      setAgeGroups(updatedAgeGroups); // Update context
    }
  };

  return (
    <div className="flex flex-col md:flex-row md:space-x-4 md:mb-4 lg:flex-row  space-x-4 font-SansSerif mb-4 md:gap-[10px] ">
      {/* Rating Dropdown */}
      <ReviewDropdown
        label="Rating"
        items={ratings as string[]}
        selectedItems={selectedRatings}
        onItemClick={handleRatingSelected}
        isOpen={isRatingOpen}
        setIsOpen={setIsRatingOpen}
        isRatingDropdown={true} // Pass true for rating dropdown
        className='py-2 w-[357px] lg:w-[145px] md:!w-[145px]'
        selectdropclassName='w-[357px] lg:w-[149px] md:!w-[145px] '

        FaCheckCircleclassName='hidden lg:block'
        IoMdAddCircleOutlineclassName='hidden lg:block'
        isOpenArrowclassName='hidden lg:block'
        sortdropclassName='hidden'

      />
      {/* Age Group Dropdown */}
      <ReviewDropdown
        label="Age"
        items={ageGroups as string[]}
        selectedItems={selectedAgeGroups}
        onItemClick={handleAgeGroupSelected}
        isOpen={isAgeOpen}
        setIsOpen={setIsAgeOpen}
        className='py-2 w-[357px] !ml-0 lg:w-[145px] lg:!ml-2 md:!w-[145px]'
        isRatingDropdown={true}
        selectdropclassName='w-[357px] lg:w-[149px] md:!w-[145px] lg:!ml-[10px]'
        FaCheckCircleclassName='hidden lg:!block'
        IoMdAddCircleOutlineclassName='hidden lg:block'
        isOpenArrowclassName='hidden lg:block'
        sortdropclassName='hidden'

      />
    </div>
  );
};

export default AgeRatingDropdowns;
