// export default PersonalProfileFeilds;
import React, { useState } from 'react';
import { Heading } from '@ui/atoms/Heading';
import { Checkbox } from '../CheckBox/Checkbox';
import { PasswordFeild } from '@ui/atoms/PasswordField';
import { Label } from '@ui/atoms/Label';
import { Controller, useForm } from 'react-hook-form';
import { LoginForm, ValidationForm } from '@utils/Login';
import ValidationModal from '../VaidationModal';
import { ButtonWithTextAndIcon } from '../ButtonWithTextAndIcon';



interface ChangePasswordProps {
  className?: string;
  labelclassName?: string;
  paraclassName?: string;

}
interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  checkbox: boolean;
  currentpassword: string
}

const ChangePassword: React.FC<ChangePasswordProps> = ({ className }) => {
  const { handleSubmit,control, clearErrors, formState: { errors, isSubmitted }, watch } = useForm<FormValues>({
    mode: 'onChange',
  });
  
  const [isModalOpen, setModalOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [createshowPassword, setcreateshowPassword] = useState(false);
  const handleFocus = () => {
    setModalOpen(true);
  };
  const [isPasswordFieldEmpty, setIsPasswordFieldEmpty] = useState(true);
  const [isCurrentPasswordEmpty, setIsCurrentPasswordEmpty] = useState(true);
  const handleBlur = () => {
    setModalOpen(false); // Close the modal when the input loses focus
  };
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const createtogglePasswordVisibility = () => setcreateshowPassword(!createshowPassword);
  const watchPassword = watch('password');
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);
  const [isConfirmPasswordFieldEmpty, setIsConfirmPasswordFieldEmpty] = useState(true);
  const onSubmit = (data: FormValues) => {
    console.log('Current Password:', data.currentpassword);
    console.log('New Password:', data.password);
    console.log('Confirm Password:', data.confirmPassword);
  };
  return (
    <div className={`col-span-full w-[97%] ml-2 mt-8  ${className}`}>
      <Heading className='text-[32px] font-HeroNewRegular'>Change Password</Heading>
      <form  onSubmit={handleSubmit(onSubmit)} className=" w-[100%] bg-white shadow-normal inline-grid  dark:bg-appModalColor">
        <div className=''>
          <div className='lg:w-full pb-8'>
            <Checkbox></Checkbox>
            <label className="text-sm font-HeroNewLight font-bold text-[#333333] ">
              <span>Send me emails about latest promotions and products.</span>
            </label>
          </div>
          <div className=''>
            <div className="mb-2 inline-grid text-start w-[100%]">
              <div className="flex text-xs">
                <Label className="text-xs text-appTextColor font-HeroNewUltraLight">Current Password</Label>
                <Label className="ml-2 text-sm font-heroNewLight font-sans "> *</Label>
              </div>
              <Controller
                name="currentpassword"
                control={control}
                rules={{ required: ValidationForm.Required }}
                render={({ field }) => (
                  <PasswordFeild
                    className={`rounded-none mt-3 pt-1 pb-1 pl-4 pr-4 h-[48px] text-base border-[1px] text-black  bg-appInputFieldColor ${errors[LoginForm.Password] ? 'border-[#595959]' : 'border-neutral-400'} ${isSubmitted && errors[LoginForm.Password] ? 'focus:outline-none' : 'focus:outline-none'}`}
                    type={showPassword ? 'text' : 'password'} // Password visibility toggle
                    placeholder="Current Password *"
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      setIsPasswordFieldEmpty(e.target.value === ''); // Check if the field is empty
                    }}
                    suffix={
                      !isPasswordFieldEmpty && (
                        <button
                          type="button"
                          onClick={togglePasswordVisibility}
                          className="text-gray-600 focus:outline-none"
                        >
                          {showPassword ? 'hide' : 'show'}
                        </button>
                      )
                    }
                  />
                )}
              />
              {errors.password && (
                <span className="text-appErrorMessage text-normal font-HeroNewBold mt-3">
                  {errors.password.message}
                </span>
              )}
            </div>
          </div>
          {/* New Password */}
          <div className=''>
            <div className="mb-2 inline-grid text-start w-[100%]">
              <div className='flex text-xs font-heroNewLight,font-sans' >
                <Label className="text-xs font-HeroNewUltraLight">New Password</Label>
                <Label className="ml-1 text-s font-HeroNewLight,font-sans "> *</Label>
              </div>
              {/* Password */}
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
                  <div className=" relative w-full">
                    {isModalOpen && (
                      <div className="md:!mb-[6.5rem] 2xs:mb-[10rem] absolute z-10 left-0 bottom-full w-full text-black bg-slate-300 text-sm border border-gray-200 rounded-lg shadow-md custom-modal">
                        {/* Arrow pointing to the input */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-0 h-0 border-x-5 border-x-transparent border-b-5 border-b-slate-300" />
                        <ValidationModal password={field.value} />
                      </div>
                    )}
                    <PasswordFeild
                      id="new-password"
                      type={createshowPassword ? 'text' : 'password'}
                      placeholder="New Password *"
                      {...field}
                      onClick={handleFocus}  // Open the modal on focus
                      onBlur={handleBlur}  // Close the modal on blur

                      // eslint-disable-next-line  @typescript-eslint/no-explicit-any
                      onChange={(e: any) => {

                        field.onChange(e); // Call react-hook-form's onChange
                        setModalOpen(true);
                        setIsCurrentPasswordEmpty(e.target.value === ''); // Open modal when typing
                        if (errors.password) {
                          clearErrors('password');  // Clear password error on input change
                        }
                      }}

                      // className="rounded-none mb-6 focus:outline-none p-3 text-base border-slate-200 border-2 w-full"
                      className={`h-12 rounded-none pt-1 pb-1 pl-4 pr-4 mt-3 mb-6  text-base border-[1px] w-full text-black bg-appInputFieldColor
                    ${errors.password ? 'border-formFieldBorder' : 'border-neutral-400'}
                    ${isSubmitted && errors.email ? 'focus:outline-none' : 'focus:outline-none'}`}
                    />
                    {/* Display error message if validation fails */}
                    {errors.password && (
                      <span className="text-appErrorMessage text-normal font-HeroNewBold">
                        {errors.password.message}
                      </span>
                    )}

                    {/* Show/Hide password toggle */}
                    {!isCurrentPasswordEmpty && ( // Only show if the password field is not empty
                      <button
                        type="button"
                        onClick={createtogglePasswordVisibility}
                        className="absolute inset-y-1/3 right-3 transform  -translate-y-1/2 focus:outline-none font-light text-black "
                      >
                        {createshowPassword ? 'hide' : 'show'}
                      </button>
                    )}
                  </div>
                )}
              />
            </div>
          </div>
          {/* Confirm Password */}
          <div>
            <div className="mb-2 inline-grid text-start w-[100%]">
              <div className='flex text-xs font-heroNewLight,font-sans' >
                <Label className="text-xs font-HeroNewUltraLight">Confirm Password</Label>
                <Label className="ml-1 text-s font-HeroNewUltraLight,font-sans "> *</Label>
              </div>
              <Controller
                name="confirmPassword"
                control={control}
                rules={{
                  required: ValidationForm.Required,
                  validate: (value) => value === watchPassword || ValidationForm.PasswordNotMatch,
                }}
                render={({ field }) => (
                  <div className='relative w-full'>
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

                  ${errors.confirmPassword ? 'border-formFieldBorder' : 'border-neutral-400'}
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
                  </div>
                )}
              />
              {errors.confirmPassword && <span className="text-appErrorMessage text-normal font-HeroNewBold">{errors.confirmPassword.message}</span>}

            </div>
          </div>
          <ButtonWithTextAndIcon  type="submit" className='w-[143px] h-[40px] lg:w-[303px] lg:h-[48px] !bg-appTheme text-white !border-appTheme hover:!bg-black hover:!border-none font-HeroNewBold '>Save Password</ButtonWithTextAndIcon>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
