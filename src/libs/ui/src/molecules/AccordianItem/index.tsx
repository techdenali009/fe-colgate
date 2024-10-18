import React, { useState, useEffect } from 'react';

export interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  titleClassName?: string;
  containerClassName?: string;
  contentClassName?: string;
  className?: string;
  ArrowIcon?: boolean;
  svgIconColor?: string; 
  svgIconClass?:string;
  accordianStatus?: (title: string) => void;
  isActive?: boolean;
  preventClose?: boolean; 
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
  accordianStatus,
  isActive = false,
  preventClose = false,
}) => {
  const [isOpen, setIsOpen] = useState(isActive);

  useEffect(() => {
    setIsOpen(isActive);
  }, [isActive]);

  const handleClick = () => {
    if (isOpen && preventClose) return; // Prevent closing if preventClose is true
    setIsOpen((prev) => {
      const newState = !prev;
      accordianStatus?.(title);
      return newState;
    });
  };

  return (
    <div className={`mb-2 ${containerClassName}`}>
      <div
        className={`${className} p-4 cursor-pointer flex justify-between items-center`}
        onClick={handleClick}
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

AccordionItem.displayName = 'AccordionItem';

export default AccordionItem;
