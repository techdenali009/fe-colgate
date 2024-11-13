import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { SubtitleLabel } from '@ui/molecules/SubTitleLabel';
import { PasswordFeild } from '@ui/atoms/PasswordField';
// import { FormField } from '@ui/molecules/FormField';
import { Label } from '@ui/atoms/Label';
import { Button } from '@ui/atoms/Button';
import { InputField } from '@ui/molecules/FormField';
import ValidationModal from '@ui/molecules/VaidationModal';
import { LoginForm, ValidationForm } from '@utils/Login';
import { Checkbox } from '@ui/molecules/CheckBox/Checkbox';
import { FaCheckCircle } from 'react-icons/fa';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  checkbox: boolean;
}

const RegisterForm: React.FC = () => {
  const { handleSubmit, control, clearErrors, formState: { errors, isSubmitted }, watch } = useForm<FormValues>({
    mode: 'onChange',
  });
  const [showPassword, setShowPassword] = useState(false); // Password visibility toggle
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // Confirm password visibility toggle
  const [isPasswordFieldEmpty, setIsPasswordFieldEmpty] = useState(true);
  const [isConfirmPasswordFieldEmpty, setIsConfirmPasswordFieldEmpty] = useState(true);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(true);
  const [checkPolicy, setIsCheckedPolicy] = useState(false);
  const watchFirstName = watch('firstName'); // Similarly for first name
  const watchLasttName = watch('lastName');


  const onSubmit = (data: FormValues) => {
    console.log('Registering:', data);
  };
  const handleFocus = () => {
    setModalOpen(true);
  };
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };
  const handlePolicyCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckedPolicy(event.target.checked);
  };

  const handleBlur = () => {
    setModalOpen(false); // Close the modal when the input loses focus
  };
  const watchPassword = watch('password'); // Watch for password field for validation

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100  dark:bg-appdarkcolor">
      <form onSubmit={handleSubmit(onSubmit)} className="min-lg:w-[67%] w-[648px] max-md:w-[100%] bg-white p-9 shadow-normal inline-grid !my-16 dark:bg-appModalColor">
        {/* Header */}
        <div className="text-start">
          <p className="text-[32px] mb-[32px] font-HeroNewRegular text-appTextColor">Register Your Profile</p>
        </div>
        {/* Primary Contact Subtitle */}
        <div className="mb-1  text-left">
          <SubtitleLabel className="font-HeroNewLight !text-appTextColor text-left !text-[16px]" >Primary Contact</SubtitleLabel>
        </div>

        <div className="mb-2 inline-grid text-start ">
          <div className='flex text-xs font-heroNewLight,font-sans'>
            <Label className="text-xs font-HeroNewUltraLight">Email Address</Label>
            <Label className="ml-0 text-s font-HeroNewLight text-red-600"> *</Label>
          </div>

          <Controller
            name="email"
            control={control}
            rules={{
              required: ValidationForm.Required,
              pattern: {
                value: ValidationForm.EmailValidationRule,
                message: ValidationForm.EmailRuleFailed,
              },
            }}
            render={({ field }) => (
              <InputField
                type='email'
                id="email"
                placeholder="Email"
                {...field}
                className={`h-12 rounded-none pt-1 pb-1 pl-4 pr-4 mt-3 mb-6 text-base border-[1px] w-full  text-black bg-appInputFieldColor
                  ${errors.email ? 'border-formFieldBorder' : 'border-slate-200'}
                  ${isSubmitted && errors.email ? 'focus:outline-none' : 'focus:outline-none'}`}
              />
            )}
          />
          {errors.email && <span className="text-appErrorMessage text-normal font-HeroNewBold">{errors.email.message}</span>}
        </div>
        {/* First Name */}
        <div className="mb-2 inline-grid text-start">
          <div className='flex text-xs font-heroNewLight,font-sans' >
            <Label className="text-xs font-HeroNewUltraLight">First Name</Label>
            <Label className="ml-0 text-s font-HeroNewLight,font-sans text-red-600"> *</Label>
          </div>

          <Controller
            name="firstName"
            control={control}
            rules={{ required: ValidationForm.Required }}
            render={({ field }) => (
              <div className="relative w-full">
                <InputField
                  type='text'
                  id="firstname"
                  placeholder="First Name *"
                  {...field}
                  className={`h-12 rounded-none pt-1 pb-1 pl-4 pr-4 mt-3 mb-6  text-base border-[1px] w-full text-black bg-appInputFieldColor
                    ${errors.firstName ? 'border-formFieldBorder' : 'border-slate-200'}
                    ${isSubmitted && errors.email ? 'focus:outline-none' : 'focus:outline-none'}`}
                />
                {/* Conditionally render the checkmark icon */}
                {watchFirstName && (
                  <FaCheckCircle
                    className="absolute right-2.5 top-[30%] transform -translate-y-1/2 text-appTheme text-base"
                  />

                )}
              </div>
            )}
          />
          {errors.firstName && <span className="text-appErrorMessage text-normal font-HeroNewBold">{errors.firstName.message}</span>}


        </div>

        {/* Last Name */}
        <div className="mb-2 inline-grid text-start">
          <div className='flex text-xs font-heroNewLight,font-sans' >
            <Label className=" text-xs font-HeroNewUltraLight">Last Name</Label>
            <Label className="ml-0 text-s font-HeroNewLight,font-sans text-red-600"> *</Label>
          </div>
          <Controller
            name="lastName"
            control={control}
            rules={{ required: ValidationForm.Required }}
            render={({ field }) => (
              <div className="relative w-full">
                <InputField
                  type='text'
                  id="lastname"
                  placeholder="Last Name *"
                  {...field}
                  className={`h-12 rounded-none pt-1 pb-1 pl-4 pr-4 mt-3 mb-6  text-base border-[1px] w-full text-black bg-appInputFieldColor
                    ${errors.lastName ? 'border-formFieldBorder' : 'border-slate-200'}
                    ${isSubmitted && errors.email ? 'focus:outline-none' : 'focus:outline-none'}`}
                />
                {watchLasttName && (
                  <FaCheckCircle
                    className="absolute right-2.5 top-[30%] transform -translate-y-1/2 text-appTheme text-base"
                  />
                )}
              </div>
            )}
          />
          {errors.lastName && <span className="text-appErrorMessage text-normal font-HeroNewBold">{errors.lastName.message}</span>}
        </div>

        {/* Password */}
        <div className="mb-2 inline-grid text-start ">
          <div className='flex text-xs font-heroNewLight,font-sans' >
            <Label className="text-xs font-HeroNewUltraLight">Password</Label>
            <Label className="ml-0 text-s font-HeroNewLight,font-sans text-red-600"> *</Label>
          </div>

          <Controller
            name="password"
            control={control}
            rules={{
              required: ValidationForm.Required,  // Only show this message after submit
              minLength: {
                value: 8,
                message: ValidationForm.PasswordRequirementFailed
              },
              pattern: {
                value: ValidationForm.PasswordValidationRule,
                message: ValidationForm.PasswordRequirementFailed,
              },
            }}
            render={({ field }) => (
              <div className="relative">
                {isModalOpen && (
                  <div className="md:!mb-[6.5rem] 2xs:mb-[10rem] absolute z-10 left-0 bottom-full w-full text-black bg-slate-300 text-sm border border-gray-200 rounded-lg shadow-md custom-modal">
                    {/* Arrow pointing to the input */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-0 h-0 border-x-5 border-x-transparent border-b-5 border-b-slate-300" />
                    <ValidationModal password={field.value} />
                  </div>
                )}
                <PasswordFeild
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password*"
                  {...field}
                  onClick={handleFocus}  // Open the modal on focus
                  onBlur={handleBlur}  // Close the modal on blur
                   
                  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
                  onChange={(e: any) => {
                    
                    field.onChange(e); // Call react-hook-form's onChange
                    setModalOpen(true);
                    setIsPasswordFieldEmpty(e.target.value === ''); // Open modal when typing
                    if (errors.password) {
                      clearErrors('password');  // Clear password error on input change
                    }
                  }}
                  
                  // className="rounded-none mb-6 focus:outline-none p-3 text-base border-slate-200 border-2 w-full"
                  className={`h-12 rounded-none pt-1 pb-1 pl-4 pr-4 mt-3 mb-6  text-base border-[1px] w-full text-black bg-appInputFieldColor
                    ${errors.password ? 'border-formFieldBorder' : 'border-slate-200'}
                    ${isSubmitted && errors.email ? 'focus:outline-none' : 'focus:outline-none'}`}
                />
                {/* Display error message if validation fails */}
                {errors.password && (
                  <span className="text-appErrorMessage text-normal font-HeroNewBold">
                    {errors.password.message}
                  </span>
                )}

                {/* Show/Hide password toggle */}
                {!isPasswordFieldEmpty && ( // Only show if the password field is not empty
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-1/3 right-3 transform -translate-y-1/2 focus:outline-none font-light text-black "
                  >
                    {showPassword ? 'hide' : 'show'}
                  </button>
                )}
              </div>
            )}
          />
        </div>

        {/* Modal for password requirements */}



        {/* Confirm Password */}
        <div className="mb-2 inline-grid text-start">
          <div className='flex text-xs font-heroNewLight,font-sans' >
            <Label className="text-xs font-HeroNewUltraLight">Confirm Password</Label>
            <Label className="ml-0 text-s font-HeroNewUltraLight,font-sans text-red-600"> *</Label>
          </div>
          <Controller
            name="confirmPassword"
            control={control}
            rules={{
              required: ValidationForm.Required,
              validate: (value) => value === watchPassword || ValidationForm.PasswordNotMatch,
            }}
            render={({ field }) => (
              <PasswordFeild
                label=""
                id="confirm-password"
                type={showConfirmPassword ? 'text' : 'password'} // Toggle password visibility
                placeholder="Confirm Password *"
                {...field}
                onChange={(e: { target: { value: string; }; }) => {
                  field.onChange(e);
                  setIsConfirmPasswordFieldEmpty(e.target.value === ''); // Check if the field is empty
                }}
                className={`h-12 rounded-none pt-1 pb-1 pl-4 pr-4 mt-3 mb-6  text-base border-[1px] w-full text-black bg-appInputFieldColor
Confirm Password

                  ${errors.confirmPassword ? 'border-formFieldBorder' : 'border-slate-200'}
                  ${isSubmitted && errors.email ? 'focus:outline-none' : 'focus:outline-none'}`}
                suffix={(
                  !isConfirmPasswordFieldEmpty &&
                  <button
                    type="button"
                    onClick={toggleConfirmPasswordVisibility}
                    className="font-light text-black focus:outline-none"
                  >
                    {showConfirmPassword ? 'hide' : 'show'}
                  </button>
                )}
              />
            )}
          />
          {errors.confirmPassword && <span className="text-appErrorMessage text-normal font-HeroNewBold">{errors.confirmPassword.message}</span>}

        </div>

        <Checkbox
          checked={isChecked}
          onChange={handleCheckboxChange}
          className='text-left text-[#333333] font-HeroNewLight text-xs pt-[11px] pb-6 !leading-6  dark:text-appWhiteTheme-opacity-70'
        >
          <label>Please send me exclusive offers and updates from PCA SKIN. You have the freedom to unsubscribe whenever you wish.</label>

        </Checkbox>

        <Checkbox
          checked={checkPolicy}
          onChange={handlePolicyCheckbox}
          className={`text-left !m-0 font-HeroNewLight text-[#333333] text-xs pt-[11px] pb-6 !leading-6 rounded-none h-12 p-0  border-[1px] dark:text-appWhiteTheme-opacity-70 ${errors[LoginForm.Email] ? 'border-[#595959]' : 'border-none'}
            ${isSubmitted && (errors[LoginForm.Email] || !checkPolicy) ? 'focus:outline-appTheme border-formFieldBorder' : 'focus:outline-none'}`}
        >
          <label>Kindly explore our <a className='text-appTheme text-sm font-HeroNewRegular'>privacy policy</a> to understand how we utilize your information.<span className='text-red-700'>*</span> </label>
        </Checkbox>

        <div className="flex justify-between items-center w-full">
          <div className="flex-grow" /> {/* This empty div takes up space to push the login button to the right */}

          <Button
            type="submit"
            className="bg-appTheme text-white p-3 m-1 mt-10px text-sm hover:bg-black hover:underline font-HeroNewSemiBold"
          >
            Create Account
          </Button>
        </div>

      </form>
    </div>
  );
};

export default RegisterForm;
