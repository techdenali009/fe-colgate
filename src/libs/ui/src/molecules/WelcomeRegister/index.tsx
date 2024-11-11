import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button } from '@ui/atoms/Button';
import { InputField } from '@ui/molecules/FormField';
import { PasswordFeild } from '@ui/atoms/PasswordField';
import { FORGOTPASSWORD, LOGIN } from '@utils/constants';

interface FormValues {
  email: string;
  password: string;
}

interface LoginFormProps {
  onSubmit: (data: FormValues) => void;
  setIsForgotPassword: (value: boolean) => void;
}

const WelcomeAlreadyRegistered: React.FC<LoginFormProps> = ({ onSubmit, setIsForgotPassword }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordFieldEmpty, setIsPasswordFieldEmpty] = useState(true);

  const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
    mode: 'onChange',
  });

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className=''>
      <div className="">
        <p className="text-2xl font-HeroNewRegular pt-[5px]">Already registered?</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col lg:flex">
        <div className='flex flex-col lg:grid grid-cols-2 gap-2'>
          {/* Email Field */}
          <div className="inline-grid">
            <div className='w-full relative '>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <InputField
                    className="rounded-none py-3 w-full px-[16px] text-base border-[1px] border-[#d6d6d6] mt-3 mb-6 placeholder-slate-700  bg-appInputFieldColor placeholder:font-HeroNewLight text-black focus:outline-none"
                    type="email"
                    placeholder="Email *"
                    {...field}
                  />
                )}
                rules={{ required: 'This field is required' }}
              />
              {errors.email && (
                <span style={{ color: '#ce4635' }} className="text-normal font-bold mb-3 font-HeroNewBold">
                  {errors.email.message}
                </span>
              )}
            </div>
          </div>

          {/* Password Field */}
          <div className="inline-grid">
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <PasswordFeild
                  className="rounded-none py-3 px-[16px]  text-base border-[1px] border-[#d6d6d6] text-black mt-3 mb-6 placeholder-slate-700 placeholder:text-sm focus:outline-none  bg-appInputFieldColor"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password *"
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    setIsPasswordFieldEmpty(e.target.value === '');
                  }}
                  suffix={!isPasswordFieldEmpty && (
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="text-gray-600 focus:outline-none"
                    >
                      {/* {showPassword ? 'Hide' : 'Show'} */}
                    </button>
                  )}
                />
              )}
              rules={{ required: 'This field is required' }}
            />
            {errors.password && (
              <span style={{ color: '#ce4635' }} className="text-normal font-bold mb-3 font-HeroNewBold">
                {errors.password.message}
              </span>
            )}
          </div>

          {/* Buttons */}
          <div className="flex flex-row gap-4 row-span-1  justify-self-end lg:flex-row-reverse lg:items-center lg:row-span-1 col-span-2 lg:justify-self-end">
            <Button type="submit" className=" bg-appTheme text-white p-3 lg:m-1 mb-[10px] mt-[10px] hover:bg-black hover:underline font-bold">
              {LOGIN}
            </Button>
            <Button
              onClick={() => setIsForgotPassword(true)}
              type="button"
              className="p-0 text-start  "
            >
              <span className="bg-none text-appTheme text-sm font-HeroNewRegular font-medium hover:underline hover:font-bold  ">
                {FORGOTPASSWORD}
              </span>
            </Button>
          </div>
        </div> 
      </form>
    </div>
  );
};

export default WelcomeAlreadyRegistered;
