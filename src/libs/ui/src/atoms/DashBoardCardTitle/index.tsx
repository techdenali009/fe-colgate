import React from 'react';

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const CardTitle: React.FC<CardTitleProps> = ({
  children,
  className = '',
}) => {
  return <h3 className={`text-lg font-semibold ${className}`}>{children}</h3>;
};
