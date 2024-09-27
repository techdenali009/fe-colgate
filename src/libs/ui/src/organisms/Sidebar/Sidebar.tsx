import AccordionItem from '@ui/molecules/AccordianItem';
import { Checkbox } from '@ui/molecules/CheckBox/Checkbox';
import { useState } from 'react';


const filterData = {
  productCategory: [
    'All Products',
    'Antioxidants',
    'Broad Spectrum SPF',
    'Cleansers & Toners',
    'Eye, Neck, Lip',
    'Masks',
    'Moisturizers',
    'Retinols',
    'Serums',
    'Solution Sets',
    'Peels',
    'Peel Alternative',
    'Retinoid Treatments',
    'Therapeutic Masks',
    'Treatment Enhancements',
    'Backbar Sizes',
    'Backbar Tools',
    'Body Treatments',
    'Exfoliants',
  ],
  bestSeller: ['Best Seller'],
  productTypes: ['Backbar', 'Retail', 'Sample'],
  skinConcern: ['Brightening', 'Acne', 'Aging', 'Discolorations', 'Preventative', 'Sensitive Skin'],
  skinType: ['Combination', 'Dry', 'Normal', 'Oily', 'Sensitive'],
};

const Sidebar = () => {
  const [showAllCategories, setShowAllCategories] = useState(false);

  const toggleShowCategories = () => {
    setShowAllCategories(!showAllCategories);
  };

  return (
    <div className="w-full max-w-xs p-4 space-y-6 bg-white shadow-md rounded-lg">
      {/* Product Category Accordion */}
      <AccordionItem title="Product Category" containerClassName="border-b bg-white">
        <ul className="space-y-1">
          {(showAllCategories ? filterData.productCategory : filterData.productCategory.slice(0, 5)).map(
            (category, index) => (
              <li key={index} className="text-gray-700 cursor-pointer">
                {category}
              </li>
            )
          )}
        </ul>
        <button
          onClick={toggleShowCategories}
          className="text-blue-500 mt-2"
        >
          {showAllCategories ? 'Show Less Categories' : 'Show All Categories'}
        </button>
      </AccordionItem>

      {/* Best Seller Accordion */}
      <AccordionItem title="Best Seller" containerClassName="border-b">
        <ul className="space-y-1">
          {filterData.bestSeller.map((option, index) => (
            <li key={index} className="text-gray-700">
              <Checkbox>{option}</Checkbox>
            </li>
          ))}
        </ul>
      </AccordionItem>

      {/* Product Types Accordion */}
      <AccordionItem title="Product Types" containerClassName="border-b">
        <ul className="space-y-1">
          {filterData.productTypes.map((option, index) => (
            <li key={index} className="text-gray-700">
              <Checkbox>{option}</Checkbox>
            </li>
          ))}
        </ul>
      </AccordionItem>

      {/* Skin Concern Accordion */}
      <AccordionItem title="Skin Concern" containerClassName="border-b">
        <ul className="space-y-1">
          {filterData.skinConcern.map((option, index) => (
            <li key={index} className="text-gray-700">
              <Checkbox>{option}</Checkbox>
            </li>
          ))}
        </ul>
      </AccordionItem>

      {/* Skin Type Accordion */}
      <AccordionItem title="Skin Type" containerClassName="border-b">
        <ul className="space-y-1">
          {filterData.skinType.map((option, index) => (
            <li key={index} className="text-gray-700">
              <Checkbox>{option}</Checkbox>
            </li>
          ))}
        </ul>
      </AccordionItem>
    </div>
  );
};

export default Sidebar;
