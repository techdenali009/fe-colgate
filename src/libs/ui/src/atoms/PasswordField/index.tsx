import React, { forwardRef } from 'react';

interface PasswordFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  suffix?: React.ReactNode; // For the Show/Hide button or any other suffix
}

export const PasswordFeild = forwardRef<HTMLInputElement, PasswordFieldProps>(
  ({ className, suffix, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <input ref={ref} className={`${className} w-full`} {...props} />
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
