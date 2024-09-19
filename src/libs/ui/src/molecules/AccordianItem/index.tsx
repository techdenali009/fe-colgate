// src/components/molecules/AccordionItem/AccordionItem.tsx
import React, { useState } from 'react';

interface AccordionItemProps {
  title: string;
  content: string | React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-300 rounded-lg mb-2">
      <div
        className="bg-gray-100 p-4 cursor-pointer flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold">{title}</h3>
        <span className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'} w-5 h-5`}>
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </div>
      {isOpen && <div className="p-4 bg-white">{content}</div>}
    </div>
  );
};

export default AccordionItem;
