import Paragraph from '@ui/atoms/Paragraph/paragraph'
import AccordionItem from '../AccordianItem'
import { HeaderLabel } from '../HeaderLabel'
import './Returns.styles.scss'
function Returns() {
  return (
    <div className="mb-14">
      <HeaderLabel className="lg:!text-[2.375rem] text-2xl font-bold font-HeroNewBold mb-6 leading-none text-[#555555] dark:text-appTextColor">
      Returns
      </HeaderLabel>
      <AccordionItem
        title="My client purchased a product through me and wants to return it, do they contact PCA directly?"
        titleClassName="text-base font-HeroNewLight !pb-0 !pt-6 !px-2 lg:w-full w-56"
        containerClassName="return-svgIconThickness"
        contentClassName="pt-4  pb-6 px-6  border-t italic"
        className="!p-0 !py-4 !px-4 "
        svgIconClass='!w-[2rem] !h-[0.85rem] mt-6 pl-1.5'
      >
        <div>
          <Paragraph>No, your client should not contact PCA directly for returns.You, as the seller, are responsible for processing the return as &quot;patient dissatisfaction&quot; within 4 months of purchase. You will cover the shipping costs, and a credit will be applied to your account for future purchases.</Paragraph>
            
        </div>
      </AccordionItem>
       
      <AccordionItem
        title=" Can I return products that haven't been opened?"
        titleClassName="text-base font-HeroNewLight !pb-0 !pt-6 !px-2 lg:w-full w-56"
        containerClassName="return-svgIconThickness"
        contentClassName="pt-4  pb-6 px-6  border-t italic"
        className="!p-0 !pb-4 !px-4 "
        svgIconClass='!w-[2rem] !h-[0.85rem] mt-6 pl-1.5'
      >
        <div>
          <Paragraph>Yes, unopened products can be returned within 60 days, but a 20% restocking fee will be deducted from the credit applied to your account.</Paragraph>  
        </div>
      </AccordionItem>
      <AccordionItem
        title="My shipment arrived damaged, can I get a replacement?"
        titleClassName="text-base font-HeroNewLight !pb-0 !pt-6 !px-2 lg:w-full w-56"
        containerClassName="return-svgIconThickness"
        contentClassName="pt-4  pb-6 px-6  border-t italic"
        className="!p-0 !pb-4 !px-4 "
        svgIconClass='!w-[2rem] !h-[0.85rem] mt-6 pl-1.5'
      >
        <div>
          <Paragraph>Yes. We will need to receive the products back first. A return label will be sent to cover shipping costs, and we must receive the return first before sending the replacement.</Paragraph>
            
        </div>
      </AccordionItem>
      <AccordionItem
        title="My shipment arrived and the packaging is defective (leaking/cracked/not dispensing), can I get a replacement/credit?"
        titleClassName="text-base font-HeroNewLight !pb-0 !pt-6 !px-2 lg:w-full w-56"
        containerClassName="return-svgIconThickness"
        contentClassName="pt-4  pb-6 px-6  border-t italic"
        className="!p-0 !pb-4 !px-4 "
        svgIconClass='!w-[2rem] !h-[0.85rem] mt-6 pl-1.5'
      >
        <div>
          <Paragraph>Yes, you can get a replacement or credit for the defective items in your shipment. We will provide an immediate replacement for the affected item(s) and do not require you to return the defective items. Please contact us as soon as possible to arrange for the replacement or credit.</Paragraph>
            
        </div>
      </AccordionItem>
      <AccordionItem
        title="My shipment arrived and the quality of the formula is questionable (consistency/smell etc.). Can I get a replacement/credit?"
        titleClassName="text-base font-HeroNewLight !pb-0 !pt-6 !px-2 lg:w-full w-56"
        containerClassName="return-svgIconThickness"
        contentClassName="pt-4  pb-6 px-6  border-t italic"
        className="!p-0 !pb-4 !px-4 "
        svgIconClass='!w-[2rem] !h-[0.85rem] mt-6 pl-1.5'
      >
        <div>
          <Paragraph>Yes. A return label will be sent and we must receive the return first before sending replacement.</Paragraph>
            
        </div>
      </AccordionItem>
       
      <AccordionItem
        title="I/my client experienced an adverse reaction (itching/rash/burning) to a product.Can I return it for a replacement/credit?"
        titleClassName="text-base font-HeroNewLight !pb-0 !pt-6 !px-2 lg:w-full w-56"
        containerClassName="return-svgIconThickness"
        contentClassName="pt-4  pb-6 px-6  border-t italic"
        className="!p-0 !pb-4 !px-4 "
        svgIconClass='!w-[2rem] !h-[0.85rem] mt-6 pl-1.5'
      >
        <div>
          <Paragraph>Yes, you can return the product for a replacement or credit if you or your client experienced an adverse reaction. We will send a return label, and we must receive the items back before issuing the credits or replacements.</Paragraph>
        </div>
      </AccordionItem>
       
      <AccordionItem
        title=" Do you refund or exchange expired product?"
        titleClassName="text-base font-HeroNewLight !pb-0 !pt-6 !px-2 lg:w-full w-56"
        containerClassName="return-svgIconThickness"
        contentClassName="pt-4  pb-6 px-6  border-t italic"
        className="!p-0 !pb-4 !px-4 "
        svgIconClass='!w-[2rem] !h-[0.85rem] mt-6 pl-1.5'
      >
        <div>
          <Paragraph>No</Paragraph>
        </div>
      </AccordionItem>

     
      <AccordionItem
        title="   What is a lot number and where can I can find it?"
        titleClassName="text-base font-HeroNewLight !pb-0 !pt-6 !px-2 lg:w-full w-56"
        containerClassName="return-svgIconThickness"
        contentClassName="pt-4  pb-6 px-6  border-t italic"
        className="!p-0 !pb-4 !px-4 "
        svgIconClass='!w-[2rem] !h-[0.85rem] mt-6 pl-1.5'
      >
        <div>
          <Paragraph>The lot number is a series of numbers located on the bottom of the packaging. We will need that to be able to process a return.</Paragraph>
            
        </div>
      </AccordionItem>

    
      <AccordionItem
        title="   What is a lot number and where can I can find it?"
        titleClassName="text-base font-HeroNewLight !pb-0 !pt-6 !px-2 lg:w-full w-56"
        containerClassName="return-svgIconThickness"
        contentClassName="pt-4  pb-6 px-6  border-t italic"
        className="!p-0 !pb-4 !px-4 "
        svgIconClass='!w-[2rem] !h-[0.85rem] mt-6 pl-1.5'
      >
        <div>
          <Paragraph>PCA SKIN, 15820 N 84th St. Suite 200, Scottsdale, AZ 85260</Paragraph>
            
        </div>
      </AccordionItem>

    </div>
  )
}

export default Returns