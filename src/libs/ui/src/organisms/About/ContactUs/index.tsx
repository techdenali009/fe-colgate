import Anchor from '@ui/molecules/Anchor';
import { Heading } from '@ui/molecules/Heading';
import { Paragraph } from '@ui/molecules/Paragraph';
import { StrongText } from '@ui/molecules/StrongText';
import React from 'react';


const ContactUs: React.FC = () => {
  return (
    <div className="bg-white max-w-screen-sm mx-auto">
      <Heading>
      Contact Us
      </Heading>

      <Paragraph>
      We’re proud to partner with you, no matter what comes your way! There’s no question too big or too small.
      
      </Paragraph>

      <Paragraph>
        <StrongText> PCA SKIN </StrongText>
      Customer Service Representatives are available Monday-Friday, 7am - 5pm AZ time.
        <StrongText> 877.PCA.SKIN [877.722.7546] </StrongText>
      </Paragraph>

      <Paragraph>
      Prefer to send a message? Email us at: <Anchor href="mailto:PCASKIN@CPSkinHealth.com"> PCASKIN@CPSkinHealth.com</Anchor>. We’ll be sure to get back to you in under 2 business days.
      </Paragraph>

      <Paragraph>
       See our FAQs <Anchor href='/About/FAQs'>here</Anchor>.
      </Paragraph>
    </div>
  );
};

export default ContactUs;
