import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button } from '@ui/atoms/Button';
import { InputField } from '@ui/molecules/FormField';
import { LoginForm } from '@utils/Login';
import { PasswordFeild } from '@ui/atoms/PasswordFeild';
import { FORGOTPASSWORD, LOGIN } from '@utils/constants';

interface FormValues {
  email: string;
  password: string;

}

interface LoginFormProps {
  onSubmit: (data: FormValues) => void;
  setIsForgotPassword: (value: boolean) => void; // Passed from parent to control the modal state
  className?: string;
}

const WelcomeAlreadyRegistered: React.FC<LoginFormProps> = ({ onSubmit, setIsForgotPassword }) => {
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
      <div className='' >
        <div className="">
          <p className="text-2xl
            font-HeroNewRegular pt-1">Already Registered?
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col lg:flex   ">
          {/* Email Input */}
          <div className='flex flex-col lg:grid grid-cols-2 gap-2'>
            <div className="inline-grid">
              <Controller
                render={({ field }) =>
                  <InputField
                    className="rounded-none p-3 text-base border-[1px] border-[#d6d6d6]  mt-3 mb-6 placeholder-slate-700 placeholder:font-HeroNewLight focus:outline-none lg:px-4 "
                    type="email"
                    placeholder="Email *"
                    {...field}
                  />
                  // eslint-disable-next-line  react/jsx-curly-newline
                }
                control={control}
                {...register(LoginForm.Email, { required: 'This field is required' })}
              />
              {errors[LoginForm.Email] && (
                <span style={{ color: '#ce4635' }} className="text-normal font-bold mb-3">
                  {errors[LoginForm.Email]?.message}
                </span>
              )}
            </div>

            {/* Password Input with Visibility Toggle */}
            <div className="inline-grid">
              <Controller
                render={({ field }) =>
                  <PasswordFeild
                    className="rounded-none p-3 text-base text-neutral-200 border-[1px] border-[#d6d6d6]  mt-3 mb-6 placeholder-slate-700 focus:outline-none"
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
                  // eslint-disable-next-line  react/jsx-curly-newline
                }
                control={control}
                {...register(LoginForm.Password, { required: 'This field is required' })}
              />

              {errors.password && (
                <span style={{ color: '#ce4635' }} className="text-normal font-bold mt-3">
                  {errors[LoginForm.Password]?.message}
                </span>
              )}
            </div>

            <div className="flex flex-row  gap-4 row-span-1 items-start justify-self-end lg:flex-row-reverse lg:items-center lg:row-span-1 col-span-2 lg:justify-self-end lg:gap-0 ">
              <Button 
                type="submit"
                className="bg-blue-700 text-white p-3 lg:m-1 mb-0 hover:bg-black hover:underline font-bold"
              >
                {LOGIN}
              </Button>
              <Button
                onClick={() => setIsForgotPassword(false)}
                type={undefined}
                className="mt-3 p-0 text-start"
              >
                <span className="bg-none text-blue-700 text-sm font-HeroNewRegular font-medium hover:underline hover:font-bold">{FORGOTPASSWORD}</span>
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default WelcomeAlreadyRegistered;
