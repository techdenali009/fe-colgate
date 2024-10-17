import React, { useState, forwardRef, useEffect } from 'react';

export interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  titleClassName?: string;
  containerClassName?: string;
  contentClassName?: string;
  className?: string;
  accordianStatus?: (title: string) => void;
  isActive?: boolean;
  preventClose?: boolean; // Add preventClose as a prop
  
}

export interface AccordionItemRef {
  isActive: boolean;
 
}

const AccordionItem = forwardRef<AccordionItemRef, AccordionItemProps>(({
  title,
  children,
  titleClassName = 'text-lg font-semibold',
  containerClassName = 'border-b',
  contentClassName = 'p-4 bg-gray-100',
  className = '',
  accordianStatus,
  isActive = false,
  preventClose = false, // Default to false if not provided
 
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
        className={`${className} p-4 cursor-pointer flex justify-between `}
        onClick={handleClick}
      >
        <h3 className={`${titleClassName} ${isOpen ? 'font-HeroNewBold' : ''}`}>
          {title}
        </h3>
        <span className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'} w-5 h-5`}>
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </div>
      {isOpen && <div className={contentClassName}>{children}</div>}
    </div>
  );
});

AccordionItem.displayName = 'AccordionItem';

export default AccordionItem;
