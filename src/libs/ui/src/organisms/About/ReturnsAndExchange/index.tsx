import Anchor from '@ui/molecules/Anchor';
import { Heading } from '@ui/molecules/Heading';
import { Paragraph } from '@ui/molecules/Paragraph';
import { StrongText } from '@ui/molecules/StrongText';
import React from 'react';
import './returnsAndExchange.styles.scss'
const INFO_EMAIL=import.meta.env.VITE_INFO_EMAIL;
const PHONE_NO=import.meta.env.VITE_PHONE_NO;
const ReturnsAndExchange: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <Heading className='lg:!text-[2.375rem] text-appTheme leading-10 font-extralight !text-[1.75rem] font-HeroNewUltraLight text-center items-center w-full mb-6'>
      CP Skin Health Return Policy
      </Heading>
      <div className='lg:max-w-3xl font-normal text-[1rem] font-HeroNewRegular mb-6'>
        <Paragraph className='paragraph'>
              All product returns require prior approval by Seller and must be within the expiration date. Please call {PHONE_NO} (<StrongText  className='strong'>PCA SKIN<sup>®</sup></StrongText>) for prior approval. Returns sent without authorization will not be returned and product credit will not be issued. Seller is not responsible for lost returns.      
        </Paragraph>
        <p>&nbsp;</p>
        <Paragraph className='paragraph'>
      Unused, unopened, or unmarked product may be returned within <StrongText className='strong'> 60 days </StrongText> of the purchase date and are subject to a
          <StrongText className='strong'> 20% restocking fee</StrongText>.
      
        </Paragraph>
        <p>&nbsp;</p>
        <Paragraph  className='paragraph'> <StrongText  className='strong'>Returns must be shipped by Buyer to Seller, and must include a Return Good Authorization(RGA) Number</StrongText>. Only product costs are subject to product credit; shipping and handling costs will not be reimbursed.</Paragraph>
        <p>&nbsp;</p>
        <Paragraph className='paragraph'>Patient returns due to dissatisfaction may be returned for a replacement within 4 months of the purchase date from Seller. <StrongText  className='strong'> Patient returns must be shipped by the Buyer</StrongText> before the product will be considered for product replacement and <StrongText  className='strong'>must include an RGA Number</StrongText>. Seller will honor this policy unless the products are not dispensed properly.</Paragraph>
        <p>&nbsp;</p>
        <Paragraph  className='paragraph'>Trade show/conference purchases, products received at training, or giveaway products are final. Seller cannot take returns or exchanges at trade shows/Conferences. Product missing or damaged in trade show/conference orders must be reported to Seller within 2 weeks of the date of purchase or training.</Paragraph>
        <p>&nbsp;</p>
        <StrongText  className='strong'> All purchases of trial-size products and monthly promotional products are final. </StrongText>.
        <p>&nbsp;</p>
        <Paragraph  className='paragraph'>
      Leaking or defective products will be replaced at no charge. Seller will provide a prepaid UPS return label with your product replacement. Leaking or defective product must be returned or Buyer will be charged for replacement product. Seller strictly monitors returns associated with Internet sales and we reserve the right to deny the return of Internet purchases.
        </Paragraph>
        <p>&nbsp;</p>
        <Paragraph  className='paragraph'>
      For <StrongText  className='strong'>PCA SKIN<sup>®</sup></StrongText> related returns, you can reach the team directly at {PHONE_NO} or <br></br> <Anchor className='!text-[1rem]' href='mailto:info@pcaskin.com'>{INFO_EMAIL}</Anchor>.
        </Paragraph>
      </div>
    </div>
  );
};

export default ReturnsAndExchange;
