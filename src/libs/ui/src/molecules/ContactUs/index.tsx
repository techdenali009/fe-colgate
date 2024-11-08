import Paragraph from '@ui/atoms/Paragraph/paragraph';
import AccordionItem from '../AccordianItem';
import { HeaderLabel } from '../HeaderLabel';
import './ContactUs.styles.scss'

import { StrongText } from '../StrongText';
import Anchor from '../Anchor';
const WEBSITE_EMAIL=import.meta.env.VITE_WEBSITE_EMAIL;
const PHONE_NO=import.meta.env.VITE_PHONE_NO;

function ContactUs() {
  return (
    <div className="mb-14">
      <HeaderLabel className="lg:!text-[2.375rem] text-2xl font-bold font-HeroNewBold mb-6 leading-none text-[#555555] dark:text-appTextColor">
        Contact Us
      </HeaderLabel>
      <div className="items-center">
        <AccordionItem
          title="Where to contact us? "
          titleClassName="text-base font-HeroNewLight !pb-0 !pt-6 !px-2 lg:w-full w-56"
          containerClassName="svgIconThickness"
          contentClassName="pt-4  pb-6 px-6  border-t italic"
          className="!p-0 !py-4  !px-4 "
          svgIconClass='!w-[2rem] !h-[0.85rem] mt-6 pl-1.5'
        >
          <div>
            <Paragraph>We’re proud to partner with you, no matter what comes your way! There’s no question too big or too small.</Paragraph>
            <Paragraph><StrongText className="strong">PCA SKIN</StrongText>  Customer Service Representatives are available Monday-Friday, 7am - 5pm AZ time. 
              <StrongText className="strong">877.PCA.SKIN <br /> [{PHONE_NO}]</StrongText>
            </Paragraph>
            <Paragraph>Prefer to send a message? Email us at: <Anchor href="#" className="!text-[1rem]">{WEBSITE_EMAIL}</Anchor>. We’ll be sure to get back to you in under 2 business days.</Paragraph>
            <Paragraph><Anchor href="#" className="!text-[1rem]">See our FAQs</Anchor> here</Paragraph>
          </div>
        </AccordionItem>
      </div>
    </div>
  );
}

export default ContactUs;