import React, { useState } from 'react';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  titleClassName?: string;
  containerClassName?: string;
  contentClassName?: string;
  className?: string;
  ArrowIcon?: boolean;
  svgIconColor?: string; 
  svgIconClass?:string
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  children,
  titleClassName = 'text-lg font-semibold',
  containerClassName = 'border-b',
  contentClassName = 'p-4 bg-gray-100',
  className = '',
  svgIconClass='',
  svgIconColor = 'black',
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`mb-2 ${containerClassName}`}>
      <div
        className={`${className} p-4 cursor-pointer flex justify-between items-center`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className={titleClassName}>{title}</h3>
        <span>
          {isOpen ? (
            <svg
              className={`w-5 h-5 ${svgIconClass}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke={svgIconColor} 
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 15l7-7 7 7" 
              />
            </svg>
          ) : (
            <svg
              className={`w-5 h-5 ${svgIconClass}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke={svgIconColor}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
            
          )}
        </span>
      </div>
      {isOpen && <div className={contentClassName}>{children}</div>}
    </div>
  );
};

export default AccordionItem;
