import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button } from '@ui/atoms/Button';
import { InputField } from '@ui/molecules/FormField';
import { LoginForm as LoginFormEnum, ValidationForm } from '@utils/Login';
import { PasswordFeild } from '@ui/atoms/PasswordField';

interface FormValues {
  email: string;
  password: string;
}

interface LoginFormProps {
  onSubmit: (data: FormValues) => void;
  setIsForgotPassword: (value: boolean) => void;
}

const AlreadyRegistered: React.FC<LoginFormProps> = ({ onSubmit, setIsForgotPassword }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordFieldEmpty, setIsPasswordFieldEmpty] = useState(true);

  const { control, register, handleSubmit, formState: { errors, isSubmitted } } = useForm<FormValues>({
    mode: 'onSubmit', // Use onSubmit mode to trigger validation only on submit
  });

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <>
      <div className="mb-8">
        <p className="text-[32px] font-HeroNewRegular">Already registered?</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col pb-2">
        {/* Email Input */}
        <div className="mb-8 inline-grid">
          <Controller
            render={({ field }) =>
              <InputField
                className={`rounded-none mb-2 h-[48px] pt-1 pl-4 pb-1 pr-4 text-base border-[1px] ${
                  errors[LoginFormEnum.Email] ? 'border-[#595959]' : 'border-[#d6d6d6]'
                } ${isSubmitted && errors[LoginFormEnum.Email] ? 'focus:outline-blue-700' : 'focus:outline-none'}`} // Conditional outline
                type="email"
                placeholder="Email *"
                {...field}
              />}
            control={control}
            {...register(LoginFormEnum.Email, { required: ValidationForm.Required})}
          />
          {errors[LoginFormEnum.Email] && (
            <span className="text-normal text-appErrorMessage font-HeroNewBold">
              {errors[LoginFormEnum.Email]?.message}
            </span>
          )}
        </div>

        {/* Password Input with Visibility Toggle */}
        <div className="inline-grid">
          <Controller
            render={({ field }) =>
              <PasswordFeild
                className={`rounded-none h-[48px] pb-1 pl-4 pr-4 text-base border-[1px] ${
                  errors[LoginFormEnum.Password] ? 'border-[#595959]' : 'border-[#d6d6d6]'
                } ${isSubmitted && errors[LoginFormEnum.Password] ? 'focus:outline-blue-700' : 'focus:outline-none'}`} // Conditional outline
                type={showPassword ? 'text' : 'password'}
                placeholder="Password *"
                {...field}
                onChange={(e: { target: { value: string; }; }) => {
                  field.onChange(e);
                  setIsPasswordFieldEmpty(e.target.value === '');
                }}
                suffix={(
                  !isPasswordFieldEmpty && (
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="text-gray-600 focus:outline-none"
                    >
                      {showPassword ? 'Hide' : 'Show'}
                    </button>
                  )
                )}
              />}
            control={control}
            {...register(LoginFormEnum.Password, { required: ValidationForm.Required })}
          />
          {errors[LoginFormEnum.Password] && (
            <span className="text-normal text-appErrorMessage font-HeroNewBold mt-3">
              {errors[LoginFormEnum.Password]?.message}
            </span>
          )}
        </div>

        {/* Forgot Password button */}
        <Button
          onClick={() => setIsForgotPassword(false)}
          type={undefined}
          className="mt-2 p-0 text-start"
        >
          <span className='bg-none text-appTheme mb-1 text-sm font-HeroNewRegular font-medium hover:font-semibold'>Forgot your Password?</span>
        </Button>

        <div className="flex justify-between items-center w-full">
          <div className="flex-grow !h-[48px] !w-[75px]" />
          <Button
            type="submit"
            className="bg-appTheme !w-[75px] !h-[48px] text-white p-3 m-1 hover:bg-black hover:underline !text-[15px] font-HeroNewSemiBold"
          >
            Log in
          </Button>
        </div>
      </form>
    </>
  );
};

export default AlreadyRegistered;
