import React from 'react';

type ParagraphProps = {
  children: React.ReactNode;
  className?: string;
};

const Paragraph: React.FC<ParagraphProps> = ({ children, className = '' }) => (
  <p className={`text-base ${className}`}>
    {children}
  </p>
);

export default Paragraph;
