import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button } from '@ui/atoms/Button';
import { Label } from '@ui/atoms/Label';
import { LoginForm, LoginForm as LoginFormEnum } from '@utils/Login';
import { PasswordFeild } from '@ui/atoms/PasswordField';
import { InputField } from '@ui/molecules/FormField'
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

  const { control, register, handleSubmit, formState: { errors, isSubmitted } } = useForm<FormValues>({
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
          <div className='flex text-xs' >
            <Label className="text-xs font-HeroNewUltraLight">Email</Label>

            <Label className="ml-0 text-sm font-heroNewLight,font-sans text-red-600"> *</Label>
          </div>

          <Controller
            render={({ field }) =>
              <InputField
                className={`rounded-none pt-1 pb-1 pl-4 pr-4 mt-3 mb-6 h-[48px] text-base border-[1px] ${errors[LoginFormEnum.Email] ? 'border-[#595959]' : 'border-[#d6d6d6]'
                  } ${isSubmitted && errors[LoginFormEnum.Email] ? 'focus:outline-blue-700' : 'focus:outline-none'}`}
                type="email"
                placeholder="Email *" {...field}
              />
            }
            control={control}
            {...register(LoginFormEnum.Email, { required: LoginForm.Message })}

          />
        </div>
        {errors[LoginFormEnum.Email] && (
          <span style={{ color: '#ce4635' }} className="text-normal font-HeroNewBold mb-3">
            {errors[LoginFormEnum.Email]?.message}
          </span>
        )}


        {/* Password Input with Visibility Toggle */}
        <div className="inline-grid">
          <div className='flex text-xs'>
            <Label className="text-xs text-black font-HeroNewUltraLight">Password</Label>

            <Label className="text-sm font-heroNewLight,font-sans text-red-600"> *</Label>
          </div>
          <Controller
            render={({ field }) =>
              <PasswordFeild
                className={`rounded-none mt-3 mb-[13px]  pt-1 pb-1 pl-4 pr-4 h-[48px] text-base border-[1px] ${errors[LoginFormEnum.Email] ? 'border-[#595959]' : 'border-[#d6d6d6]'
                  } ${isSubmitted && errors[LoginFormEnum.Email] ? 'focus:outline-blue-700' : 'focus:outline-none'}`}
                type={showPassword ? 'text' : 'password'} // Password visibility toggle
                placeholder="Password *"
                {...field}
                onChange={(e: { target: { value: string; }; }) => {
                  field.onChange(e);
                  setIsPasswordFieldEmpty(e.target.value === ''); // Check if the field is empty
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
            }
            control={control}
            {...register(LoginFormEnum.Password, { required: LoginForm.Message })}
          />

          {errors.password && (
            <span style={{ color: '#ce4635' }} className="text-normal font-HeroNewBold   mt-3">
              {errors[LoginFormEnum.Password]?.message}
            </span>
          )}
        </div>

        <Button
          onClick={() => setIsForgotPassword(true)}
          type={undefined}
          className="mt-0 p-0 text-start"
        >
          <span className='bg-none text-blue-700 text-sm font-HeroNewRegular hover:font-semibold'>Forgot password?</span>
        </Button>

        <div className="flex justify-between items-center w-full">
          <div className="flex-grow" /> {/* This empty div takes up space to push the login button to the right */}

          <Button
            type="submit"
            className="bg-blue-600 w-[75px] h-[48px] text-white p-3 m-1 mt-8 mb-10 hover:bg-black text-[14px] hover:underline font-HeroNewBold"
          >
            Log in
          </Button>
        </div>
      </form>
    </>
  );
};

export default LoginForms;
