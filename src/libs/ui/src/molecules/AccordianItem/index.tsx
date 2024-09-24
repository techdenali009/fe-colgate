import React, { useState } from 'react';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  titleClassName?: string;
  containerClassName?: string;
  contentClassName?: string;
  className?: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  children,
  titleClassName = 'text-lg font-semibold',
  containerClassName = 'border-b',
  contentClassName = 'p-4 bg-gray-100',
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className={`mb-2 ${containerClassName}`}> {/* Dynamic container classes */}
      <div className={` p-4 cursor-pointer flex justify-between items-center ${className}`} onClick={() => setIsOpen(!isOpen)}>
        <h3 className={titleClassName}>{title}</h3> {/* Dynamic title classes */}
        <span className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'} w-5 h-5`}>
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </div>
      {isOpen && <div className={contentClassName}>{children}</div>}
    </div>
  );
};

export default AccordionItem;
