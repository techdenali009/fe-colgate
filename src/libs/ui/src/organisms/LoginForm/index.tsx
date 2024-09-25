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

  const { control, register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    mode: 'onChange',
  });

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <>
      <div className="mb-8">
        <p className="text-33px font-normal font-HeroNewRegular">Customer Login</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        {/* Email Input */}
        <div className="mb-3 inline-grid">
          <div className='flex text-xs' >
            <Label className="mb-3 mt-1 text-xs font-HeroNewUltraLight">Email</Label>

            <Label className="mb-3 ml-0 text-sm font-heroNewLight,font-sans text-red-600"> *</Label>
          </div>

          <Controller
            render={({ field }) =>
              <InputField
                className="rounded-none p-3 text-base border-slate-200 border-2"
                type="email"
                placeholder="Email *" {...field}
              />
            }
            control={control}
            {...register(LoginFormEnum.Email, { required: LoginForm.Message })}

          />
        </div>
        {errors[LoginFormEnum.Email] && (
          <span style={{ color: '#ce4635' }} className="text-normal font-bold mb-3">
            {errors[LoginFormEnum.Email]?.message}
          </span>
        )}


        {/* Password Input with Visibility Toggle */}
        <div className="inline-grid">
          <div className='flex text-xs'>
            <Label className="mb-3 mt-4 text-xs text-black font-HeroNewUltraLight">Password</Label>

            <Label className="mt-3 text-sm font-heroNewLight,font-sans text-red-600"> *</Label>
          </div>
          <Controller
            render={({ field }) =>
              <PasswordFeild
                className="rounded-none p-3 text-base text-neutral-200 border-2"
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
            <span style={{ color: '#ce4635' }} className="text-normal font-bold mt-3">
              {errors[LoginFormEnum.Password]?.message}
            </span>
          )}
        </div>

        <Button
          onClick={() => setIsForgotPassword(true)}
          type={undefined}
          className="mt-2 p-0 text-start"
        >
          <span className='bg-none text-blue-700 text-sm font-heroNewLight font-medium hover:font-semibold'>Forgot Password?</span>
        </Button>

        <div className="flex justify-between items-center w-full">
          <div className="flex-grow" /> {/* This empty div takes up space to push the login button to the right */}

          <Button
            type="submit"
            className="bg-blue-700 text-white p-3 m-1 mb-8 hover:bg-black hover:underline font-bold"
          >
            Log in
          </Button>
        </div>
      </form>
    </>
  );
};

export default LoginForms;
