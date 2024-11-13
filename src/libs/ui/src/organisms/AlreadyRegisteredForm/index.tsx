import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button } from '@ui/atoms/Button';
import { InputField } from '@ui/molecules/FormField';
import { LoginForm, ValidationForm } from '@utils/Login';
import { PasswordFeild } from '@ui/atoms/PasswordField';
import { AlreadyRegisteredConstants } from './AlreadyRegisteredConts';
import { FORGOTPASSWORD, LOGIN } from '@utils/constants';
import { useLoginMutation } from '@store/services/Endpoints/AuthApi';
import { useDispatch } from 'react-redux';
import { setAuthToken, userInfo } from '@store/services/Slices/authSlice';
import { AppSpinner } from '@ui/atoms/AppSpinner';

interface FormValues {
  email: string;
  password: string;
}

interface LoginFormProps {
  onSubmit: (data: FormValues) => void;
  setIsForgotPassword: (value: boolean) => void;
  mode: string;
}
interface LoginData {
  email?: string;
  password?: string;
}

const AlreadyRegistered: React.FC<LoginFormProps> = ({ setIsForgotPassword, mode }) => {
  const [login, { isLoading, isError }] = useLoginMutation();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordFieldEmpty, setIsPasswordFieldEmpty] = useState(true);
  const onSubmit = async (data: LoginData) => {
    try {
      const result = await login(data).unwrap();
      if (result.status) {
        dispatch(userInfo(result.data.userInfo));
        dispatch(setAuthToken(result.data.token));
      } else {
        console.error('Login failed:', result);
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };
  const { control, handleSubmit, formState: { errors, isSubmitted } } = useForm<FormValues>({
    mode: 'onChange',
  });

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  const { formClassName, textClassName, buttonClassName, modalButtonClassName, welcomepagebutton, LoginForgotPassword, LoginButton, mainDivClass } = AlreadyRegisteredConstants(mode);
  return (
    <div className={`relative ${isLoading ? 'opacity-50' : 'opacity-100'}`}>
      <div className={textClassName}>
        <p >Already registered?</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col pb-2">
        {/* Email Input */}
        <div className={formClassName}>
          <div className={mainDivClass}>
            <Controller
              name={LoginForm.Email}
              control={control}
              rules={{ required: ValidationForm.Required }}
              render={({ field }) => (
                <InputField
                  {...field}
                  className={`rounded-none mb-2 h-[48px] pt-1 pl-4 pb-1 pr-4 text-base border-[1px] text-black bg-appInputFieldColor ${mode === 'modal' ? '' : 'placeholder-slate-700 text-black font-HeroNewRegular mb-[20px]'} ${errors[LoginForm.Email] ? 'border-[#595959]' : 'border-[#d6d6d6]'
                  } ${isSubmitted && errors[LoginForm.Email] ? 'focus:outline-none' : 'focus:outline-none'}`} // Conditional outline
                  type="email"
                  placeholder="Email *"

                />
              )}
            />
            {errors.email && (
              <span className="text-appErrorMessage text-normal font-HeroNewBold">{ValidationForm.Required}</span>
            )}
            <div className={`${!isError ? 'hidden' : 'h-0 2xs:mb-5 lg:!mb-0'}`}>
              <span className="text-normal text-appErrorMessage font-HeroNewBold mt-1 ">
                {ValidationForm.EmailPasswordFailed}
              </span>
            </div>
          </div>

          {/* Password Input with Visibility Toggle */}
          <div className="inline-grid">
            <Controller
              name={LoginForm.Password}
              control={control}
              rules={{ required: ValidationForm.Required }}
              render={({ field }) => (
                <PasswordFeild
                  className={`rounded-none h-[48px] pb-1 pl-4 pr-4 text-base border-[1px] text-black bg-appInputFieldColor ${mode === 'modal' ? '' : 'placeholder-slate-700 font-HeroNewRegular mb-[12px]'} ${errors[LoginForm.Password] ? 'border-[#595959]' : 'border-[#d6d6d6]'
                  } ${isSubmitted && errors[LoginForm.Password] ? 'focus:outline-none' : 'focus:outline-none'}`} // Conditional outline
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password *"
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    setIsPasswordFieldEmpty(e.target.value === '');
                  }}
                  suffix={(
                    !isPasswordFieldEmpty && mode === 'modal' ? (
                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="text-gray-600 focus:outline-none"
                      >
                        {showPassword ? 'hide' : 'show'}
                      </button>
                    ) : ''
                  )}
                />
              )}
            />
            {errors[LoginForm.Password] && (
              <span className="text-normal text-appErrorMessage font-HeroNewBold mt-3">
                {errors[LoginForm.Password]?.message}
              </span>
            )}

          </div>
        </div>
        {isLoading && (
          <div className='opacity-60 '>
            <AppSpinner containerClassName="!h-[150px] !w-[100%] !bg-transparent flex justify-center items-center absolute inset-0" spinnerClassName="!bg-red-300 w-[10%]" />
          </div>
        )}
        {/* Forgot Password button */}
        <div className={buttonClassName}>
          <div className={modalButtonClassName}>
            <Button

              type="submit"
              className={LoginButton}
            >
              {LOGIN}
            </Button>
          </div>

          <Button
            onClick={() => setIsForgotPassword(false)}
            type='button'
          >
            <span className={LoginForgotPassword}>
              {FORGOTPASSWORD}
            </span>
          </Button>

        </div>
        <div className={welcomepagebutton}>
          <Button
            type='submit'
            className={LoginButton}
          >
            {LOGIN}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AlreadyRegistered;