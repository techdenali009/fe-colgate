import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button } from '@ui/atoms/Button';
import { Label } from '@ui/atoms/Label';
import { LoginForm, ValidationForm } from '@utils/Login';
import { PasswordFeild } from '@ui/atoms/PasswordField';
import { InputField } from '@ui/molecules/FormField';

interface FormValues {
  email: string;
  password: string;
}

interface LoginFormProps {
  onSubmit: (data: FormValues) => void;
  setIsForgotPassword: (value: boolean) => void;
}

const LoginForms: React.FC<LoginFormProps> = ({ onSubmit, setIsForgotPassword }) => {
  const [showPassword, setShowPassword] = useState(false); // State to control password visibility
  const [isPasswordFieldEmpty, setIsPasswordFieldEmpty] = useState(true); // To track if the password field is empty

  const { control,handleSubmit, formState: { errors, isSubmitted } } = useForm<FormValues>({
    mode: 'onChange',
  });

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <>
      <div className="mb-8">
        <p className="text-[32px] font-normal font-HeroNewRegular">Customer Login</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        {/* Email Input */}
        <div className="inline-grid">
          <div className="flex text-xs">
            <Label className="text-xs font-HeroNewUltraLight text-appTextColor">Email</Label>
            <Label className="ml-0 text-sm font-heroNewLight font-sans text-red-600"> *</Label>
          </div>

          <Controller
            name="email"
            control={control}
            rules={{ required: ValidationForm.Required }}
            render={({ field }) => (
              <InputField
                className={`rounded-none pt-1 pb-1 pl-4 pr-4 mt-3 mb-6 h-[48px] text-base border-[1px] text-black  bg-appInputFieldColor ${errors[LoginForm.Email] ? 'border-[#595959]' : 'border-[#d6d6d6]'} ${isSubmitted && errors[LoginForm.Email] ? 'focus:outline-none' : 'focus:outline-none'}`}
                type="email"
                placeholder="Email *"
                {...field}
              />
            )}
          />
          {errors.email && (
            <span className="text-appErrorMessage text-normal font-HeroNewBold">
              {errors.email.message}
            </span>
          )}
        </div>

        {/* Password Input with Visibility Toggle */}
        <div className="inline-grid">
          <div className="flex text-xs">
            <Label className="text-xs text-appTextColor font-HeroNewUltraLight">Password</Label>
            <Label className="text-sm font-heroNewLight font-sans text-red-600"> *</Label>
          </div>
          <Controller
            name="password"
            control={control}
            rules={{ required: ValidationForm.Required }}
            render={({ field }) => (
              <PasswordFeild
                className={`rounded-none mt-3 pt-1 pb-1 pl-4 pr-4 h-[48px] text-base border-[1px] text-black  bg-appInputFieldColor ${errors[LoginForm.Password] ? 'border-[#595959]' : 'border-[#d6d6d6]'} ${isSubmitted && errors[LoginForm.Password] ? 'focus:outline-none' : 'focus:outline-none'}`}
                type={showPassword ? 'text' : 'password'} // Password visibility toggle
                placeholder="Password *"
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

        <Button
          onClick={() => setIsForgotPassword(true)}
          type="button"
          className="mt-[12px] p-0 text-start"  
          // className="mt-0 p-0 text-start h-[48px]"
        >
          <span className="bg-none text-appTheme mt-4 text-sm font-HeroNewRegular hover:font-semibold">
            Forgot password?
          </span>
        </Button>

        <div className="flex h-[48px] justify-between items-center w-full">
          <div className="flex-grow" /> {/* This empty div takes up space to push the login button to the right */}

          <Button
            type="submit"
            className="bg-appTheme w-[75px] !h-[48px] text-white p-3 hover:bg-black text-[14px] hover:underline font-HeroNewBold"
          >
            Log in
          </Button>
        </div>
      </form>
    </>
  );
};

export default LoginForms;
