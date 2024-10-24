import Anchor from '@ui/molecules/Anchor';
import { Heading } from '@ui/molecules/Heading';
import { Paragraph } from '@ui/molecules/Paragraph';
import { StrongText } from '@ui/molecules/StrongText';
import React from 'react';
import './contactUS.styles.scss'

const ContactUs: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <Heading className='!text-[2.375rem] !leading-10 !font-HeroNewUltraLight'>
      Contact Us
      </Heading>
      <div className='lg:max-w-[48rem]   max-w-full mb-6'>
        <Paragraph className='paragraph'>
         We’re proud to partner with you, no matter what comes your way! There’s no question too big or too small.
      
        </Paragraph>
        <p>&nbsp;</p>
        <Paragraph className='paragraph'>
          <StrongText className='strong'>PCA SKIN </StrongText>
          Customer Service Representatives are available Monday-Friday, 7am - 5pm AZ time.
          <StrongText className='strong'> 877.PCA.SKIN [877.722.7546] </StrongText>
        </Paragraph>
        <p>&nbsp;</p>
        <Paragraph className='paragraph'>
      Prefer to send a message? Email us at: <Anchor className='!text-[1rem]' href="mailto:PCASKIN@CPSkinHealth.com"> PCASKIN@CPSkinHealth.com</Anchor>. We’ll be sure to get back to you in under 2 business days.
        </Paragraph>
        <p>&nbsp;</p>
        <Paragraph className='paragraph'>
       See our FAQs <Anchor className='!text-[1rem]' href='/About/FAQs'>here</Anchor>.
        </Paragraph>
      </div>
    </div>
  );
};

export default ContactUs;
