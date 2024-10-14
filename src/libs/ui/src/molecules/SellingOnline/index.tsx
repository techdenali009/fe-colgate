import AccordionItem from '../AccordianItem';
import { HeaderLabel } from '../HeaderLabel';
import './SellingOnline.styles.scss'
function SellingOnline() {
  return (
    <div className="mb-10">
      <HeaderLabel className="lg:!text-[2.375rem] text-2xl font-bold font-HeroNewBold mb-6 leading-none text-[#555555]">
        Selling Online
      </HeaderLabel>
      <div className="items-center">
        <AccordionItem
          title="Can I sell PCA SKIN products on my website?"
          titleClassName="text-base font-HeroNewLight !pb-0 !pt-6 !px-2 lg:w-full w-56"
          containerClassName="sellingonline-svgIconThickness"
          contentClassName="pt-4  pb-6 px-6 bg-white border-t italic"
          className="!p-0 !py-4 !px-4 "
          svgIconClass='!w-[2rem] !h-[0.85rem] mt-6 pl-1.5'
        >
          <div>
            <p>
            PCA SKIN sells high quality, clinical grade skincare products through physicians&apos; offices, spas and resorts in the United States. PCA SKIN wishes to protect the prestige and reputation of their products by ensuring they are only sold through reputable retail e-commerce sites.
            </p>
            <p>&nbsp;</p>
            <p>The PCA SKIN® online sales policy has been created to ensure consistent standards for PCA SKIN customers who are selling or would like to sell PCA SKIN daily care products over the internet. Please review the policy here for more information: Online Sales Policy PDF.</p>
          
          </div>
        </AccordionItem>

        <AccordionItem
          title="Why are your products being sold on websites like ebay.com or Walmart.com at a fraction of the price?"
          titleClassName="text-base font-HeroNewLight !pb-0 !pt-6 !px-2 lg:w-full w-56"
          containerClassName="sellingonline-svgIconThickness"
          contentClassName="pt-4  pb-6 px-6 bg-white border-t italic"
          className="!p-0 !pb-8 !px-4 "
          svgIconClass='!w-[2rem] !h-[0.85rem] mt-6 pl-1.5'
        >
          <div>
            <p>We are aware that our products are being re-sold on sites like ebay.com. We often receive inquiries in regards to whether this is an authorized retailer of ours. The answer to this question is no.</p>
            <p>&nbsp;</p>
            <br />
            <p>Like many other beauty brands, PCA SKIN&apos;s products can end up online or on the shelves of unauthorized retailers. We do not guarantee any products purchased through an unauthorized seller, as the product may be expired, diluted, counterfeit and may not be safe to use. These products fall outside of our warranty and we cannot return or replace them.</p>
            <br />
            <br />
            <p>We have a zero tolerance policy towards unauthorized sellers and take immediate action when they are discovered. As a standard practice, PCA SKIN:</p>
            <br />
         
            <div>
              <ul className="list-block list-disc ml-8">
                <li>does not sell to unauthorized retailers</li>
                <li>monitors global sales online to identify fraudulent accounts</li>
                <li>has an internal department that conducts surveillance and investigates fraudulent accounts</li>
                <li>actively monitors unusual buying patterns</li>
                <li>immediately shuts down any accounts found to be diverting products to unauthorized selling locations</li>
                <li>in conjunction with a law firm, takes legal action to pursue the closing of unauthorized online stores</li>
              </ul>
            </div>
            <p>&nbsp;</p>
            <p>If you suspect that a seller is unauthorized, you can report them to us for investigation at <a href="#" className="text-appTheme">info@pcaskin.com</a></p>
          </div>
        </AccordionItem>

      </div>
    </div>
  );
}

export default SellingOnline;