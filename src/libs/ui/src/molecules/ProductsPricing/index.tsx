import Paragraph from '@ui/atoms/Paragraph/paragraph'
import AccordionItem from '../AccordianItem'
import { HeaderLabel } from '../HeaderLabel'
import './ProductsPricing.styles.scss'

import { StrongText } from '../StrongText'
function ProductsPricing() {
  return (
    <div className="mb-14">
      <HeaderLabel className="lg:!text-[2.375rem] text-2xl font-bold font-HeroNewBold mb-6 leading-none text-[#555555] dark:text-appTextColor">
       Products & Pricing
      </HeaderLabel>
      <div className="items-center">

        <AccordionItem
          title="Are all your products available for all customers?"
          titleClassName="text-base font-HeroNewLight !pb-0 !pt-6 !px-2 lg:w-full w-56"
          containerClassName="productpricing-svgIconThickness"
          contentClassName="pt-4  pb-6 px-6  border-t italic"
          className="!p-0 !py-4 !px-4 "
          svgIconClass='!w-[2rem] !h-[0.85rem] mt-6 pl-1.5'
        >
          <div>
            <Paragraph>Only daily care products are available for all customers. You must be a PCA SKIN Certified Professional to order professional products.</Paragraph>
            
          </div>
        </AccordionItem>

     
        <AccordionItem
          title="I'm a student and not yet Certified. Will I be able to purchase your products?"
          titleClassName="text-base font-HeroNewLight !pb-0 !pt-6 !px-2 lg:w-full w-56"
          containerClassName="productpricing-svgIconThickness"
          contentClassName="pt-4  pb-6 px-6  border-t italic"
          className="!p-0 !pb-4 !px-4 "
          svgIconClass='!w-[2rem] !h-[0.85rem] mt-6 pl-1.5'
        >
          <div>
            <Paragraph>Yes, as a student who is not yet certified, you can still purchase PCA SKIN products. Please call professional sales at 1.877.PCA.SKIN [722.7546] to get a student account opened. Once you have your account number, you will be able to create an online account and access wholesale pricing for your purchases.</Paragraph>
            
          </div>
        </AccordionItem>

       
        <AccordionItem
          title=" What types of physicians only peels does PCA SKIN offer and how can I purchase these peels?"
          titleClassName="text-base font-HeroNewLight !pb-0 !pt-6 !px-2 lg:w-full w-56"
          containerClassName="productpricing-svgIconThickness"
          contentClassName="pt-4  pb-6 px-6  border-t italic"
          className="!p-0 !pb-4 !px-4 "
          svgIconClass='!w-[2rem] !h-[0.85rem] mt-6 pl-1.5'
        >
          <div>
            <Paragraph>PCA SKIN offers several physician-only peels, including Ultra Peel Forte®, 6% Pure Retinol Peel, and Intensive Pigment Eraser. These peels are exclusively available for purchase by medical providers such as medical doctors, nurse practitioners, or physician assistants.</Paragraph>
            
          </div>
        </AccordionItem>
      

        <AccordionItem
          title="Where can I find the pricing for your products?"
          titleClassName="text-base font-HeroNewLight !pb-0 !pt-6 !px-2 lg:w-full w-56"
          containerClassName="productpricing-svgIconThickness"
          contentClassName="pt-4  pb-8 px-6  border-t italic"
          className="!p-0 !pb-4 !px-4 "
          svgIconClass='!w-[2rem] !h-[0.85rem] mt-6 pl-1.5'
        >
          <div>
            <Paragraph>Contact a <StrongText className="font-bold font-HeroNewBold">PCA SKIN®</StrongText>  Customer Service Representatives at 877.PCA.SKIN [877.722.7546]</Paragraph> 
          </div>
        </AccordionItem>
      </div>
    </div>
  )
}

export default ProductsPricing