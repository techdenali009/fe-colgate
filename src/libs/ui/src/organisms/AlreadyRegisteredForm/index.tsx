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

  const { control, handleSubmit, formState: { errors, isSubmitted } } = useForm<FormValues>({
    mode: 'onSubmit',
  });

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <>
      <div className="mb-8">
        <p className="text-[32px] pr-3 pl-3 font-HeroNewRegular">Already registered?</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex pr-3 pl-3 flex-col pb-2">
        {/* Email Input */}
        <div className="mb-8 inline-grid">
          <Controller
            name={LoginFormEnum.Email}
            control={control}
            rules={{ required: ValidationForm.Required }}
            render={({ field }) => (
              <InputField
                className={`rounded-none mb-2 h-[48px] pt-1 pl-4 pb-1 pr-4 text-base border-[1px] ${
                  errors[LoginFormEnum.Email] ? 'border-[#595959]' : 'border-[#d6d6d6]'
                } ${isSubmitted && errors[LoginFormEnum.Email] ? 'focus:outline-blue-700' : 'focus:outline-none'}`} // Conditional outline
                type="email"
                placeholder="Email *"
                {...field}
              />
            )}
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
            name={LoginFormEnum.Password}
            control={control}
            rules={{ required: ValidationForm.Required }}
            render={({ field }) => (
              <PasswordFeild
                className={`rounded-none h-[48px] pl-4 pb-1 pr-4  text-base border-[1px] ${
                  errors[LoginFormEnum.Password] ? 'border-[#595959]' : 'border-[#d6d6d6]'
                } ${isSubmitted && errors[LoginFormEnum.Password] ? 'focus:outline-blue-700' : 'focus:outline-none'}`} // Conditional outline
                type={showPassword ? 'text' : 'password'}
                placeholder="Password *"
                {...field}
                onChange={(e) => {
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
              />
            )}
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
            className="bg-appTheme !w-[75px] !h-[48px] text-white p-3 m-1 mb-8 hover:bg-black hover:underline !text-[15px] font-HeroNewSemiBold"
          >
            Log in
          </Button>
        </div>
      </form>
    </>
  );
};

export default AlreadyRegistered;
