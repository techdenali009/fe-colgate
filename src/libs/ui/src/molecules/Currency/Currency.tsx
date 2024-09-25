import React from 'react';

interface CurrencyProps {
    value: number;
    currency: string;
    decimalPlaces?: number; 
    locale?: string; 
    className?: string;
    children?: React.ReactNode; 
}

const Currency: React.FC<CurrencyProps> = ({
  value,
  currency,
  decimalPlaces = 2,
  locale = 'en-US',
  className, 
  children,
}) => {
  const formattedValue = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
  }).format(value);

  return (
    <span className={className}>
      {formattedValue}
      {children} 
    </span>
  );
};

export default Currency;
