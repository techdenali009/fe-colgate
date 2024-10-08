import React, { InputHTMLAttributes } from 'react';

interface IInput extends InputHTMLAttributes<Element> {
    type: string,
    placeholder?: string,
    className?: string
}

export const Input: React.FC<IInput> = ({ type, placeholder, className = '', ...rest }) => (
  <input type={type} placeholder={placeholder} className = {className} {...rest} />
);