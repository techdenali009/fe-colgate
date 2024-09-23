import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { SubtitleLabel } from '@ui/molecules/LabelTypes/SubTitleLabel';
import { PasswordFeild } from '@ui/atoms/PasswordField';
import { FormField } from '@ui/atoms/FormField/FormField';
import { Label } from '@ui/atoms/Labels/Label';
import { Button } from '@ui/atoms/Button';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterForm: React.FC = () => {
  const { handleSubmit, control, formState: { errors }, watch } = useForm<FormValues>({
    mode: 'onChange',
  });

  const [showPassword, setShowPassword] = useState(false); // Password visibility toggle
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // Confirm password visibility toggle
  const [isPasswordFieldEmpty, setIsPasswordFieldEmpty] = useState(true);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  const onSubmit = (data: FormValues) => {
    console.log('Registering:', data);
  };

  const watchPassword = watch('password'); // Watch for password field for validation

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit(onSubmit)} className="w-2/4 bg-white p-8 shadow-lg inline-grid !mt-78">
        {/* Header */}
        <div className="mb-7 text-start">
        <p className="text-4xl font-normal text-black">Register Your Profile</p>
      </div>

        {/* Primary Contact Subtitle */}
        <div className="mb-4 mt-8 text-left">
          <SubtitleLabel text="Primary Contact" className="mb-4 text-base text-black font-sans text-left" />
        </div>

        <div className="mb-7 inline-grid text-start">
        <Label className="mb-3 text-xs font-sans" text={''}>Email*</Label>
          <Controller
            name="email"
            control={control}
            rules={{ required: 'This field is required' }}
            render={({ field }) => (
              <FormField
              
                id="email"
                placeholder=" "
                {...field}
                className="rounded-none p-3 text-base border-slate-200 border-2"
              />
            )}
          />
          {errors.email && <span className="text-red-500 font-bold">{errors.email?.message}</span>}
        </div>

        {/* First Name */}
        <div className="mb-7 inline-grid text-start">
        <Label className="mb-3 text-xs font-sans" text={''}>FirstName*</Label>
          <Controller
            name="firstName"
            control={control}
            rules={{ required: 'This field is required' }}
            render={({ field }) => (
              <FormField
                id="first-name"
                placeholder="First Name*"
                {...field}
                className="rounded-none p-3 text-base border-slate-200 border-2"
              />
            )}
          />
          {errors.firstName && <span className="text-red-500 font-bold">{errors.firstName.message}</span>}
        </div>

        {/* Last Name */}
        <div className="mb-7 inline-grid text-start">
        <Label className="mb-3 text-xs font-sans" text={''}>LastName*</Label>
          <Controller
            name="lastName"
            control={control}
            rules={{ required: 'This field is required' }}
            render={({ field }) => (
              <FormField
              
                id="last-name"
                placeholder="Last Name"
                {...field}
                className="rounded-none p-3 text-base border-slate-200 border-2"
              />
            )}
          />
          {errors.lastName && <span className="text-red-500 font-bold">{errors.lastName.message}</span>}
        </div>

        {/* Password */}
        <div className="mb-7 inline-grid text-start">
        <Label className="mb-3 text-xs font-sans" text={''}>Password*</Label>
          <Controller
            name="password"
            control={control}
            rules={{ required: 'This field is required' }}
            render={({ field }) => (
              <PasswordFeild
                label="Password*"
                id="password"
                type={showPassword ? 'text' : 'password'} // Toggle password visibility
                placeholder="Password*"
                {...field}
                onChange={(e: { target: { value: string; }; }) => {
                  field.onChange(e);
                  setIsPasswordFieldEmpty(e.target.value === ''); // Check if the field is empty
                }}
                className="rounded-none p-3 text-base border-slate-200 border-2"
                suffix={(
                  !isPasswordFieldEmpty && <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="text-gray-600 focus:outline-none"
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                )}
              />
            )}
          />
          {errors.password && <span className="text-red-500 font-bold">{errors.password.message}</span>}
        </div>

        {/* Confirm Password */}
        <div className="mb-7 inline-grid text-start">
        <Label className="mb-3 text-xs font-sans" text={''}>Confirm Password</Label>
          <Controller
            name="confirmPassword"
            control={control}
            rules={{
              required: 'Password do not match',
              validate: (value) => value === watchPassword || 'Passwords do not match',
            }}
            render={({ field }) => (
              <PasswordFeild
                label="Confirm Password*"
                id="confirm-password"
                type={showConfirmPassword ? 'text' : 'password'} // Toggle password visibility
                placeholder="Confirm Password"
                {...field}
                onChange={(e: { target: { value: string; }; }) => {
                  field.onChange(e);
                  setIsPasswordFieldEmpty(e.target.value === ''); // Check if the field is empty
                }}
                className="rounded-none p-3 text-base border-slate-200 border-2"
                suffix={(
                  !isPasswordFieldEmpty && <button
                    type="button"
                    onClick={toggleConfirmPasswordVisibility}
                    className="text-gray-600 focus:outline-none"
                  >
                    {showConfirmPassword ? 'Hide' : 'Show'}
                  </button>
                )}
              />
            )}
          />
          {errors.confirmPassword && <span className="text-red-500 font-bold">{errors.confirmPassword.message}</span>}
        </div>

        <div className="flex justify-between items-center w-full">
          <div className="flex-grow" /> {/* This empty div takes up space to push the login button to the right */}

          <Button
            type="submit"
            className="bg-blue-700 text-white p-3 m-1 hover:bg-black hover:underline font-bold"
          >
           Create Account
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
