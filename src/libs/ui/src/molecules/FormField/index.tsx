import React, { InputHTMLAttributes } from "react";
import { Input } from "../../atoms/Input";

interface IInputField extends InputHTMLAttributes<Element> {
    label?: string,
    placeholder: string,
    type: string
}

const InputField: React.FC<IInputField> = ({ label, placeholder, type, ...rest }) => (
    <div className="flex flex-col">
        {label && <label htmlFor="input-field">{label}</label>}
        <Input type={type} placeholder={placeholder} {...rest}></Input>
    </div>
);

export default InputField;



