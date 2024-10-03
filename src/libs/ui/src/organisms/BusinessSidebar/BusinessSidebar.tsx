import React from 'react';

interface CategoryListProps {
    categories : string[];
    children?: React.ReactNode;
    buttonClassName?: string;
}

const CategoryList : React.FC < CategoryListProps > = ({categories, children}) => {
    return (
        <div>
            <ul className="pb-6 pl-">
                {categories.map((category, index) => (
                    <li
                        key={index}
                        className="border-b-[0.063rem] list-none lg:border-b-0 lg:px-0 lg:border-l-2">
                        <button
                            type="button"
                            className={`py-2 lg:px-4 font-thin cursor-pointer text-sm hover:text-blue-700 hover:text-base hover:font-black focus-visible:px-3`}
                            aria-label={category}
                            aria-labelledby="">
                            {category}
                        </button>
                    </li>
                ))}
            </ul>
            {children && <div>{children}</div>}
        </div>
    );
};

export default CategoryList;
