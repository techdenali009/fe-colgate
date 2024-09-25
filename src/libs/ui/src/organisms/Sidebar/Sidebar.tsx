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

const FilterDropdown = () => {
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<null | string>(null);

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <div className="space-y-6">
      {/* Product Category Dropdown */}
      <div>
        <button
          onClick={() => toggleDropdown('productCategory')}
          className="w-full flex justify-between items-center py-2 border-b text-gray-700 font-semibold"
        >
          Product Category
          <span className="text-blue-500">{openDropdown === 'productCategory' ? '▲' : '▼'}</span>
        </button>
        {openDropdown === 'productCategory' && (
          <div className="mt-2">
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
          </div>
        )}
      </div>

      {/* Other Categories (Best Seller, Product Types, etc.) */}
      {Object.keys(filterData).map(
        (key, index) =>
          key !== 'productCategory' && (
            <div key={index}>
              <button
                onClick={() => toggleDropdown(key)}
                className="w-full flex justify-between items-center py-2 border-b text-gray-700 font-semibold"
              >
                {key
                  .replace(/([A-Z])/g, ' $1')
                  .replace(/^./, (str) => str.toUpperCase())}
                <span className="text-blue-500">{openDropdown === key ? '▲' : '▼'}</span>
              </button>
              {openDropdown === key && (
                <div className="mt-2">
                  <ul className="space-y-1">
                    {filterData[key as keyof typeof filterData].map((option, idx) => (
                      <li key={idx} className="text-gray-700">
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" className="form-checkbox" />
                          <span>{option}</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )
      )}
    </div>
  );
};

export default FilterDropdown;
