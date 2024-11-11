import Paragraph from '@ui/atoms/Paragraph/paragraph';
import AccordionItem from '../AccordianItem';
import { HeaderLabel } from '../HeaderLabel';
import './OrdersShipping.styles.scss'

import { StrongText } from '../StrongText';
function OrdersShipping() {
  return (
    <div className="mb-14">
      <HeaderLabel className="lg:!text-[2.375rem] text-2xl font-bold font-HeroNewBold mb-6 leading-none text-[#555555] dark:text-appTextColor">
        Orders & Shipping
      </HeaderLabel>
      <div className=" items-center">
        <AccordionItem
          title="Can I add items to my order after it has been submitted online?"
          titleClassName="text-base font-HeroNewLight !pb-0 !pt-6 !px-2 lg:w-full w-56"
          containerClassName="orderandshipping-svgIconThickness"
          contentClassName="pt-4  pb-6 px-6  border-t italic"
          className="!p-0 !py-4 !px-4 "
          svgIconClass='!w-[2rem] !h-[0.85rem] mt-6 pl-1.5'
        >
          <div>
            <Paragraph>No, once an order has been submitted online, you cannot add items to it. Any additional items you wish to purchase would need to be placed as a separate, new order.</Paragraph>
            
          </div>
        </AccordionItem>
        <AccordionItem
          title="I placed an online order but got a promotion code the next day, can I apply to my existing order?"
          titleClassName="text-base font-HeroNewLight !pb-0 !pt-6 !px-2 lg:w-full w-56"
          containerClassName="orderandshipping-svgIconThickness"
          contentClassName="pt-4  pb-12 px-6  border-t italic"
          className="!p-0 !pb-4 !px-4 "
          svgIconClass='!w-[2rem] !h-[0.85rem] mt-6 pl-1.5'
        >
          <div>
            <Paragraph className="">No, promotion codes cannot be applied to existing orders once they are submitted.</Paragraph>
            
          </div>
        </AccordionItem>
        <AccordionItem
          title="I saw a promo code on the consumer site, why can't I use it – I am a loyal PCA SKIN Professional?"
          titleClassName="text-base font-HeroNewLight !pb-0 !pt-6 !px-2 lg:w-full w-56"
          containerClassName="orderandshipping-svgIconThickness"
          contentClassName="pt-4  pb-6 px-6  border-t italic"
          className="!p-0 !pb-4 !px-4 "
          svgIconClass='!w-[2rem] !h-[0.85rem] mt-6 pl-1.5'
        >
          <div>
            <Paragraph>If a promo code was set up for MSRP orders, it won&quot; work for orders placed at wholesale pricing.</Paragraph>
            
          </div>
        </AccordionItem>
        <AccordionItem
          title="How can I track my package?"
          titleClassName="text-base font-HeroNewLight !pb-0 !pt-6 !px-2 "
          containerClassName="orderandshipping-svgIconThickness"
          contentClassName="pt-4  pb-6 px-6  border-t italic"
          className="!p-0 !pb-4 !px-4 "
          svgIconClass='!w-[2rem] !h-[0.85rem] mt-6 pl-1.5'
        >
          <div>
            <Paragraph>To track your package, you will receive a shipping confirmation email containing your Fed Ex tracking number. If you haven&apot received the email within two business days, please check your junk/spam folder, as it might have landed there based on your email account settings.</Paragraph>
            
          </div>
        </AccordionItem>
        <AccordionItem
          title="When will my package arrive?"
          titleClassName="text-base font-HeroNewLight !pb-0 !pt-6 !px-2 "
          containerClassName="orderandshipping-svgIconThickness"
          contentClassName="pt-4  pb-6 px-6  border-t italic"
          className="!p-0 !pb-4 !px-4 "
          svgIconClass='!w-[2rem] !h-[0.85rem] mt-6 pl-1.5'
        >
          <div>
            <Paragraph>The delivery time of your package depends on the shipping option you chose and the time of day you placed your order. Here&apos; a breakdown of the expected arrival times based on when you placed your order:</Paragraph>
            <Paragraph>&nbsp;</Paragraph>
            <Paragraph>BEFORE NOON:</Paragraph>
            <Paragraph>&nbsp;</Paragraph>
            <Paragraph><StrongText className="strong">Standard Overnight: </StrongText>Ships same day, arrives the next business day by 3:00 pm (metro) or 4:30 pm (rural).</Paragraph>
            <Paragraph><StrongText className="strong">Second Day:</StrongText> Ships same day, arrives in 2 business days by 4:30 pm (metro) or 7:30 pm (rural).</Paragraph>
            <Paragraph><StrongText className="strong">Express Saver:</StrongText> Ships same day, arrives in 3 business days by 4:30 pm (metro) or 7:30 pm (rural).</Paragraph>
            <Paragraph><StrongText className="strong">Ground: Ships</StrongText> same day, arrival time varies based on location and FedEx Transit time.</Paragraph>
            <Paragraph>&nbsp;</Paragraph>
            <Paragraph>AFTER NOON:</Paragraph>
            <Paragraph>&nbsp;</Paragraph>
            <Paragraph><StrongText className="strong">Standard Overnight: </StrongText> Ships next day, arrives in 2 business days by 3:00 pm (metro) or 4:30 pm (rural).</Paragraph>
            <Paragraph><StrongText className="strong">Second Day:</StrongText> Ships next day, arrives in 3 business days by 4:30 pm (metro) or 7:30 pm (rural).</Paragraph>
            <Paragraph><StrongText className="strong">Express Saver:</StrongText> Ships next day, arrives in 4 business days by 4:30 pm (metro) or 7:30 pm (rural).</Paragraph>
            <Paragraph><StrongText className="strong">Ground: Ships</StrongText>Ships next day, arrival time varies based on location and FedEx Transit Time.</Paragraph>
            <Paragraph>&nbsp;</Paragraph>
            <Paragraph>Please note that Saturday delivery is not available for all shipping options and destinations. If you placed an expedited order after noon, it will be shipped the next day according to the corresponding timeframes mentioned above.</Paragraph>
          </div>
        </AccordionItem>
      </div>
    </div>
  );
}

export default OrdersShipping;