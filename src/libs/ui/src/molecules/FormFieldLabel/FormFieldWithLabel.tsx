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
    onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void; // Add onKeyUp prop
    className?: string;
}

export const FormFieldWithLabel: React.FC<FormFieldWithLabelProps> = ({
    label,
    id,
    type = 'text',
    placeholder,
    value,
    onChange,
    onKeyUp,  // Add onKeyUp prop here
    className,
    ...rest
}) => {
    return (
        <div className={` ${className}`}>
            <Label text={label} className="block text-gray-700 mb-2" children={undefined} />
            <FormField
                className={` ${className}`}
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onKeyUp={onKeyUp}  // Pass onKeyUp to FormField
                {...rest}
            />
        </div>
    );
};
