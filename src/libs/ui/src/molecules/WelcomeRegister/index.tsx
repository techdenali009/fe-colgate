import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button } from '@ui/atoms/Button';
import { InputField } from '@ui/molecules/FormField';
import { LoginForm } from '@utils/Login';
import { PasswordFeild } from '@ui/atoms/PasswordFeild';

interface FormValues {
  email: string;
  password: string;

}

interface LoginFormProps {
  onSubmit: (data: FormValues) => void;
  setIsForgotPassword: (value: boolean) => void; // Passed from parent to control the modal state
  className?: string;
}

const WelcomeAlreadyRegistered: React.FC<LoginFormProps> = ({ onSubmit, setIsForgotPassword}) => {
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
      <div className=''>
        <div className="">
          <p className="text-2xl font-HeroNewRegular pt-1">Already registered?</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col lg:flex-row gap-2">
          {/* Email Input */}
          <div className="flex flex-col lg:flex-row gap-2 w-full">
            <div className="flex-1">
              <Controller
                render={({ field }) => (
                  <InputField
                    className="rounded-none p-3 text-base border-[1px] border-[#d6d6d6] mt-3 mb-6 placeholder-slate-700 placeholder:font-HeroNewLight focus:outline-none"
                    type="email"
                    placeholder="Email *"
                    {...field}
                  />
                )}
                control={control}
                {...register(LoginForm.Email, { required: 'This field is required' })}
              />
              {errors[LoginForm.Email] && (
                <span style={{ color: '#ce4635' }} className="text-base font-HeroNewBold mb-3">
                  {errors[LoginForm.Email]?.message}
                </span>
              )}
            </div>

            {/* Password Input with Visibility Toggle */}
            <div className="flex-1">
              <Controller
                render={({ field }) => (
                  <PasswordFeild
                    className="rounded-none p-3 text-base text-neutral-200 border-[1px] border-[#d6d6d6] mt-3 mb-6 placeholder-slate-700 focus:outline-none"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password *"
                    {...field}
                    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
                    onChange={(e:any) => {
                      field.onChange(e);
                      setIsPasswordFieldEmpty(e.target.value === '');
                    }}
                    suffix={
                      !isPasswordFieldEmpty && (
                        <button
                          type="button"
                          onClick={togglePasswordVisibility}
                          className="text-gray-600 focus:outline-none"
                        >
                          {showPassword ? 'Hide' : 'Show'}
                        </button>
                      )
                    }
                  />
                )}
                control={control}
                {...register(LoginForm.Password, { required: 'This field is required' })}
              />
              {errors.password && (
                <span style={{ color: '#ce4635' }} className="text-base font-HeroNewBold mb-3">
                  {errors[LoginForm.Password]?.message}
                </span>
              )}
            </div>
          </div>

          {/* Forgot Password and Submit Button */}
          <div className="flex flex-col lg:flex-row lg:items-center mt-2 justify-self-end">
            <Button
              onClick={() => setIsForgotPassword(false)}
              type="button"
              className="p-0 text-start mb-2 lg:mb-0 lg:mr-2"
            >
              <span className='bg-none text-blue-700 text-sm font-HeroNewRegular font-medium hover:underline hover:font-bold'>
          Forgot your password?
              </span>
            </Button>

            <Button
              type="submit"
              className="bg-blue-700 text-white p-3 hover:bg-black hover:underline font-bold lg:w-24"
            >
        Log in
            </Button>
          </div>
        </form>
      </div>

    </>
  );
};

export default WelcomeAlreadyRegistered;
