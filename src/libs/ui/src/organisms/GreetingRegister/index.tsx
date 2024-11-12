import { CreateAccountButton } from '@ui/atoms/CreateAccountButton';
import { Heading } from '@ui/atoms/Heading';
import Paragraph from '@ui/atoms/Paragraph/paragraph';
import { CREATEACCOUNT, WELCOMEGREETPARA, WELCOMEMSG } from '@utils/constants';
import { useState } from 'react';
import ForgotPasswordForm from '@ui/molecules/ForgotPasswordForm';
import { LoginConsts } from '@utils/Login';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useLoginMutation } from '@store/services/Endpoints/AuthApi';
import { setAuthToken, userInfo } from '@store/services/Slices/authSlice';
import { AppSpinner } from '@ui/atoms/AppSpinner';
import AlreadyRegistered from '../AlreadyRegisteredForm';
interface LoginData {
  email?: string;
  password?: string;
}
const GreetRegister: React.FC = () => {
  const [currentForm, setCurrentForm] = useState<
    'login' | 'forgotPassword' | 'alreadyRegistered'
  >('alreadyRegistered');
   
  const dispatch = useDispatch();

  const [login, { isLoading,isError }] = useLoginMutation();
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

  const navigate = useNavigate();
  function handleRegisterClick(): void {
    navigate('auth/register');
  }
  //Use this attribute  forshowing the  'invalid email and password' in modal
  console.log('isError',isError);
  return(
    <div className=" px-6 flex flex-col gap:4 lg:flex-row 2xs:!pb-4 p-16 lg:mx-8 lg:px-14  gap-8 pt-12 text-left">
      <div className="basis-1/2 lg:pt-0 ">
        <Heading className="text-appTextColor text-[24px] font-normal font-HeroNewRegular">
          {WELCOMEMSG}
        </Heading>
        <Paragraph className="text-[14px]  text-[rgb(85,85,85)] mt-2 mb-6 dark:text-appTextColor">
          {WELCOMEGREETPARA}
        </Paragraph>
        <CreateAccountButton
          className="text-left text-[16px] font-HeroNewBold !px-5 !py-3"
          onClick={handleRegisterClick}
        >
          {CREATEACCOUNT}
        </CreateAccountButton>
      </div>

      <hr className="border-gray-400  lg:hidden" />

      <div className="basis-1/2  pt-6 2xs:pt-0">
        {currentForm === LoginConsts.ForgotPassword && (
          <ForgotPasswordForm
            onSubmit={onSubmit}
            className={'font-HeroNewRegular !mb-0 2xs:!px-0'}
            setIsForgotPassword={() => setCurrentForm('alreadyRegistered')} 
            headclassname='!text-2xl !px-0'
          />
        )}
        {currentForm === LoginConsts.AlreadyRegistered && (
          <div className="relative">
            <div className={isLoading ? 'opacity-50' : 'opacity-100'}>
              <AlreadyRegistered
                onSubmit={onSubmit}
                setIsForgotPassword={() => setCurrentForm('forgotPassword')} mode={'welcome'}              />
               
            </div>
           
            {isLoading && (
              <AppSpinner containerClassName="!h-[150px] flex justify-center items-center absolute inset-0" />
            )}
            
            
          </div>
        )}
       
      </div>
    </div>
  );
};
export default GreetRegister;
