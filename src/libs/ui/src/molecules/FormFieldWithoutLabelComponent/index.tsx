import React from 'react';
import { FormField } from '@ui/atoms/FormFieldComponent';

interface FormFieldWithoutLabelProps {
    id: string;
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}

export const FormFieldWithoutLabel: React.FC<FormFieldWithoutLabelProps> = ({
    id,
    type = 'text',
    placeholder,
    value,
    onChange,
    className = '',
}) => {
    return (
        <FormField
            id={id}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={className}
        />
    );
};
