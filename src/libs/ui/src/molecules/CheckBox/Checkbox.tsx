import React, { ReactNode, InputHTMLAttributes, ChangeEventHandler, FocusEventHandler } from 'react';

interface ICheckbox extends InputHTMLAttributes<HTMLInputElement> {
    label?: ReactNode; 
    checked?: boolean; 
    onChange?: ChangeEventHandler<HTMLInputElement>; 
    onFocus?: FocusEventHandler<HTMLInputElement>; 
    onBlur?: FocusEventHandler<HTMLInputElement>; 
    className?: string;
}

export const Checkbox: React.FC<ICheckbox> = ({
    label,
    checked,
    onChange,
    onFocus,
    onBlur,
    className = '',
    ...rest
}) => (
    <label className={`checkbox-container ${className}`}>
        <input className='cursor-pointer hover:font-bold m-2'
            type="checkbox"
            checked={checked}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            {...rest}
        />
        {label && <span className="checkbox-label">{label}</span>}
    </label>
);
