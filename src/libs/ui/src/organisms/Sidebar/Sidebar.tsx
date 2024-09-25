import AccordionItem from '@ui/molecules/AccordianItem';
import React, { useState } from 'react';

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

  return (
    <div className="w-full max-w-xs p-4 space-y-6 bg-white shadow-md rounded-lg">
      {/* Product Category Accordion */}
      <AccordionItem title="Product Category" containerClassName="border-b">
        <ul className="space-y-1">
          {(showAllCategories ? filterData.productCategory : filterData.productCategory.slice(0, 5)).map(
            (category, index) => (
              <li key={index} className="text-gray-700">
                {category}
              </li>
            )
          )}
        </ul>
        {!showAllCategories && (
          <button
            onClick={() => setShowAllCategories(true)}
            className="text-blue-500 mt-2"
          >
            Show All Categories
          </button>
        )}
      </AccordionItem>

      {/* Best Seller Accordion */}
      <AccordionItem title="Best Seller" containerClassName="border-b">
        <ul className="space-y-1">
          {filterData.bestSeller.map((option, index) => (
            <li key={index} className="text-gray-700">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox" />
                <span>{option}</span>
              </label>
            </li>
          ))}
        </ul>
      </AccordionItem>

      {/* Product Types Accordion */}
      <AccordionItem title="Product Types" containerClassName="border-b">
        <ul className="space-y-1">
          {filterData.productTypes.map((option, index) => (
            <li key={index} className="text-gray-700">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox" />
                <span>{option}</span>
              </label>
            </li>
          ))}
        </ul>
      </AccordionItem>

      {/* Skin Concern Accordion */}
      <AccordionItem title="Skin Concern" containerClassName="border-b">
        <ul className="space-y-1">
          {filterData.skinConcern.map((option, index) => (
            <li key={index} className="text-gray-700">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox" />
                <span>{option}</span>
              </label>
            </li>
          ))}
        </ul>
      </AccordionItem>

      {/* Skin Type Accordion */}
      <AccordionItem title="Skin Type" containerClassName="border-b">
        <ul className="space-y-1">
          {filterData.skinType.map((option, index) => (
            <li key={index} className="text-gray-700">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox" />
                <span>{option}</span>
              </label>
            </li>
          ))}
        </ul>
      </AccordionItem>
    </div>
  );
};

export default Sidebar;
