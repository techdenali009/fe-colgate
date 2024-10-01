// /ui/molecules/ForgotPasswordForm.tsx
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button } from '@ui/atoms/Button';
import { Label } from '@ui/atoms/Label';
import Paragraph from '@ui/atoms/Paragraph/paragraph';
import { InputField } from '@ui/molecules/FormField';
import { LoginForm, ValidationForm } from '@utils/Login';
interface ForgotPasswordFormProps {
  onSubmit: (data: { email: string }) => void;
  setIsForgotPassword: (value: boolean) => void;
}

const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = ({ onSubmit, setIsForgotPassword }) => {
  const { control, register, handleSubmit, formState: { errors,isSubmitted } } = useForm<{ email: string }>({
    mode: 'onChange',
  });

  return (
    <>
      <div className="mb-8">
        <p className="text-[32px] pr-3 pl-3 font-HeroNewRegular text-black">Forgot Your Password?</p>
      </div>
      <Paragraph className='font-HeroNewRegular pr-3 pl-3 font-normal text-black'>
        <p>Recover your password. Please enter your email address below to receive a password reset link.</p>
        <p>Allow for 15 mins, and check spam/junk folders before trying again.</p>
      </Paragraph>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col pr-3 pl-3 space-y-1">
        <div className='flex text-xs font-heroNewLight' >
          <Label className=" mt-2 text-xs font-HeroNewRegular">Email</Label>

          <Label className="mt-2 ml-0 text-s font-HeroNewRegular text-red-600"> *</Label>
        </div>
        <Controller
          render={({ field }) =>
            <InputField
              className={`rounded-none pt-1 pb-1 pl-4 pr-4 !mt-3 !mb-6 h-[48px] text-base border-[1px] ${errors[LoginForm.Email] ? 'border-[#595959]' : 'border-[#d6d6d6]'
              } ${isSubmitted && errors[LoginForm.Email] ? 'focus:outline-none' : 'focus:outline-none'}`}
              type="email"
              placeholder="" {...field}
            />}
          control={control}
          {...register(LoginForm.Email, { required: ValidationForm.Required })}

        />
        {errors.email && <span className="text-appErrorMessage text-normal font-HeroNewBold">{ValidationForm.Required}</span>}

        <div className="flex justify-end items-center">
          <Button
            onClick={() => setIsForgotPassword(false)} // Go to Already Registered form
            className="bg-none mb-8  text-[14px] text-blue-600"
            type='submit'
          >
            <span className='text-!sm mr-4 font-HeroNewRegular hover:font-semibold'>
              Return to Log In
            </span>
          </Button>
          <Button
            type="submit"
            className="bg-appTheme text-[14px] text-white p-3 mb-10  hover:bg-black hover:underline font-HeroNewBold"
          >
            Reset My Password
          </Button>
        </div>
      </form>
    </>
  );
};

export default ForgotPasswordForm;