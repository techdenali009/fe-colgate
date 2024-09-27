// /ui/molecules/ForgotPasswordForm.tsx
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button } from '@ui/atoms/Button';
import { Label } from '@ui/atoms/Label';
import Paragraph from '@ui/atoms/Paragraph/paragraph';
import { InputField } from '@ui/molecules/FormField';
import { LoginForm } from '@utils/Login';
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
        <p className="text-[32px] font-HeroNewRegular text-black">Forgot Your Password?</p>
      </div>
      <Paragraph className='font-HeroNewRegular font-normal text-black'>
        <p>Recover your password. Please enter your email address below to receive a password reset link.</p>
        <p>Allow for 15 mins, and check spam/junk folders before trying again.</p>
      </Paragraph>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-1">
        <div className='flex text-xs font-heroNewLight' >
          <Label className=" mt-1 text-xs font-HeroNewRegular">Email</Label>

          <Label className="mt-1 ml-0 text-s font-HeroNewRegular text-red-600"> *</Label>
        </div>
        <Controller
          render={({ field }) =>
            <InputField
              type="email"
              placeholder=""
              className={`rounded-none p-3 !mt-3 !mb-6 text-base border-[1px] ${
                errors[LoginForm.Email] ? 'border-[#595959]' : 'border-[#d6d6d6]'
              } ${isSubmitted && errors[LoginForm.Email] ? 'focus:outline-blue-700' : 'focus:outline-none'}`}
            />
          }
          control={control}
          {...register('email', { required: LoginForm.Message })}
        />
        {errors.email && <span style={{ color: '#ce4635' }} className="text-normal font-HeroNewBold mb-3">{errors.email.message}</span>}

        <div className="flex justify-end items-center">
          <Button
            onClick={() => setIsForgotPassword(false)} // Go to Already Registered form
            className="bg-none mb-8  text-[14px] text-blue-600"
            type='submit'
          >
            <span className='text-!sm  font-HeroNewRegular hover:font-semibold'>
              Return to Log In
            </span>
          </Button>
          <Button
            type="submit"
            className="bg-blue-600 text-[14px] text-white p-3 mb-8  hover:bg-black hover:underline font-HeroNewBold"
          >
            Reset My Password
          </Button>
        </div>
      </form>
    </>
  );
};

export default ForgotPasswordForm;
