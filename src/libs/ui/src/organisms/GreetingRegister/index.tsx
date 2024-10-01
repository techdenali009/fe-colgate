import { CreateAccountButton } from '@ui/atoms/CreateAccountButton';
import { Heading } from '@ui/atoms/Heading';
import Paragraph from '@ui/atoms/Paragraph/paragraph';
import { CREATEACCOUNT, WELCOMEGREETPARA, WELCOMEMSG } from '@utils/constants';
import WelcomeAlreadyRegistered from '@ui/molecules/WelcomeRegister';

const GreetRegister: React.FC = () => (
  <div className=" px-7 flex flex-col gap:4 lg:flex-row pb-8 p-16   lg:mx-8 lg:px-14  gap-8 pt-12 text-left">
    <div className="basis-1/2 lg:pt-0 ">
      <Heading className="text-black text-[24px] font-normal font-HeroNewRegular">{WELCOMEMSG}</Heading>
      <Paragraph className="text-[14px]  text-[rgb(85,85,85)] mt-2 mb-6">
        {WELCOMEGREETPARA}
      </Paragraph>
      <CreateAccountButton className="text-left text-[16px] font-HeroNewBold !px-5 !py-3">{CREATEACCOUNT}</CreateAccountButton>
    </div>
    
    <hr className="border-gray-400  lg:hidden" />

    <div className="basis-1/2  pt-6 lg:pt-0">
      <WelcomeAlreadyRegistered
        onSubmit={function (): void {
          throw new Error('Function not implemented.');
        }}
         
        setIsForgotPassword={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    </div>
  </div>
);
export default GreetRegister;