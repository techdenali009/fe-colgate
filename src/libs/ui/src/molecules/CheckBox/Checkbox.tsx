import { Input } from '@ui/atoms/Input';
import React, { ReactNode, InputHTMLAttributes, ChangeEventHandler, FocusEventHandler } from 'react';

interface ICheckbox extends InputHTMLAttributes<HTMLInputElement> {
    children?: ReactNode; 
    checked?: boolean; 
    onChange?: ChangeEventHandler<HTMLInputElement>; 
    onFocus?: FocusEventHandler<HTMLInputElement>; 
    onBlur?: FocusEventHandler<HTMLInputElement>; 
    className?: string;
}

export const Checkbox: React.FC<ICheckbox> = ({
  children,
  checked,
  onChange,
  onFocus,
  onBlur,
  className = '',
  ...rest
}) => (
  <label className={`checkbox-container ${className}`}>
    <Input
      className='cursor-pointer hover:font-bold m-2'
      type="checkbox"
      checked={checked}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      {...rest}
    />
    {children && <span className="cursor-pointer">{children}</span>}
  </label>
);
