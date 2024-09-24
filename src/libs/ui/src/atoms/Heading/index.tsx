import React, { ReactNode } from 'react';

interface IHeading {
  children: ReactNode; 
  className?: string; 
}

export const Heading: React.FC<IHeading> = ({ children, className = '' }) => (
  <h1 className={className}>{children}</h1>
);
