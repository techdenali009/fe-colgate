import AccordionItem from '@ui/molecules/AccordianItem';
import { Checkbox } from '@ui/molecules/CheckBox/Checkbox';
import { useState } from 'react';
import filterData from '@utils/FilterData';

const Sidebar = () => {
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [selectedProductCategory, setSelectedProductCategory] = useState<string | null>(null);
  const [checkedFilters, setCheckedFilters] = useState<{ [key: string]: boolean }>({});

  const toggleShowCategories = () => {
    setShowAllCategories(!showAllCategories);
  };

  const handleProductCategoryClick = (category: string) => {
    setSelectedProductCategory(category === selectedProductCategory ? null : category);
  };

  const handleCheckboxChange = (option: string) => {
    setCheckedFilters((prev) => ({
      ...prev,
      [option]: !prev[option],
    }));
  };

  return (
    <div className="w-full max-w-xs p-4 space-y-6 bg-white shadow-md rounded-lg hidden lg:block">
      {/* Product Category Accordion */}
      <AccordionItem title="Product Category" titleClassName="text-tertiary-400 font-bold lg:text-xl text-xl text-gray-700 tracking-normal leading-7" contentClassName="bg-white" containerClassName="border-b">
        <ul className="space-y-1">
          {(showAllCategories ? filterData.productCategory : filterData.productCategory.slice(0, 5)).map(
            (category, index) => (
              <li
                key={index}
                className={`${
                  selectedProductCategory === category
                    ? 'text-black py-2 focus-visible:px-3 p-4 font-bold '
                    : 'text-gray-700 py-2 hover:text-blue-800 p-4 hover:font-bold'
                }  cursor-pointer`}
                onClick={() => handleProductCategoryClick(category)}
              >
                {category}
              </li>
            )
          )}
        </ul> 
        <button onClick={toggleShowCategories} className="text-blue-800 mt-2 p-4">
          {showAllCategories ? 'Show Less Categories' : 'Show All Categories'}
        </button>
      </AccordionItem>

      {/* Best Seller Accordion */}
      <AccordionItem title="Best Seller" titleClassName="text-tertiary-400 font-bold lg:text-xl text-xl text-gray-700 tracking-normal leading-7"  contentClassName="bg-white" containerClassName="border-b">
        <ul className="space-y-1">
          {filterData.bestSeller.map((option, index) => (
            <li
              key={index}
              className={`${
                checkedFilters[option] ? 'text-black font-bold pl-2 pb-1 mr-2' : 'text-gray-700 pl-2 pb-1 mr-2 hover:font-bold hover:text-blue-800'
              } cursor-pointer`}
            >
              <Checkbox className='mr-2'
                checked={checkedFilters[option] || false}
                onChange={() => handleCheckboxChange(option)}
              >
                {option}
              </Checkbox>
            </li>
          ))}
        </ul>
      </AccordionItem>

      {/* Product Types Accordion */}
      <AccordionItem title="Product Types" titleClassName="text-tertiary-400 font-bold lg:text-xl text-xl text-gray-700 tracking-normal leading-7"  contentClassName="bg-white" containerClassName="border-b">
        <ul className="space-y-1">
          {filterData.productTypes.map((option, index) => (
            <li
              key={index}
              className={`${
                checkedFilters[option] ? 'text-black font-bold pl-2 pb-1 mr-2' : 'text-gray-700 hover:font-bold pl-2 pb-1 mr-2 hover:text-blue-800'
              } cursor-pointer`}
            >
              <Checkbox className='mr-2'
                checked={checkedFilters[option] || false}
                onChange={() => handleCheckboxChange(option)}
              >
                {option}
              </Checkbox>
            </li>
          ))}
        </ul>
      </AccordionItem>

      {/* Skin Concern Accordion */}
      <AccordionItem title="Skin Concern" titleClassName="text-tertiary-400 font-bold lg:text-xl text-xl text-gray-700 tracking-normal leading-7" contentClassName="bg-white" containerClassName="border-b">
        <ul className="space-y-1">
          {filterData.skinConcern.map((option, index) => (
            <li
              key={index}
              className={`${
                checkedFilters[option] ? 'text-black font-bold pl-2 pb-1 mr-2' : 'text-gray-700 pl-2 pb-1 mr-2 hover:font-bold hover:text-blue-800'
              } cursor-pointer`}
            >
              <Checkbox className='mr-2'
                checked={checkedFilters[option] || false}
                onChange={() => handleCheckboxChange(option)}
              >
                {option}
              </Checkbox>
            </li>
          ))}
        </ul>
      </AccordionItem>

      {/* Skin Type Accordion */}
      <AccordionItem title="Skin Type" titleClassName="text-tertiary-400 font-bold lg:text-xl text-xl text-gray-700 tracking-normal leading-7"  contentClassName="bg-white" containerClassName="border-b">
        <ul className="space-y-1">
          {filterData.skinType.map((option, index) => (
            <li
              key={index}
              className={`${
                checkedFilters[option] ? 'text-black font-bold pl-2 pb-1 mr-2' : 'text-gray-700 pl-2 pb-1 mr-2 hover:font-bold hover:text-blue-800'
              } cursor-pointer`}
            >
              <Checkbox className='mr-2'
                checked={checkedFilters[option] || false}
                onChange={() => handleCheckboxChange(option)}
              >
                {option}
              </Checkbox>
            </li>
          ))}
        </ul>
      </AccordionItem>
    </div>
  );
};

export default Sidebar;
