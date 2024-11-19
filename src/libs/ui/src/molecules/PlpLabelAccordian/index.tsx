import React from 'react';
import AccordionItem from '../AccordianItem';
import { useLocation } from 'react-router-dom';

interface LabelAccordionProps {
  title: string;
  selectedItem: string | null;
  onItemClick: (item: string) => void;
  ulClassName?: string;
  liClassName?: string;
  children?: React.ReactNode;
  items: {
    title: string;
    count?: number;
  }[];
  activeCategory?: string | null; // Optional for fallback
}

const LabelAccordion: React.FC<LabelAccordionProps> = ({
  title,
  onItemClick,
  ulClassName,
  liClassName,
  children,
  items,
  activeCategory,
}) => {
  // Get the category from the URL (using window.location)
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const categoryFromUrl = urlParams.get('category');

  // Determine the active item based on URL or selectedItem
  const activeItem = activeCategory || categoryFromUrl;

  return (
    <AccordionItem
      title={title}
      titleClassName="text-tertiary-400 font-bold lg:text-xl text-xl text-gray-700 tracking-normal leading-7"
      contentClassName="bg-white text-left tm:pr-4 tm:pl-4"
      containerClassName="border-b pt-3 pb-3"
      className="font-HeroNewBold text-gray-700 lg:pr-0 lg:pl-0"
      svgIconColor="rgb(var(--primary-color))"
    >
      <ul className={`space-y-1 ${ulClassName || 'default-ul-class'}`}>
        {items.map((item) => (
          <li
            key={item.title}
            className={`${activeItem === item.title
              ? ' text-black-700 py-2 font-HeroNewBold' // Active styles
              : 'py-2 hover:text-appTheme hover:font-HeroNewBold'
            } cursor-pointer ${liClassName || 'default-li-class'}`}
            onClick={() => onItemClick(item.title)}
          >
            {item.title} <span className="hidden">{item.count !== undefined && `(${item.count})`}</span>
          </li>
        ))}
      </ul>
      {children} {/* Render the children here */}
    </AccordionItem>
  );
};

export default LabelAccordion;