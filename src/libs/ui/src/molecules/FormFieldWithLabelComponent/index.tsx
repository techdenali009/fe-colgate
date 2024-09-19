import React from 'react';
import { FormField } from '@ui/atoms/FormFieldComponent';
import { Label } from '@ui/atoms/LabelsComponent';  // Import Label from atoms

interface FormFieldWithLabelProps {
    label: string;
    id: string;
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}

export const FormFieldWithLabel: React.FC<FormFieldWithLabelProps> = ({
    label,
    id,
    type = 'text',
    placeholder,
    value,
    onChange,
    className = '',
}) => {
    return (
        <div className={` ${className}`}>
            <Label text={label} className="block text-gray-700 mb-2" />
            <FormField className={` ${className}`}
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};