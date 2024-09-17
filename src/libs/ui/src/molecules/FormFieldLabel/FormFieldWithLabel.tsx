import React from 'react';
import { FormField } from '@ui/atoms/FormField/FormField';
import { Label } from '@ui/atoms/Labels/Label';  // Import Label from atoms

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
        <div className={`flex flex-col ${className}`}>
            <Label text={label} className="mb-1" />
            <FormField
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};
