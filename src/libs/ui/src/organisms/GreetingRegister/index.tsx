import { CreateAccountButton } from '@ui/atoms/CreateAccountButton';
import { Heading } from '@ui/atoms/Heading';
import Paragraph from '@ui/atoms/Paragraph/paragraph';
import { CREATEACCOUNT, WELCOMEGREETPARA, WELCOMEMSG } from '@utils/constants';
import WelcomeAlreadyRegistered from '@ui/molecules/WelcomeRegister';
import { useState } from 'react';
import ForgotPasswordForm from '@ui/molecules/ForgotPasswordModal';
import { LoginConsts } from '@utils/Login';
import { useNavigate } from 'react-router-dom';


const GreetRegister: React.FC = () => {
  const [currentForm, setCurrentForm] = useState<'login' | 'forgotPassword' | 'alreadyRegistered'>('alreadyRegistered');
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const onSubmit = (data:any) => {
    console.log('data onSubmit', data);
  };

  const navigate = useNavigate();
  function handleRegisterClick(): void {
    navigate('auth/register');
  }
  

  return(
    <div className=" px-6 flex flex-col gap:4 lg:flex-row pb-8 p-16 lg:mx-8 lg:px-14  gap-8 pt-12 text-left">
      <div className="basis-1/2 lg:pt-0 ">
        <Heading className="text-black text-[24px] font-normal font-HeroNewRegular">{WELCOMEMSG}</Heading>
        <Paragraph className="text-[14px]  text-[rgb(85,85,85)] mt-2 mb-6">
          {WELCOMEGREETPARA}
        </Paragraph>
        <CreateAccountButton className='text-left text-[16px] font-HeroNewBold !px-5 !py-3' onClick={handleRegisterClick}>{CREATEACCOUNT}</CreateAccountButton>
      </div>
    
      <hr className="border-gray-400  lg:hidden" />

      <div className="basis-1/2  pt-6 lg:pt-0">
        {currentForm === LoginConsts.ForgotPassword && (
          <ForgotPasswordForm 
            onSubmit={onSubmit} 
            className={'font-HeroNewRegular !mb-0 2xs:!px-0'}
            setIsForgotPassword={() => setCurrentForm('alreadyRegistered')} 
            headclassname='!text-2xl !px-0'
          />
        )}
        {currentForm === LoginConsts.AlreadyRegistered && (
          <WelcomeAlreadyRegistered 
            onSubmit={onSubmit} 
            setIsForgotPassword={() => setCurrentForm('forgotPassword')} 
          />
        )}
      </div>
    </div>
  )
};
export default GreetRegister;