import React, { forwardRef } from 'react';

interface PasswordFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  suffix?: React.ReactNode;
  // other props that you want to allow for this component
}

export const PasswordFeild = forwardRef<HTMLInputElement, PasswordFieldProps>(
  ({ label, className, suffix, ...props }, ref) => {
    return (
      <div className="relative w-full">
        {label && <label htmlFor={props.id}>{label}</label>}
        <input   ref={ref} className={`${className} w-full`} {...props} />
        {suffix && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            {suffix}
          </div>
        )}
      </div>
    );
  }
);

PasswordFeild.displayName = 'PasswordField';