import React from 'react';

interface CategoryListProps {
    categories: string[];
    selectedCategory: string | null; 
    onCategorySelect: (category: string) => void;
    className?: string;
    liClassName?: string; 
    buttonClassName?: string; 
    selectedClassName?: string;   
    children?: React.ReactNode;
}

const CategoryList: React.FC<CategoryListProps> = ({
  categories,
  selectedCategory,
  onCategorySelect,
  className,
  liClassName,
  buttonClassName,
  selectedClassName,
  children,
}) => {
  return (
    <div className={className}>
      <ul className="pb-6 pl-0">
        {categories.map((category, index) => {
          const isSelected = selectedCategory === category;
          return (
            <li
              key={index}
              className={`border-b-[0.063rem] list-none lg:border-b-0 lg:px-0 ${liClassName} ${
                isSelected ? `border-l-4 border-appTheme text-appTheme ${selectedClassName}` : 'border-l-2 border-gray-300'
              }`}
            >
              <button
                type="button"
                className={`py-2 lg:px-4 font-thin cursor-pointer text-sm hover:text-appTheme hover:text-base hover:font-black focus-visible:px-3 ${buttonClassName}`}
                aria-label={category}
                onClick={() => onCategorySelect(category)}
              >
                {category}
              </button>
            </li>
          );
        })}
      </ul>
      {children && <div>{children}</div>}
    </div>
  );
};

export default CategoryList;
