import AccordionItem from '../AccordianItem';
import { HeaderLabel } from '../HeaderLabel';
import './ContactUs.styles.scss'
function ContactUs() {
  return (
    <div className="mb-10">
      <HeaderLabel className="lg:!text-[2.375rem] text-2xl font-bold font-HeroNewBold mb-6 leading-none text-[#555555]">
        Contact Us
      </HeaderLabel>
      <div className="items-center">
        <AccordionItem
          title="Where to contact us? "
          titleClassName="text-base font-HeroNewLight !pb-0 !pt-6 !px-2 lg:w-full w-56"
          containerClassName="svgIconThickness"
          contentClassName="pt-4  pb-6 px-6 bg-white border-t italic"
          className="!p-0 !pt-4 !pb-8 !px-4 "
          svgIconClass='!w-[2rem] !h-[0.85rem] mt-6 pl-1.5'
        >
          <div>
            <p>We’re proud to partner with you, no matter what comes your way! There’s no question too big or too small.</p>
            <p><strong className="font-bold font-HeroNewBold">PCA SKIN</strong>  Customer Service Representatives are available Monday-Friday, 7am - 5pm AZ time. 
              <strong className="font-bold font-HeroNewBold">877.PCA.SKIN [877.722.7546]</strong>
            </p>
            <p>Prefer to send a message? Email us at: <a href="#" className="text-appTheme">PCASKIN@CPSkinHealth.com</a>. We’ll be sure to get back to you in under 2 business days.</p>
            <p><a href="#" className="text-appTheme">See our FAQs</a> here</p>
          </div>
        </AccordionItem>
      </div>
    </div>
  );
}

export default ContactUs;