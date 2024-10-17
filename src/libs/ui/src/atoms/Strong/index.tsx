import React from 'react';

type ParagraphProps = {
  children: React.ReactNode;
  className?: string;
};

const Strong: React.FC<ParagraphProps> = ({ children, className = '' }) => (
  <strong className={`${className}`}>
    {children}
  </strong>
);

export default Strong;
