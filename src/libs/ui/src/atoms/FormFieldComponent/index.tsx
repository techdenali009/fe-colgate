import React, { InputHTMLAttributes } from 'react';

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
    className = '',
    ...rest
}) => {
    return (
        <input
            className={`border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
            {...rest}
        />
    );
};
