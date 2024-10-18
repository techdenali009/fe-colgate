import React, { useState } from 'react';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  titleClassName?: string;
  containerClassName?: string;
  contentClassName?: string;
  className?: string;
  accordianStatus?: (title: string) => void;
  isActive?: boolean; // Accept isActive prop
}

const ProductAccordionItem: React.FC<AccordionItemProps> = ({
  title,
  children,
  titleClassName = 'text-lg font-semibold',
  containerClassName = 'border-b',
  contentClassName = 'p-4 bg-gray-100',
  className = '',
  accordianStatus,
  isActive = false // Default to false
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`mb-2 ml-[10px] mr-[10px] ${containerClassName}`}>
      <div 
        className={`${className} p-4 cursor-pointer flex justify-between items-center`} 
        onClick={() => {
          setIsOpen(!isOpen);
          accordianStatus?.(title); // Call accordianStatus with the title
        }} // Call accordianStatus with the title
      >
        <h3 className={`${titleClassName}`}>{title}</h3>
        <span className={`transition-transform duration-300 ${isActive || isOpen? 'rotate-180' : 'rotate-0'} w-5 h-5`}>
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </div>
      {isActive && <div className={contentClassName}>{children}</div>}
    </div>
  );
};

export default ProductAccordionItem;
