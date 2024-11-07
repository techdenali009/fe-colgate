import React from 'react';
import AccordionItem from '../AccordianItem';

interface LabelAccordionProps {
  title: string;
  selectedItem: string | null;
  onItemClick: (item: string) => void;
  ulClassName?: string;
  liClassName?: string;
  children?: React.ReactNode; // Accept children
  items: {
    title: string;
    count?: number;
  }[];
}

const LabelAccordion: React.FC<LabelAccordionProps> = ({
  title,
  selectedItem,
  onItemClick,
  ulClassName,
  liClassName,
  children, // Include children here
  items,
}) => (
  <AccordionItem
    title={title}
    titleClassName=" font-bold lg:text-xl text-xl  !text-gray tracking-normal leading-7"
    contentClassName="bg-white text-left tm:pr-4 tm:pl-4 "
    containerClassName="border-b pt-3 pb-3"
    className='font-HeroNewBold text-gray-700  lg:pr-0 lg:pl-0'
    svgIconColor='blue'
  >
    <ul className={`space-y-1  ${ulClassName}`}>
      {items.map((item, index) => (
        <li
          key={index}
          className={`${selectedItem === item.title // Use item.title
            ? 'text-black-700 py-2 focus-visible:px-3 font-HeroNewBold'
            : '!text-black-700 py-2 hover:text--appTheme  hover:font-HeroNewBold'
          } cursor-pointer ${liClassName}`}
          onClick={() => onItemClick(item.title)} // Pass item.title
        >
          {item.title} {/* Display item.title */}
        </li>
      ))}
    </ul>
    {children} {/* Render the children here */}
  </AccordionItem>
);

export default LabelAccordion;
