import React, { ReactNode } from 'react';

interface ISubheading {
    className?: string;
    children : ReactNode
}

export const Subheading: React.FC<ISubheading> = ({ className = '',children }) => {
  return (
    <p className={className}>
      {children}
    </p>
  );
};
