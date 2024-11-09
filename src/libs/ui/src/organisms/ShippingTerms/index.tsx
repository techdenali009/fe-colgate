
import Paragraph from '@ui/atoms/Paragraph/paragraph'

import { HeaderLabel } from '@ui/molecules/HeaderLabel'
import './shippingTerms.style.scss'
import Anchor from '@ui/molecules/Anchor'
import { StrongText } from '@ui/molecules/StrongText'
function ShippingTerms() {
  return (
    <div className="flex flex-col items-center">
      <HeaderLabel className="text-appTheme lg:text-[2.375rem] leading-10 font-extralight text-[1.75rem] font-HeroNewUltraLight text-center justify-center mb-6">Shipping Terms</HeaderLabel>     
      <div className="w-[48rem] font-normal text-[1rem]  max-w-full mb-6">  
        <ul className="my-4 ml-6 list-disc mb-4">
          <li>Shipping terms only apply to domestic orders.</li>
          <li>For questions on International orders, please <Anchor className="!text-[1rem]" href="/about/contact-us">contact us</Anchor></li>
          <li>Shipments are sent Monday through Friday each week, excluding major holidays.</li>
          <li>Orders are processed within two business days of being placed.</li>
          <li>Delivery options are calculated based on <StrongText className="!font-HeroNewBold !text-[1rem]">business days</StrongText>.</li>
          <li>Saturday delivery not available for all shipping options and destinations.</li>
        </ul>
        <div className="text-center ">
          <HeaderLabel className="!text-[36px] !p-0 leading-normal font-HeroNewRegular font-normal ">UPS - Shipping Times</HeaderLabel>    
        </div>
        <Paragraph>&nbsp;</Paragraph>
        <table className="w-[1260.02px] text-start max-w-full table-fixed  font-SansSerif ">
          <thead className=''>
            <tr className="bg-appBlackTheme text-white  dark:bg-white dark:text-appdarkcolor ">
              <th className="table-heading">Shipping Method</th>
              <th className="table-heading">Delivery Time</th>
            </tr>
          </thead>
          <tbody className='text-slate-700 dark:text-appdarkcolor'>
            <tr className='table-row'>
              <th className="table-data"><span className="table-span ">Standard</span></th>
              <th className="table-data"><span className="table-span">3-7 business days</span></th>
            </tr>
            <tr className="table-row-color">
              <th className="table-data"><span className="table-span">Express Saver</span></th>
              <th className="table-data"><span className="table-span">3 business days</span></th>
            </tr>
            <tr className="table-row">
              <th className="table-data"><span className="table-span">2 Day</span></th>
              <th className="table-data"><span className="table-span">2 business days</span></th>
            </tr>
            <tr className="table-row-color">
              <th className="table-data"><span className="table-span">Standard Overnight</span></th>
              <th className="table-data"><span className="table-span">1 business days</span></th>
            </tr>
            <tr className="table-row">
              <th className="table-data"><span className="table-span">Priority Overnight</span></th>
              <th className="table-data"><span className="table-span">Next Day</span></th>
            </tr>
          </tbody>
        </table>
      </div>
      <Anchor href="/about/contact-us"  className="font-HeroNewBold text-center font-bold !leading-6 !tracking-[0.3px] !text-[1rem] !py-[0.625rem] !px-6 bg-appTheme mb-6 text-white hover:!underline ">still need more help? contact us</Anchor>
    </div>
    
  )
}

export default ShippingTerms
