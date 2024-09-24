import { PrimaryButtonClickablecurve } from "@ui/atoms/Clickablebuttoncurve";
import { Heading } from "@ui/atoms/Heading";
import Paragraph from "@ui/atoms/Paragraph/paragraph";
import { PrimaryButton } from "@ui/molecules/PrimaryButton";
import { WELCOMEFORMMSG,WELCOMEGREETPARA, WELCOMEMSG } from "@utils/constants";

const GreetRegister: React.FC = () => (
  <div className="p-11 mx-8 gap-8 pt-12 flex text-left basis-1/2">
    <div className=" flex flex-col">
      <Heading className="text-black text-[25px] font-medium leading-relaxed">{WELCOMEMSG}</Heading>
      <Paragraph className="text-[rgba(85,85,85,var(--tw-text-opacity))] text-opacity-100 text-[15px]  mt-2 mb-6 font-medium">
        {WELCOMEGREETPARA}
      </Paragraph>
      <PrimaryButtonClickablecurve className="text-left font-bold text-[20px]">Create Account</PrimaryButtonClickablecurve>
    </div>

    <div className="pt-6 lg:pt-0 relative">
      <Heading className="text-black text-[24px] font-normal">{WELCOMEFORMMSG}</Heading>
      <div className="text-right">
        
        <PrimaryButton>Login</PrimaryButton>
      </div>
    </div>
  </div>

);
export default GreetRegister;