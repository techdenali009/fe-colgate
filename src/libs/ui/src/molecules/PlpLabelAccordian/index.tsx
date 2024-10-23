import React from 'react';
import AccordionItem from '../AccordianItem';

interface LabelAccordionProps {
  title: string;
  items: string[];
  selectedItem: string | null;
  onItemClick: (item: string) => void;
  ulClassName?: string;
  liClassName?: string;
  children?: React.ReactNode; // Added to accept children
}

const LabelAccordion: React.FC<LabelAccordionProps> = ({
  title,
  items,
  selectedItem,
  onItemClick,
  ulClassName,
  liClassName,
  children, // Include children here
}) => (
  <AccordionItem
    title={title}
    titleClassName="text-tertiary-400 font-bold lg:text-xl text-xl text-gray-700 tracking-normal leading-7"
    contentClassName="bg-white text-left"
    containerClassName="border-b pt-3 pb-3"
    className='font-HeroNewBold font-bold lg:pr-0 lg:pl-0'
    svgIconColor='blue'
  >
    <ul className={`space-y-1 ${ulClassName}`}>
      {items.map((item, index) => (
        <li
          key={index}
          className={`${selectedItem === item
            ? 'text-black py-2 focus-visible:px-3 font-bold '
            : 'text-gray-700 py-2 hover:text-blue-600  hover:font-bold'
          } cursor-pointer ${liClassName}`}
          onClick={() => onItemClick(item)}
        >
          {item}
        </li>
      ))}
    </ul>
    {children} {/* Render the children here */}
  </AccordionItem>
);

export default LabelAccordion;