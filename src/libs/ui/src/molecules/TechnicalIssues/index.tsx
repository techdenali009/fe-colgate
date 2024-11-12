
import Paragraph from '@ui/atoms/Paragraph/paragraph';
import AccordionItem from '../AccordianItem';
import { HeaderLabel } from '../HeaderLabel';
import './TechnicalIssues.styles.scss'

import Anchor from '../Anchor';
const websupport=import.meta.env.VITE_WEBSUPPORT;
const NEWWEBSITE=import.meta.env.VITE_NEW_WEBSITE;
const PHONE_NO=import.meta.env.VITE_PHONE_NO;

function TechnicalIssues() {
  return (
    <div className="mb-14">
      <HeaderLabel className="lg:!text-[2.375rem] text-2xl font-bold font-HeroNewBold mb-6 leading-none text-[#555555] dark:text-appTextColor">
        Technical Issues
      </HeaderLabel>
      <div className="items-center">
        <AccordionItem
          title="What do I do if I have trouble with my online account?"
          titleClassName="text-base font-HeroNewLight !pb-0 !pt-6 !px-2 lg:w-full w-56"
          containerClassName="technical-svgIconThickness"
          contentClassName="pt-4  pb-6 px-6  border-t italic"
          className="!p-0 !py-4 !px-4 "
          svgIconClass='!w-[2rem] !h-[0.85rem] mt-6 pl-1.5'
        >
          <div>
            <Paragraph>If you are experiencing issues with your online account please call {PHONE_NO} and select Option 1 for Professionals, then select Option 3 for Technical Assistance. </Paragraph>
          </div>
        </AccordionItem>
        <AccordionItem
          title="I forgot the password to my account. What do I do?"
          titleClassName="text-base font-HeroNewLight !pb-0 !pt-6 !px-2 lg:w-full w-56"
          containerClassName="technical-svgIconThickness"
          contentClassName="pt-4  pb-6 px-6  border-t italic"
          className="!p-0 !pb-4 !px-4 "
          svgIconClass='!w-[2rem] !h-[0.85rem] mt-6 pl-1.5'
        >
          <div>
            <Paragraph>If you are experiencing issues with your online account please call {PHONE_NO} and select Option 1 for Professionals, then select Option 3 for Technical Assistance. If you are a licensed professional, you can reset your password by clicking on the link below in registration: </Paragraph>
            <Paragraph>{NEWWEBSITE}</Paragraph>
            <Paragraph>If you are still having issues resetting your password, email websupport at <Anchor href="#" className="!text-[1rem]">{websupport}</Anchor></Paragraph>
          </div>
        </AccordionItem>
      
        <AccordionItem
          title="  Why is your website slow?"
          titleClassName="text-base font-HeroNewLight !pb-0 !pt-6 !px-2 lg:w-full w-56"
          containerClassName="technical-svgIconThickness"
          contentClassName="pt-4  pb-6 px-6  border-t italic"
          className="!p-0 !pb-4 !px-4 "
          svgIconClass='!w-[2rem] !h-[0.85rem] mt-6 pl-1.5'
        >
          <div>
            <Paragraph>It could be your browser. We recommend that you have the latest version of your preferred browser</Paragraph>
          </div>
        </AccordionItem>
     
        <AccordionItem
          title="Your website keeps saying my shipping address is not valid or international, why?"
          titleClassName="text-base font-HeroNewLight !pb-0 !pt-6 !px-2 lg:w-full w-56"
          containerClassName="technical-svgIconThickness"
          contentClassName="pt-4  pb-6 px-6  border-t italic"
          className="!p-0 !pb-4 !px-4 "
          svgIconClass='!w-[2rem] !h-[0.85rem] mt-6 pl-1.5'
        >
          <div>
            <Paragraph>When entering your zip code, do not change the auto-populated city. As long as the zip code is correct, your shipment will get to the right destination.</Paragraph>
          </div>
        </AccordionItem>

        <AccordionItem
          title="Your website keeps saying my credit card is invalid, why?"
          titleClassName="text-base font-HeroNewLight !pb-0 !pt-6 !px-2 lg:w-full w-56"
          containerClassName="technical-svgIconThickness"
          contentClassName="pt-4  pb-6 px-6  border-t italic"
          className="!p-0 !pb-4 !px-4 "
          svgIconClass='!w-[2rem] !h-[0.85rem] mt-6 pl-1.5'
        >
          <div>
            <Paragraph>We only ship domestically which means the credit card used cannot be international. Sometimes we also experience that the billing address is not entered correctly. If this is not the case, and it&apos;s still not working, please call your financial institution for assistance.</Paragraph>
          </div>
        </AccordionItem>

      </div>
    </div>
  );
}

export default TechnicalIssues;