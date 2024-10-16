import AnchorLink from '@ui/atoms/AnchorLink'
import Paragraph from '@ui/atoms/Paragraph/paragraph'
import Strong from '@ui/atoms/Strong'
import { HeaderLabel } from '@ui/molecules/HeaderLabel'

function ShippingTerms() {
  return (
    <div className="flex flex-col items-center">
      <HeaderLabel className="text-appTheme lg:text-[2.375rem] leading-10 font-extralight text-[1.75rem] font-HeroNewUltraLight text-center justify-center mb-6">Shipping Terms</HeaderLabel>     
      <div className="w-[48rem] font-normal text-[1rem]  max-w-full mb-6">  
        <ul className="my-4 ml-6 list-disc mb-4">
          <li>Shipping terms only apply to domestic orders.</li>
          <li>For questions on International orders, please <AnchorLink className="text-appTheme" href="#">contact us</AnchorLink></li>
          <li>Shipments are sent Monday through Friday each week, excluding major holidays.</li>
          <li>Orders are processed within two business days of being placed.</li>
          <li>Delivery options are calculated based on <Strong className="font-HeroNewBold">business days</Strong>.</li>
          <li>Saturday delivery not available for all shipping options and destinations.</li>
        </ul>
        <div className="text-center ">
          <HeaderLabel className="!text-[36px] !p-0 leading-normal font-HeroNewRegular font-normal ">UPS - Shipping Times</HeaderLabel>    
        </div>
        <Paragraph>&nbsp;</Paragraph>
        <table className="w-[1260.02px]  text-start max-w-full table-fixed  font-SansSerif ">
          <thead className=''>
            <tr className="bg-black text-white ">
              <th className="text-left align-bottom py-[1em] px-[15px] tracking-[0.65px] !font-semibold">Shipping Method</th>
              <th className="text-left align-bottom py-[1em] px-[15px] tracking-[0.4px] !font-semibold">Delivery Time</th>
            </tr>
          </thead>
          <tbody className='text-slate-700'>
            <tr>
              <th className="text-left align-top py-[1em] px-[15px] text-[1.4rem]"><span className="text-[16px] !font-normal ">Standard</span></th>
              <th className="text-left align-top py-[1em] px-[15px] text-[1.4rem]"><span className="text-[16px]  !font-normal">3-7 business days</span></th>
            </tr>
            <tr className="bg-[#eff2f4]">
              <th className="text-left align-top py-[1em] px-[15px] text-[1.4rem]"><span className="text-[16px]  !font-normal">Express Saver</span></th>
              <th className="text-left align-top py-[1em] px-[15px] text-[1.4rem]"><span className="text-[16px]  !font-normal">3 business days</span></th>
            </tr>
            <tr className="">
              <th className="text-left align-top py-[1em] px-[15px] text-[1.4rem]"><span className="text-[16px]  !font-normal">2 Day</span></th>
              <th className="text-left align-top py-[1em] px-[15px] text-[1.4rem]"><span className="text-[16px]  !font-normal">2 business days</span></th>
            </tr>
            <tr className="bg-[#eff2f4]">
              <th className="text-left align-top py-[1em] px-[15px] text-[1.4rem]"><span className="text-[16px]  !font-normal">Standard Overnight</span></th>
              <th className="text-left align-top py-[1em] px-[15px] text-[1.4rem]"><span className="text-[16px]  !font-normal">1 business days</span></th>
            </tr>
            <tr className="">
              <th className="text-left align-top py-[1em] px-[15px] text-[1.4rem]"><span className="text-[16px]  !font-normal">Priority Overnight</span></th>
              <th className="text-left align-top py-[1em] px-[15px] text-[1.4rem]"><span className="text-[16px]  !font-normal">Next Day</span></th>
            </tr>
          </tbody>
        </table>
      </div>
      <AnchorLink href="#"  className="font-HeroNewBold text-center font-bold leading-6 tracking-[0.3px] py-[0.625rem] px-6 bg-appTheme mb-6 text-white hover:!underline ">still need more help? contact us</AnchorLink>
    </div>
    
  )
}

export default ShippingTerms
