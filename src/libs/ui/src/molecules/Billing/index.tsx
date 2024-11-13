
import Paragraph from '@ui/atoms/Paragraph/paragraph';
import AccordionItem from '../AccordianItem'
import { HeaderLabel } from '../HeaderLabel'
import './Billing.styles.scss'
const ACCOUNTING_EMAIL=import.meta.env.VITE_ACCOUNTING_EMAIL;
const SALESTAX_EMAIL=import.meta.env.VITE_SALESTAX_EMAIL;
const PHONE_NO=import.meta.env.VITE_PHONE_NO;
const INFO_EMAIL=import.meta.env.VITE_INFO_EMAIL;

function Billing() {
  return (
    <div className="mb-10  pt-4">
      <HeaderLabel className="lg:!text-[2.375rem] text-2xl font-bold font-HeroNewBold mb-6 leading-none text-[#555555] dark:text-appTextColor">
       Billing
      </HeaderLabel>
      <AccordionItem
        title="How do I set-up credit terms with PCA SKIN?"
        titleClassName="text-base font-HeroNewLight !pb-0 !pt-6 !px-2 lg:w-full w-56"
        containerClassName="billing-svgIconThickness"
        contentClassName="pt-4  pb-6 px-6  border-t italic"
        className="!p-0 !py-4 !px-4 "
        svgIconClass='!w-[2rem] !h-[0.85rem] mt-6 pl-1.5'
      >
        <div>
          <Paragraph>To set up credit terms with PCA SKIN, follow these steps:</Paragraph>
          <Paragraph>&nbsp;</Paragraph>
          <ol className="ml-8 list-decimal">
            <li>Fill out the credit application form provided by PCA SKIN. You can find the application form on their website or obtain it through their representative.</li>
            <li>Complete all the required information in the credit application form accurately.</li>
            <li>Submit the filled-out credit application via email to {ACCOUNTING_EMAIL}. Make sure to attach any necessary supporting documents if requested.</li>
            <li>Please be aware that the application review process may take up to two weeks, during which PCA SKIN will assess your creditworthiness and eligibility for the 30-day credit term.</li>
          </ol>
          <Paragraph>&nbsp;</Paragraph>
          <Paragraph>If you have any questions or need further assistance, don&apos;t hesitate to reach out to PCA SKIN&apos;s accounting department or their customer support team.</Paragraph>
        </div>
      </AccordionItem>
      <AccordionItem
        title="How do I submit my Resellers Certificate with PCA SKIN?"
        titleClassName="text-base font-HeroNewLight !pb-0 !pt-6 !px-2 lg:w-full w-56"
        containerClassName="billing-svgIconThickness"
        contentClassName="pt-4  pb-6 px-6  border-t italic"
        className="!p-0 !pb-4 !px-4 "
        svgIconClass='!w-[2rem] !h-[0.85rem] mt-6 pl-1.5'
      >
        <div>
          <Paragraph>To submit your Resellers Certificate with PCA SKIN, follow these steps:</Paragraph>
          <Paragraph>&nbsp;</Paragraph>
          <ol className="ml-8 list-decimal">
            <li>Ensure that you have an active Resellers Certificate with your state. This certificate exempts you from paying sales tax on qualifying purchases for resale purposes.</li>
            <li>Make a copy or scan of your Resellers Certificate form as required by your state.</li>
            <li>Email the copy of your Resellers Certificate to {SALESTAX_EMAIL}.</li>
            <li>Please be aware that the Tax Exempt review process may take up to two weeks, during which PCA SKIN will verify the validity of your Resellers Certificate and update your account accordingly.</li>
          </ol>
          <Paragraph>&nbsp;</Paragraph>
          <Paragraph>If you have any questions or need further assistance, feel free to reach out to PCA SKIN&apos;s sales tax department or their customer support team.</Paragraph>
        </div>
      </AccordionItem>
      <AccordionItem
        title="How do I get a copy of my invoice?"
        titleClassName="text-base font-HeroNewLight !pb-0 !pt-6 !px-2 lg:w-full w-56"
        containerClassName="billing-svgIconThickness"
        contentClassName="pt-4  pb-6 px-6  border-t italic"
        className="!p-0 !pb-4 !px-4 "
        svgIconClass='!w-[2rem] !h-[0.85rem] mt-6 pl-1.5'
      >
        <div>
          <Paragraph>To obtain a copy of your invoice from PCA SKIN, you have multiple options:</Paragraph>
          <Paragraph>&nbsp;</Paragraph>
          <ol className="ml-8 list-disc">
            <li>Call {PHONE_NO} and request a copy of your invoice. Make sure to provide your customer account number for reference.</li>
            <li>Send an email inquiry to {INFO_EMAIL}, requesting a copy of your invoice. Again, include your customer account number in the email for easy identification.</li>
            <li>Access your account on the PCA SKIN website and click on the profile icon located in the top right corner of the navigation menu. From the dropdown menu, select &apoOrders & Invoices&apo to view and download your invoices.</li>
          </ol>
          <Paragraph>&nbsp;</Paragraph>
          <Paragraph>Using any of these methods, you should be able to obtain the necessary invoice documentation.</Paragraph>
        </div>
      </AccordionItem>
    </div>
  )
}

export default Billing