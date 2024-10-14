import AccordionItem from '../AccordianItem';
import { HeaderLabel } from '../HeaderLabel';
import './OrdersShipping.styles.scss'
function OrdersShipping() {
  return (
    <div className="mb-10">
      <HeaderLabel className="lg:!text-[2.375rem] text-2xl font-bold font-HeroNewBold mb-6 leading-none text-[#555555]">
        Orders & Shipping
      </HeaderLabel>
      <div className=" items-center">
        <AccordionItem
          title="Can I add items to my order after it has been submitted online?"
          titleClassName="text-base font-HeroNewLight !pb-0 !pt-6 !px-2 lg:w-full w-56"
          containerClassName="orderandshipping-svgIconThickness"
          contentClassName="pt-4  pb-6 px-6 bg-white border-t italic"
          className="!p-0 !py-4 !px-4 "
          svgIconClass='!w-[2rem] !h-[0.85rem] mt-6 pl-1.5'
        >
          <div>
            <p>No, once an order has been submitted online, you cannot add items to it. Any additional items you wish to purchase would need to be placed as a separate, new order.</p>
            
          </div>
        </AccordionItem>
        <AccordionItem
          title="I placed an online order but got a promotion code the next day, can I apply to my existing order?"
          titleClassName="text-base font-HeroNewLight !pb-0 !pt-6 !px-2 lg:w-full w-56"
          containerClassName="orderandshipping-svgIconThickness"
          contentClassName="pt-4  pb-12 px-6 bg-white border-t italic"
          className="!p-0 !pb-4 !px-4 "
          svgIconClass='!w-[2rem] !h-[0.85rem] mt-6 pl-1.5'
        >
          <div>
            <p className="">No, promotion codes cannot be applied to existing orders once they are submitted.</p>
            
          </div>
        </AccordionItem>
        <AccordionItem
          title="I saw a promo code on the consumer site, why can't I use it – I am a loyal PCA SKIN Professional?"
          titleClassName="text-base font-HeroNewLight !pb-0 !pt-6 !px-2 lg:w-full w-56"
          containerClassName="orderandshipping-svgIconThickness"
          contentClassName="pt-4  pb-6 px-6 bg-white border-t italic"
          className="!p-0 !pb-4 !px-4 "
          svgIconClass='!w-[2rem] !h-[0.85rem] mt-6 pl-1.5'
        >
          <div>
            <p>If a promo code was set up for MSRP orders, it won&quot; work for orders placed at wholesale pricing.</p>
            
          </div>
        </AccordionItem>
        <AccordionItem
          title="How can I track my package?"
          titleClassName="text-base font-HeroNewLight !pb-0 !pt-6 !px-2 "
          containerClassName="orderandshipping-svgIconThickness"
          contentClassName="pt-4  pb-6 px-6 bg-white border-t italic"
          className="!p-0 !pb-4 !px-4 "
          svgIconClass='!w-[2rem] !h-[0.85rem] mt-6 pl-1.5'
        >
          <div>
            <p>To track your package, you will receive a shipping confirmation email containing your Fed Ex tracking number. If you haven&apot received the email within two business days, please check your junk/spam folder, as it might have landed there based on your email account settings.</p>
            
          </div>
        </AccordionItem>
        <AccordionItem
          title="When will my package arrive?"
          titleClassName="text-base font-HeroNewLight !pb-0 !pt-6 !px-2 "
          containerClassName="orderandshipping-svgIconThickness"
          contentClassName="pt-4  pb-6 px-6 bg-white border-t italic"
          className="!p-0 !pb-8 !px-4 "
          svgIconClass='!w-[2rem] !h-[0.85rem] mt-6 pl-1.5'
        >
          <div>
            <p>The delivery time of your package depends on the shipping option you chose and the time of day you placed your order. Here&apos; a breakdown of the expected arrival times based on when you placed your order:</p>
            <p>&nbsp;</p>
            <p>BEFORE NOON:</p>
            <p>&nbsp;</p>
            <p><strong className="font-HeroNewBold">Standard Overnight: </strong>Ships same day, arrives the next business day by 3:00 pm (metro) or 4:30 pm (rural).</p>
            <p><strong className="font-HeroNewBold">Second Day:</strong> Ships same day, arrives in 2 business days by 4:30 pm (metro) or 7:30 pm (rural).</p>
            <p><strong className="font-HeroNewBold">Express Saver:</strong> Ships same day, arrives in 3 business days by 4:30 pm (metro) or 7:30 pm (rural).</p>
            <p><strong className="font-HeroNewBold">Ground: Ships</strong> same day, arrival time varies based on location and FedEx Transit time.</p>
            <p>&nbsp;</p>
            <p>AFTER NOON:</p>
            <p>&nbsp;</p>
            <p><strong className="font-HeroNewBold">Standard Overnight: </strong> Ships next day, arrives in 2 business days by 3:00 pm (metro) or 4:30 pm (rural).</p>
            <p><strong className="font-HeroNewBold">Second Day:</strong> Ships next day, arrives in 3 business days by 4:30 pm (metro) or 7:30 pm (rural).</p>
            <p><strong className="font-HeroNewBold">Express Saver:</strong> Ships next day, arrives in 4 business days by 4:30 pm (metro) or 7:30 pm (rural).</p>
            <p><strong className="font-HeroNewBold">Ground: Ships</strong>Ships next day, arrival time varies based on location and FedEx Transit Time.</p>
            <p>&nbsp;</p>
            <p>Please note that Saturday delivery is not available for all shipping options and destinations. If you placed an expedited order after noon, it will be shipped the next day according to the corresponding timeframes mentioned above.</p>
          </div>
        </AccordionItem>
      </div>
    </div>
  );
}

export default OrdersShipping;