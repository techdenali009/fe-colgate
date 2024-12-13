// RadioButton.tsx
import React from 'react';
import { Label } from '@ui/atoms/Label';

interface RadioButtonProps {
  id: string;
  name: string;
  value: string;
  label: string;
  selectedValue: string;
  onChange: (value: string) => void;
  disabled?: boolean; 
  className:string;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  id,
  name,
  value,
  label,
  selectedValue,
  onChange,
  disabled = false,
  className
}) => {
  return (
    <div className="flex items-center space-x-2">
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={selectedValue === value}
        onChange={() => onChange(value)}
        className={'form-radio  text-blue-600 '}
        disabled={disabled} // Apply disabled prop here
      />
      <Label htmlFor={id} className={`flex items-center space-x-2 ${className}`}>
        <span>{label}</span>
      </Label>
    </div>
  );
};

export default RadioButton;
