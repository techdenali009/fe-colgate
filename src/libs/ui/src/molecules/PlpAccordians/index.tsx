import React, { useState, useEffect } from 'react';
import LabelAccordion from '../PlpLabelAccordian';
import CheckboxAccordion from '../PlpCheckBoxAccordian';
import RadioAccordion from '../PlpRadioAccordian';
import Modal from '../PlpSortModal';
import { plpFilters, AccordionType } from '@utils/plpFilterData';
import { viewAllProducts } from '@utils/test';
import { useLocation } from 'react-router-dom';

interface SidebarProps {
  currentProductCategory: string;
  className?: string;
  ulClassName?: string;
  liClassName?: string;
  onBestSellerChange: (checked: boolean) => void;
  onCategorySelect: (category: string | null) => void;
  onSortChange: (sortOption: string) => void;
  enableBestSeller: boolean;
  onproduct: string;
  filters: string[];
  onFilterChange: (filters: string[]) => void;
}

const PlpAccordians: React.FC<SidebarProps> = ({
  className,
  ulClassName,
  liClassName,
  onCategorySelect,
  onSortChange,
  enableBestSeller,
  currentProductCategory,
  filters,
  onFilterChange,
}) => {
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [selectedProductCategory, setSelectedProductCategory] = useState<string | null>(null);
  const [checkedFilters, setCheckedFilters] = useState<{ [key: string]: boolean }>({});
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);
  const [selectedSort, setSelectedSort] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
 
  const [, setProducts] = useState<string[]>([]);

  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const categoryFromUrl = urlParams.get('skin-type');
  const skinConcernFromUrl = urlParams.get('skin-concern');

  const activecheckcategory = categoryFromUrl || skinConcernFromUrl || selectedProductCategory;

  const calculateCounts = () => {
    const counts: { [key: string]: number } = {};
    viewAllProducts.forEach(product => {
      const category = product.category;
      counts[category] = (counts[category] || 0) + 1;
    });
    return counts;
  };

  const counts = calculateCounts();

  const handleSortChange = (sortOption: string) => {
    setSelectedSort(sortOption);
    onSortChange(sortOption);
  };

  const handleCheckboxChange = (option: string) => {
    setCheckedFilters((prev) => {
      const newCheckedFilters = {
        ...prev,
        [option]: !prev[option],
      };

      // Update filters array based on checked state
      const newFilters = Object.entries(newCheckedFilters)
        .filter(([, isChecked]) => isChecked)
        .map(([key]) => key);

      onFilterChange(newFilters);
      return newCheckedFilters;
    });

    setProducts((prevItems) => {
      if (prevItems.includes(option)) {
        return prevItems.filter(item => item !== option);
      } else {
        return [...prevItems, option];
      }
    });

    setSelectedProductCategory(null);
    onCategorySelect(option);
  };

  const handleProductCategoryClick = (category: string) => {
    const isSelected = category === selectedProductCategory;
    setSelectedProductCategory(isSelected ? null : category);
    onCategorySelect(isSelected ? null : category);
  };

  const toggleShowCategories = () => {
    setShowAllCategories(!showAllCategories);
  };

  // Sync checkedFilters with external filters prop
  useEffect(() => {
    const newCheckedFilters: { [key: string]: boolean } = {};
    filters.forEach(filter => {
      newCheckedFilters[filter] = true;
    });
    setCheckedFilters(newCheckedFilters);
  }, [filters]);

  useEffect(() => {
    if (currentProductCategory) {
      setSelectedProductCategory(currentProductCategory);
    }
  }, [currentProductCategory]);

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

  const combinedCategories = [
    ...plpFilters.find(filter => filter.mainCatagory === 'Daily care')?.options || [],
    ...plpFilters.find(filter => filter.mainCatagory === 'Professional treatments')?.options || []
  ];

  return (
    <div className={`w-full ${isSmallScreen ? 'space-y-1' : 'w-[380px] pl-2 space-y-6'} text-center bg-white rounded-lg ${className}`}>
      {isSmallScreen && (
        <button
          onClick={() => setIsModalOpen(true)}
          className="text-appTheme font-bold"
        >
          Show Filters & Sort
        </button>
      )}

      {isSmallScreen ? (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Filter & Sort">
          <div></div><p>products</p>
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
                  items={showAllCategories ? combinedCategories : combinedCategories.slice(0, 5)}
                  activeCategory={categoryFromUrl || selectedProductCategory}
                >
                  <button onClick={toggleShowCategories} className="text-appTheme mt-2">
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
                  counts={counts}
                  activecheckcategory={activecheckcategory}
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
                  items={showAllCategories ? combinedCategories : combinedCategories.slice(0, 5)}
                  activeCategory={categoryFromUrl || selectedProductCategory}
                >
                  <button onClick={toggleShowCategories} className="text-appTheme mt-2">
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
                  counts={counts}
                  activecheckcategory={activecheckcategory}
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