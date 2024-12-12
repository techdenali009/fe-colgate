import React from 'react';
import { Label } from '@ui/atoms/Label'; // Assuming you have a Label component

interface RadioGroupOptionProps {
  value: string;
  id: string;
  label: string;
}

const RadioGroupOption: React.FC<RadioGroupOptionProps> = ({  id, label }) => {
  return (
    <div className="flex items-center space-x-2">
    
      <Label htmlFor={id}>{label}</Label>
    </div>
  );
};

export default RadioGroupOption;
