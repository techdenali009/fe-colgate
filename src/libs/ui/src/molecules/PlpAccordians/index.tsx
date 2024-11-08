import React, { useState, useEffect } from 'react';
import LabelAccordion from '../PlpLabelAccordian';
import CheckboxAccordion from '../PlpCheckBoxAccordian';
import RadioAccordion from '../PlpRadioAccordian';
import Modal from '../PlpSortModal';
import { plpFilters, AccordionType } from '@utils/plpFilterData';

interface FilterData {
  productCategory: string[];
  bestSeller: string[];
  productTypes: string[];
  skinConcern: string[];
  skinType: string[];
}

interface SidebarProps {
  filterData: FilterData;
  className?: string;
  ulClassName?: string;
  liClassName?: string;
  onBestSellerChange: (checked: boolean) => void;
  onCategorySelect: (category: string | null) => void;
  onSortChange: (sortOption: string) => void;
  enableBestSeller: boolean;
}

const PlpAccordians: React.FC<SidebarProps> = ({
  className,
  ulClassName,
  liClassName,
  onBestSellerChange,
  onCategorySelect,
  onSortChange,
  enableBestSeller,
}) => {
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [selectedProductCategory, setSelectedProductCategory] = useState<string | null>(null);
  const [checkedFilters, setCheckedFilters] = useState<{ [key: string]: boolean }>({});
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);
  const [selectedSort, setSelectedSort] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);



  const handleSortChange = (sortOption: string) => {
    setSelectedSort(sortOption);
    onSortChange(sortOption);
  };

  const handleCheckboxChange = (option: string) => {
    setCheckedFilters((prev) => ({
      ...prev,
      [option]: !prev[option],
    }));

    if (option === 'Best Seller') {
      onBestSellerChange(!checkedFilters[option]);
    }
  };

  const handleProductCategoryClick = (category: string) => {
    const isSelected = category === selectedProductCategory;
    setSelectedProductCategory(isSelected ? null : category);
    onCategorySelect(isSelected ? null : category);
  };

  const toggleShowCategories = () => {
    setShowAllCategories(!showAllCategories);
  };

  // Filter to show "Best Seller" only when `enableBestSeller` is true
  const displayFilters = enableBestSeller
    ? plpFilters
    : plpFilters.filter((filter) => filter.title !== 'Best Seller');

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1020);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className={`w-full ${isSmallScreen ? 'space-y-1' : 'w-[380px] pl-2 space-y-6'} text-center  rounded-lg ${className}`}>
      {isSmallScreen && (
        <button
          onClick={() => setIsModalOpen(true)}
          className="text-blue-600 font-bold"
        >
          Show Filters & Sort
        </button>
      )}

      {isSmallScreen ? (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Filter & Sort">
          {displayFilters.map((filter, index) => (
            <div key={index}>
              {filter.AccordionType === AccordionType.Radio && (
                <RadioAccordion
                  title={filter.title}
                  options={filter.options.map(option => option.title)}
                  selectedOption={selectedSort}
                  onOptionChange={handleSortChange}
                  ulClassName={ulClassName}
                  liClassName={liClassName}
                  className=''
                />
              )}
              {filter.AccordionType === AccordionType.Label && (
                <LabelAccordion
                  title={filter.title}
                  selectedItem={selectedProductCategory}
                  onItemClick={handleProductCategoryClick}
                  ulClassName={ulClassName}
                  liClassName={liClassName}
                  items={showAllCategories ? filter.options : filter.options.slice(0, 5)}
                >
                  <button onClick={toggleShowCategories} className="text-blue-600 mt-2">
                    {showAllCategories ? 'Show Less Categories' : 'Show All Categories'}
                  </button>
                </LabelAccordion>
              )}

              {filter.AccordionType === AccordionType.Checkbox && (
                <CheckboxAccordion
                  title={filter.title}
                  options={filter.options.map(option => option.title)}
                  checkedFilters={checkedFilters}
                  onCheckboxChange={handleCheckboxChange}
                  ulClassName={ulClassName}
                  liClassName={liClassName}
                />
              )}
            </div>
          ))}
        </Modal>
      ) : (
        <div>
          {displayFilters.map((filter, index) => (
            <div key={index}>
              {filter.AccordionType === AccordionType.Label && (
                <LabelAccordion
                  title={filter.title}
                  selectedItem={selectedProductCategory}
                  onItemClick={handleProductCategoryClick}
                  ulClassName={ulClassName}
                  liClassName={liClassName}
                  items={showAllCategories ? filter.options : filter.options.slice(0, 5)}
                >
                  <button onClick={toggleShowCategories} className="text-blue-600 mt-2">
                    {showAllCategories ? 'Show Less Categories' : 'Show All Categories'}
                  </button>
                </LabelAccordion>
              )}

              {filter.AccordionType === AccordionType.Checkbox && (
                <CheckboxAccordion
                  title={filter.title}
                  options={filter.options.map(option => option.title)}
                  checkedFilters={checkedFilters}
                  onCheckboxChange={handleCheckboxChange}
                  ulClassName={ulClassName}
                  liClassName={liClassName}
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PlpAccordians;
