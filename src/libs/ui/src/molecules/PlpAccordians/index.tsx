import React, { useState, useEffect } from 'react';
import LabelAccordion from '../PlpLabelAccordian';
import CheckboxAccordion from '../PlpCheckBoxAccordian';
import RadioAccordion from '../PlpRadioAccordian';
import Modal from '../PlpSortModal';

interface FilterData {
  productCategory: string[];
  bestSeller: string[];
  productTypes: string[];
  skinConcern: string[];
  skinType: string[];
}

interface SidebarProps {
  filterData: FilterData;
  className?: string; // Classname for outer div
  ulClassName?: string; // Classname for <ul>
  liClassName?: string; // Classname for <li>
  onBestSellerChange: (checked: boolean) => void; // New prop for best seller filter
  onCategorySelect: (category: string | null) => void; // Update type to allow null
  onSortChange: (sortOption: string) => void;
  enableBestSeller: boolean; // Prop for sort change
}

const PlpAccordians: React.FC<SidebarProps> = ({
  filterData,
  className,
  ulClassName,
  liClassName,
  onBestSellerChange,
  onCategorySelect,
  onSortChange,
  enableBestSeller
}) => {
  

  const [showAllCategories, setShowAllCategories] = useState(false);
  const [selectedProductCategory, setSelectedProductCategory] = useState<string | null>(null);
  const [checkedFilters, setCheckedFilters] = useState<{ [key: string]: boolean }>({});
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);
  const [selectedSort, setSelectedSort] = useState<string>(''); // State for sort option
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // State for modal visibility

  // Responsive check for small screens
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1020);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, []);

  // Toggle category visibility
  const toggleShowCategories = () => {
    setShowAllCategories(!showAllCategories);
  };

  // Handle product category click
  const handleProductCategoryClick = (category: string) => {
    console.log('category', category);
    const isSelected = category === selectedProductCategory;
    setSelectedProductCategory(isSelected ? null : category);
    onCategorySelect(isSelected ? null : category);
  };

  // Handle checkbox changes
  const handleCheckboxChange = (option: string) => {
    setCheckedFilters((prev) => ({
      ...prev,
      [option]: !prev[option],
    }));

    if (option === 'Best Seller') {
      onBestSellerChange(!checkedFilters[option]);
    }
  };

  // Handle sort option change
  const handleSortChange = (sortOption: string) => {
    setSelectedSort(sortOption);
    onSortChange(sortOption);
  };

  // Sort options
  const sortOptions = ['Price: Low to High', 'Price: High to Low', 'New Arrivals'];

  // Define checkbox accordions
  const checkboxAccordions = [
    { title: 'Product Types', options: filterData.productTypes },
    { title: 'Skin Concern', options: filterData.skinConcern },
    { title: 'Skin Type', options: filterData.skinType },
  ];

  return (
    <div className={`w-full ${isSmallScreen ? 'space-y-1' : 'w-[380px] pl-2 space-y-6'} bg-white rounded-lg text-center tm:border-2 tm-border-blue-500 height-[37px] tracking-[.3px] font-bold ${className}`}>
      {/* Filter & Sort Button (only for small screens) */}
      {isSmallScreen && (
        <button
          onClick={() => setIsModalOpen(true)} // Open modal on click
          className="text-blue-600 tm:leading-2 tex-left tm:p-0 p-4 font-HeroNewBold font-bold"
        >
          Show Filters & Sort
        </button>
      )}

      {/* Modal for Filter & Sort (only for small screens) */}
      {isSmallScreen ? (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)} // Close modal
          title="Filter & Sort"
        >
          {/* Product Category Accordion */}
          <LabelAccordion
            title="Product Category"
            items={showAllCategories ? filterData.productCategory : filterData.productCategory.slice(0, 5)}
            selectedItem={selectedProductCategory}
            onItemClick={handleProductCategoryClick}
            ulClassName={ulClassName}
            liClassName={liClassName}
          >
            <button onClick={toggleShowCategories} className="text-blue-600 mt-2">
              {showAllCategories ? 'Show Less Categories' : 'Show All Categories'}
            </button>
          </LabelAccordion>

          {/* Show Best Seller Accordion if enabled */}
          {enableBestSeller && (
            <CheckboxAccordion
              title="Best Seller"
              options={['Best Seller']} // Assuming this should show specific options related to Best Seller
              checkedFilters={checkedFilters}
              onCheckboxChange={handleCheckboxChange}
              ulClassName={ulClassName}
              liClassName={liClassName}
            />
          )}

          {/* Render Checkboxes using the checkboxAccordions array */}
          {checkboxAccordions.map((accordion, index) => (
            <CheckboxAccordion
              key={index}
              title={accordion.title}
              options={accordion.options}
              checkedFilters={checkedFilters}
              onCheckboxChange={handleCheckboxChange}
              ulClassName={ulClassName}
              liClassName={liClassName}
            />
          ))}

          {/* Sort Options */}
          <div className='tl:hidden'>
            <RadioAccordion
              title="Sort By"
              options={sortOptions}
              selectedOption={selectedSort}
              onOptionChange={handleSortChange}
              ulClassName={ulClassName}
              liClassName={liClassName}
            />
          </div>
        </Modal>
      ) : (
        <div>
          {/* Desktop View - Filter Options */}
          {/* Product Category Accordion */}
          <LabelAccordion
            title="Product Category"
            items={showAllCategories ? filterData.productCategory : filterData.productCategory.slice(0, 5)}
            selectedItem={selectedProductCategory}
            onItemClick={handleProductCategoryClick}
            ulClassName={ulClassName}
            liClassName={liClassName}
          >
            <button onClick={toggleShowCategories} className="text-blue-600 mt-2 ">
              {showAllCategories ? 'Show Less Categories' : 'Show All Categories'}
            </button>
          </LabelAccordion>

          {/* Show Best Seller Accordion if enabled */}
          {enableBestSeller && (
            <CheckboxAccordion
              title="Best Seller"
              options={['Best Seller']} // Assuming this should show specific options related to Best Seller
              checkedFilters={checkedFilters}
              onCheckboxChange={handleCheckboxChange}
              ulClassName={ulClassName}
              liClassName={liClassName}
            />
          )}

          {/* Render Checkboxes using the checkboxAccordions array */}
          {checkboxAccordions.map((accordion, index) => (
            <CheckboxAccordion
              key={index}
              title={accordion.title}
              options={accordion.options}
              checkedFilters={checkedFilters}
              onCheckboxChange={handleCheckboxChange}
              ulClassName={ulClassName}
              liClassName={liClassName}
            />
          ))}

          {/* Sort Options */}
          <div className='lg:hidden'>
            <RadioAccordion
              title="Sort By"
              options={sortOptions}
              selectedOption={selectedSort}
              onOptionChange={handleSortChange}
              ulClassName={ulClassName}
              liClassName={liClassName}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PlpAccordians;
