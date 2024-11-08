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
}

const CheckboxAccordion: React.FC<CheckboxAccordionProps> = ({
  title,
  options,
  checkedFilters,
  onCheckboxChange,
  ulClassName,
  liClassName,
}) => (
  <AccordionItem
    title={title}
    titleClassName="text-tertiary-400 font-bold lg:text-xl text-xl text-gray-700 tracking-normal leading-7 dark:text-appTextColor"
    contentClassName=" text-left"
    containerClassName="border-b pt-3 pb-3"
    className='font-HeroNewBold font-bold lg:pr-0 lg:pl-0'
    svgIconColor='blue'
  >
    <ul className={`space-y-1 ${ulClassName}`}>
      {options.map((option, index) => (
        <li
          key={index}
          className={`${checkedFilters[option] ? 'text-appTextColor font-bold pl-2 pb-1 mr-2' : 'text-gray-700 pl-2 pb-1 mr-2 hover:font-bold hover:text-blue-600 dark:text-appWhiteTheme-opacity-50'
          } cursor-pointer ${liClassName}`}
        >
          <Checkbox
            className="mr-2"
            checked={checkedFilters[option] || false}
            onChange={() => onCheckboxChange(option)}
          >
            {option}
          </Checkbox>
        </li>
      ))}
    </ul>
  </AccordionItem>
);

export default CheckboxAccordion;