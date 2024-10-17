import Anchor from '@ui/molecules/Anchor';
import { Heading } from '@ui/molecules/Heading';
import { Paragraph } from '@ui/molecules/Paragraph';
import { StrongText } from '@ui/molecules/StrongText';
import React from 'react';


const ReturnsAndExchange: React.FC = () => {
  return (
    <div className="bg-white max-w-screen-sm mx-auto">
      <Heading>
      CP Skin Health Return Policy
      </Heading>

      <Paragraph>
      All product returns require prior approval by Seller and must be within the expiration date. Please call 877-722-7546 (<StrongText>PCA SKIN®</StrongText>) for prior approval. Returns sent without authorization will not be returned and product credit will not be issued. Seller is not responsible for lost returns.      
      </Paragraph>

      <Paragraph>
      Unused, unopened, or unmarked product may be returned within <StrongText> 60 days </StrongText> of the purchase date and are subject to a
        <StrongText> 20% restocking fee </StrongText>.
      </Paragraph>

      <Paragraph> <StrongText>Returns must be shipped by Buyer to Seller, and must include a Return Good Authorization(RGA) Number</StrongText>. Only product costs are subject to product credit; shipping and handling costs will not be reimbursed.</Paragraph>

      <Paragraph>Patient returns due to dissatisfaction may be returned for a replacement within 4 months of the purchase date from Seller. <StrongText> Patient returns must be shipped by the Buyer</StrongText> before the product will be considered for product replacement and <StrongText>must include an RGA Number</StrongText>. Seller will honor this policy unless the products are not dispensed properly.</Paragraph>

      <Paragraph>Trade show/conference purchases, products received at training, or giveaway products are final. Seller cannot take returns or exchanges at trade shows/Conferences. Product missing or damaged in trade show/conference orders must be reported to Seller within 2 weeks of the date of purchase or training.</Paragraph>

      <StrongText> All purchases of trial-size products and monthly promotional products are final. </StrongText>.

      <Paragraph>
      Leaking or defective products will be replaced at no charge. Seller will provide a prepaid UPS return label with your product replacement. Leaking or defective product must be returned or Buyer will be charged for replacement product. Seller strictly monitors returns associated with Internet sales and we reserve the right to deny the return of Internet purchases.
      </Paragraph>

      <Paragraph>
      For <StrongText>PCA SKIN®</StrongText> related returns, you can reach the team directly at 877-722-7546 or <Anchor href='mailto:info@pcaskin.com'>info@pcaskin.com</Anchor>.
      </Paragraph>
    </div>
  );
};

export default ReturnsAndExchange;
