import React from 'react';

interface FormFieldProps {
  type: string;
  placeholder: string;
  className?: string;
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  [x: string]: any; // For spreading other props
  suffix?: React.ReactNode; // Prop for suffix (like the Show/Hide button)
}

export const PasswordFeild: React.FC<FormFieldProps> = ({ type, placeholder, className, suffix, ...props }) => {
  return (
    <div className="relative w-full">
      <input
        type={type}
        placeholder={placeholder}
        className={`${className} w-full`}
        {...props}
      />
      {suffix && (
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
          {suffix}
        </div>
      )}
    </div>
  );
};
