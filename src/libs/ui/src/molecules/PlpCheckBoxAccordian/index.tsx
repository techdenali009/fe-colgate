import React from 'react';
import { Checkbox } from '../CheckBox/Checkbox';
import AccordionItem from '../AccordianItem';

interface CheckboxAccordionProps {
  title: string;
  options: string[];
  checkedFilters: { [key: string]: boolean };
  onCheckboxChange: (option: string) => void;
  ulClassName?: string;
  liClassName?: string;
  counts: { [key: string]: number };
  activecheckcategory: string | null; // New prop for active category
  onChange?: () => void;
  
}

const CheckboxAccordion: React.FC<CheckboxAccordionProps> = ({
  title,
  options,
  checkedFilters,
  onCheckboxChange,
  ulClassName,
  liClassName,
  counts,
  activecheckcategory,
}) => (
  <AccordionItem
    title={title}
    titleClassName="text-tertiary-400 font-bold lg:text-xl text-xl text-gray-700 tracking-normal leading-7 dark:text-appTextColor"
    contentClassName=" text-left"
    containerClassName="border-b pt-3 pb-3"
    className='font-HeroNewBold font-bold lg:pr-0 lg:pl-0'
    svgIconColor='rgb(var(--primary-color))'
  >
    <ul className={`space-y-1 ${ulClassName}`}>
      {options.map((option, index) => (
        <li
          key={index}
          className={`${checkedFilters[option] || activecheckcategory === option ? 'text-black font-bold pl-2 pb-1 mr-2' : 'text-gray-700 pl-2 pb-1 mr-2 hover:font-bold hover:text-appTheme'
          } cursor-pointer ${liClassName}`}
        >
          <Checkbox
            className="mr-2"
            checked={checkedFilters[option] || activecheckcategory === option} // Check if the option matches active category
            onChange={() => onCheckboxChange(option)}
          >
            {option} {counts[option] !== undefined && ` (${counts[option]})`}
          </Checkbox>
        </li>
      ))}
    </ul>
  </AccordionItem>
);

export default CheckboxAccordion;
