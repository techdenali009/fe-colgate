import AccordionItem from '../AccordianItem';
import { HeaderLabel } from '../HeaderLabel';
import './ProfessionalsAccount.styles.scss'
function ProfessionalsAccount() {

  return (
    <div className="mb-10 w-full">
      <HeaderLabel className="lg:!text-[2.375rem] !text-[1.75rem] font-bold !font-HeroNewBold mb-6 leading-none text-[#555555]">
        Professionals Account
      </HeaderLabel>

      <div className=" items-center">
        <AccordionItem
          title="Why does my professional account need to be confirmed?"
          titleClassName="text-base font-HeroNewLight !pb-0 !pt-6 !px-2 lg:w-full w-56"
          containerClassName="account-svgIconThickness"
          contentClassName="pt-4  pb-6 px-6 bg-white border-t italic"
          className="!p-0 !py-4 !px-4 "
          svgIconClass='!w-[2rem] !h-[0.85rem] mt-6 pl-1.5'
        >
          <div>
            <p>We need to verify all professional licenses to create professional accounts.</p>
            
          </div>
        </AccordionItem>
        <AccordionItem
          title="I forgot the password to my account. What do I do?"
          titleClassName="text-base font-HeroNewLight !pb-0 !pt-6 !px-2 lg:w-full w-56"
          containerClassName="account-svgIconThickness"
          contentClassName="pt-4  px-6 bg-white border-t italic"
          className="!p-0 !px-4 !pb-4" 
          svgIconClass='!w-[2rem] !h-[0.85rem] mt-6 pl-1.5'
        >
          <div>
            <p>You can reset your password by clicking on the link below:<br></br>
              <a href="" className="text-appTheme not-italic ml-1"> https://www.pcaskinpro.com/auth/forgot-password</a>
            </p>
            <p className="py-6">
            If you are still having issues resetting your password, email websupport at <a href="" className="text-appTheme ">websupport@pcaskin.com</a>
            </p>
            
          </div>
        </AccordionItem>
        <AccordionItem
          title="I need to update my account information. How do I do that?"
          titleClassName="text-base font-HeroNewLight !pb-0 !pt-6 !px-2 lg:w-full w-56"
          containerClassName="account-svgIconThickness"
          contentClassName="pt-4 px-6 bg-white border-t italic"
          className="!p-0  !px-4 !pb-4"
          svgIconClass='!w-[2rem] !h-[0.85rem] mt-6 pl-1.5'
        >
          <div>
            <p>First you will need to contact professional sales at 1.877.722.7546 to ensure your changes are made in the main data base.</p>
            
            <p className="py-6">Second, log into your professional online account and make changes. Go to &quot;My Account&quot; to make any changes.</p>
          </div>
        </AccordionItem>
        <AccordionItem
          title="Where can I see my order history?"
          titleClassName="text-base font-HeroNewLight !pb-0 !pt-6 !px-2 lg:w-full w-56"
          containerClassName="account-svgIconThickness"
          contentClassName="pt-4 pb-6 px-6 bg-white border-t italic"
          className="!p-0  !px-4 !pb-8"
          svgIconClass='!w-[2rem] !h-[0.85rem] mt-6 pl-1.5'
        >
          <div>
            <p>You can access your order history in two ways:</p>
            <p>&nbsp;</p>
            <p >1. Log into your online account and go to the &apos;Account Dashboard&apos; page. There, you should be able to find a section that displays your order history.</p>
            <p>&nbsp;</p>
            <p >2. Alternatively, click on the profile icon located in the top right corner of the navigation menu. From the dropdown menu, select &apos;Orders & Invoices&apos; to view your order history.</p>
            <p>&nbsp;</p>
            <p >Either of these methods should allow you to see a record of your past orders.</p>
          </div>
        </AccordionItem>

      </div>
    </div>
  );
}

export default ProfessionalsAccount;