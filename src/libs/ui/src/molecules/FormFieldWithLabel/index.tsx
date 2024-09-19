import React from 'react';
import { FormField } from '@ui/atoms/FormField/index';
import { Label } from '@ui/atoms/Label/Label';  // Import Label from atoms

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
            <Label className="block text-gray-700 mb-2">{label}</Label> {/* Pass label as children */}
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
