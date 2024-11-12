import React from 'react';
import AccordionItem from '../AccordianItem';

interface RadioAccordionProps {
  title: string;
  options: string[];
  selectedOption: string;
  onOptionChange: (option: string) => void;
  ulClassName?: string;
  liClassName?: string;
  className?:string;

}

const RadioAccordion: React.FC<RadioAccordionProps> = ({
  title,
  options,
  selectedOption,
  onOptionChange,
  ulClassName,
  liClassName,
  className
}) => (
  <AccordionItem
    title={title}
    titleClassName={`text-tertiary-400 font-bold lg:text-xl text-xl text-gray-700 tracking-normal lg:pr-0 lg:pl-0 leading-7 dark:text-appTextColor ${className}`}
    contentClassName="text-left"
    containerClassName={`border-b ${className}`}
    svgIconColor='blue'
  >
    <ul className={`space-y-1 ${ulClassName}`}>
      {options.map((option, index) => (
        <li
          key={index}
          className={`${selectedOption === option ? 'text-appTextColor font-bold pl-2 pb-1 mr-2 ' : 'text-gray-700 pl-2 pb-1 mr-2 hover:font-bold hover:text-blue-600 dark:text-appWhiteTheme-opacity-50'
          } cursor-pointer ${liClassName}`}
        >
          <input
            type="radio"
            name="sort"
            value={option}
            checked={selectedOption === option}
            onChange={() => onOptionChange(option)}
            className="mr-2"
          />
          {option}
        </li>
      ))}
    </ul>
  </AccordionItem>
);

export default RadioAccordion;