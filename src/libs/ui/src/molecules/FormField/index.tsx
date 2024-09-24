import React, { InputHTMLAttributes } from "react";
import { Input } from "@ui/atoms/Input";

interface IInputField extends InputHTMLAttributes<Element> {
    label?: string,
    placeholder: string,
    type: string
}

export const InputField: React.FC<IInputField> = ({ label, placeholder, type, ...rest }) => (
    <div className="flex flex-col">
        {label && <label htmlFor="input-field">{label}</label>}
        <Input type={type} placeholder={placeholder} {...rest}></Input>
    </div>
);