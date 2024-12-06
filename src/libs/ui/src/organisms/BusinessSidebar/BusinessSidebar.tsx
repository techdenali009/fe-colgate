interface CategoryListProps {
  categories: { title: string; icon?: string }[]; // Icon is now optional
  selectedCategory: string | null;
  onCategorySelect: (category: string) => void;
  onCategoryActive: (category: string) => void;
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
  onCategoryActive,
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
          const isSelected = selectedCategory === category.title;
          return (
            <li
              key={index}
              className={`border-b-[0.063rem] list-none lg:border-b-0 lg:px-0 ${liClassName} ${isSelected ? `border-l-4 border-appTheme text-appTheme ${selectedClassName}` : 'border-l-2 border-gray-300'
              }`}
            >
              <button
                type="button"
                className={`py-2 lg:px-4 font-thin cursor-pointer text-sm hover:text-appTheme hover:text-base hover:font-black focus-visible:px-3 ${buttonClassName}`}
                aria-label={category.title}
                onClick={() => {
                  onCategorySelect(category.title);
                  onCategoryActive(category.title);
                }}
              >
                <div className="flex items-center">
                  {category.icon && (
                    <img
                      src={category.icon}
                      alt={category.title}
                      className="mr-2 inline-block"
                    />
                  )}
                  <span className="font-HeroNewRegular text-xs leading-7 font-normal">
                    {category.title}
                  </span>
                </div>
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
