
import { Heading } from '@ui/molecules/Heading';
import { Paragraph } from '@ui/molecules/Paragraph';
import { PrimaryButton } from '@ui/molecules/PrimaryButton';
import { StrongText } from '@ui/molecules/StrongText';
import React from 'react';
import './subscription.styles.scss'

const SubscriptionTerms: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <Heading className='!text-[2.375rem] !leading-10 !font-HeroNewUltraLight'>
        PCA SKIN Subscriptions
      </Heading>
      <div className='lg:max-w-3xl font-normal text-[1rem] font-HeroNewRegular mb-5'>
        <Paragraph className='paragraph'>
        PCA SKIN Pro provides a subscription service. By subscribing to our service, you have confirmed that you accept our 
          <StrongText className='strong'> Terms and Conditions</StrongText>.
        </Paragraph>
        <p>&nbsp;</p>
        <Paragraph className='paragraph'>
        Your subscription order will be automatically charged to your payment method at the subscription price and frequency indicated on your order. Each new/recurring order will be billed at the subscription price in effect on the day the order is processed.
        </Paragraph>
        <p>&nbsp;</p>
        <Paragraph className='paragraph'>
        Applicable shipping fees and taxes will be calculated at  time of shipping. Your subscription will continue until canceled. You can cancel or pause your subscription at any time by visiting your account section under &apos;Subscriptions&apos; or contacting Consumer Support. We reserve the right, in our sole discretion, to terminate your subscription at any time without notice.
        </Paragraph>
      
      </div>
      <PrimaryButton className='font-HeroNewBold  text-center font-bold leading-6 tracking-[0.3px] py-[0.625rem] px-6 !bg-appTheme mb-6 text-white hover:!underline hover:!bg-appTheme'>Terms and conditions</PrimaryButton>
    </div>
    
  );
};

export default SubscriptionTerms;
