import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { SubtitleLabel } from '@ui/molecules/SubTitleLabel';
import { PasswordFeild } from '@ui/atoms/PasswordField';
// import { FormField } from '@ui/molecules/FormField';
import { Label } from '@ui/atoms/Label';
import { Button } from '@ui/atoms/Button';
import { InputField } from '@ui/molecules/FormField';
import ValidationModal from '@ui/molecules/VaidationModal';
import { LoginForm } from '@utils/Login';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterForm: React.FC = () => {
  const { handleSubmit, control, clearErrors, formState: { errors }, watch } = useForm<FormValues>({
    mode: 'onChange',
  });

  const [showPassword, setShowPassword] = useState(false); // Password visibility toggle
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // Confirm password visibility toggle
  const [isPasswordFieldEmpty, setIsPasswordFieldEmpty] = useState(true);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleFocus = () => {
    setModalOpen(true);
  };
  const handleBlur = () => {
    setModalOpen(false); // Close the modal when the input loses focus
  };

  const onSubmit = (data: FormValues) => {
    console.log('Registering:', data);
  };

  const watchPassword = watch('password'); // Watch for password field for validation

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit(onSubmit)} className="w-[46%] bg-white p-8 shadow-normal inline-grid !my-16">
        {/* Header */}
        <div className="mb-2 text-start">
          <p className="text-4xl font-HeroNewRegular text-black">Register Your Profile</p>
        </div>

        {/* Primary Contact Subtitle */}
        <div className="mb-1 mt-8 text-left">
          <SubtitleLabel className="mb-4 font-HeroNewLight !text-black text-left" >Primary Contact</SubtitleLabel>
        </div>

        <div className="mb-2 inline-grid text-start">
          <div className='flex text-xs font-heroNewLight,font-sans' >
            <Label className="mb-3 mt-1 text-xs font-HeroNewUltraLight">Email Address</Label>
            <Label className="mb-3 ml-0 text-s font-HeroNewLight text-red-600"> *</Label>
          </div>
          <Controller
            name="email"
            control={control}
            rules={{ required: LoginForm.Message }}
            render={({ field }) => (
              <InputField
                type='email'
                id="email"
                placeholder=" "
                {...field}
                className="rounded-none mb-6 focus:outline-none p-3 text-base border-slate-200 border-2"
              />
            )}
          />
          {errors.email && <span className="text-red-600 text-normal font-HeroNewBold">{errors.email?.message}</span>}
        </div>

        {/* First Name */}
        <div className="mb-2 inline-grid text-start">
          <div className='flex text-xs font-heroNewLight,font-sans' >
            <Label className="mb-3 mt-1 text-xs font-HeroNewUltraLight">First Name</Label>
            <Label className="mb-3 ml-0 text-s font-HeroNewLight,font-sans text-red-600"> *</Label>
          </div>
          <Controller
            name="firstName"
            control={control}
            rules={{ required: LoginForm.Message }}
            render={({ field }) => (
              <InputField
                type='text'
                id="first-name"
                placeholder="First Name*"
                {...field}
                className="rounded-none mb-6 focus:outline-none p-3 text-base border-slate-200 border-2 "
              />
            )}
          />
          {errors.firstName && <span className="text-red-600 text-normal font-HeroNewBold">{errors.firstName.message}</span>}
        </div>

        {/* Last Name */}
        <div className="mb-2 inline-grid text-start">
          <div className='flex text-xs font-heroNewLight,font-sans' >
            <Label className="mb-3 mt-1 text-xs font-HeroNewUltraLight">Last Name</Label>
            <Label className="mb-3 ml-0 text-s font-HeroNewLight,font-sans text-red-600"> *</Label>
          </div>
          <Controller
            name="lastName"
            control={control}
            rules={{ required: LoginForm.Message }}
            render={({ field }) => (
              <InputField
                type='text'
                id="last-name"
                placeholder="Last Name"
                {...field}
                className="rounded-none mb-6 focus:outline-none p-3 text-base border-slate-200 border-2"
              />
            )}
          />
          {errors.lastName && <span className="text-red-600 text-normal font-HeroNewBold">{errors.lastName.message}</span>}
        </div>

        {/* Password */}
        <div className="mb-2 inline-grid text-start ">
          <div className='flex text-xs font-heroNewLight,font-sans' >
            <Label className="mb-3 mt-1 text-xs font-HeroNewUltraLight">Password</Label>
            <Label className="mb-3 ml-0 text-s font-HeroNewLight,font-sans text-red-600"> *</Label>
          </div>

          <Controller
          name="password"
          control={control}
          rules={{
            required: LoginForm.Message,  // Only show this message after submit
            minLength: {
              value: 8,
              message: 'Password does not meet complexity requirements',
            },
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
              message: 'Password does not meet complexity requirements',
            },
          }}
          render={({ field }) => (
            <div className="relative">
              {isModalOpen && (
                <div className="mb-24 absolute z-10 left-0 bottom-full mb-2 w-full text-black bg-slate-300 text-sm border border-gray-200 rounded-lg shadow-md">
                  {/* Arrow pointing to the input */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-0 h-0 border-x-5 border-x-transparent border-b-5 border-b-slate-300" />
                  <ValidationModal />
                </div>
              )}
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password*"
                {...field}
                onClick={handleFocus}  // Open the modal on focus
                onBlur={handleBlur}  // Close the modal on blur
                onChange={(e) => {
                  field.onChange(e); // Call react-hook-form's onChange
                  setModalOpen(true);  // Open modal when typing
                  if (errors.password) {
                    clearErrors('password');  // Clear password error on input change
                  }
                }}
                className="rounded-none mb-6 focus:outline-none p-3 text-base border-slate-200 border-2 w-full"
              />
              {/* Display error message if validation fails */}
              {errors.password && (
                <span className="text-red-600 text-normal font-HeroNewBold">
                  {errors.password.message}
                </span>
              )}

              {/* Show/Hide password toggle */}
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-1/3 right-3 transform -translate-y-1/2 text-gray-600 focus:outline-none"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          )}
        />
      </div>

        {/* Modal for password requirements */}



        {/* Confirm Password */}
        <div className="mb-2 inline-grid text-start">
          <div className='flex text-xs font-heroNewLight,font-sans' >
            <Label className="mb-3 mt-1 text-xs font-HeroNewUltraLight">Confirm Password</Label>
            <Label className="mb-3 ml-0 text-s font-HeroNewUltraLight,font-sans text-red-600"> *</Label>
          </div>
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
                className="rounded-none mb-6 p-3 focus:outline-none text-base border-slate-200 border-2"
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
          {errors.confirmPassword && <span className="text-red-600 text-normal font-HeroNewBold">{errors.confirmPassword.message}</span>}
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
