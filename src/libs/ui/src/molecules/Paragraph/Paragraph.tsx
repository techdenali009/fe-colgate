import React from 'react';

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

export const Paragraph: React.FC<ParagraphProps> = ({ children, className }) => {
  return (
    <p className={`text-gray-600 mb-4 font-normal text-sm ${className}`}>
      {children}
    </p>
  );
};
