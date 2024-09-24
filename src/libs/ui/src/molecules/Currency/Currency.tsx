import React from 'react';

interface CurrencyProps {
    value: number;
    currency: string; 
    decimalPlaces?: number;
}

const Currency: React.FC<CurrencyProps> = ({ value, currency, decimalPlaces = 2 }) => {
    const formattedValue = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency,
        minimumFractionDigits: decimalPlaces,
        maximumFractionDigits: decimalPlaces,
    }).format(value);

    return <span>{formattedValue}</span>;
};

export default Currency;
