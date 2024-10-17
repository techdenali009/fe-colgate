import { Heading } from '@ui/molecules/Heading';
import { Paragraph } from '@ui/molecules/Paragraph';
import { PrimaryButton } from '@ui/molecules/PrimaryButton';
import { StrongText } from '@ui/molecules/StrongText';
import React from 'react';


const SubscriptionTerms: React.FC = () => {
  return (
    <div className="bg-white max-w-screen-sm mx-auto">
      <Heading>
        PCA SKIN Subscriptions
      </Heading>

      <Paragraph>
        PCA SKIN Pro provides a subscription service. By subscribing to our service, you have confirmed that you accept our 
        <StrongText> Terms and Conditions</StrongText>.
      </Paragraph>

      <Paragraph>
        Your subscription order will be automatically charged to your payment method at the subscription price and frequency indicated on your order. Each new/recurring order will be billed at the subscription price in effect on the day the order is processed.
      </Paragraph>

      <Paragraph>
        Applicable shipping fees and taxes will be calculated at the time of shipping. Your subscription will continue until canceled. You can cancel or pause your subscription at any time by visiting your account section under &apos;Subscriptions&apos; or contacting Consumer Support. We reserve the right, in our sole discretion, to terminate your subscription at any time without notice.
      </Paragraph>

      <div className="text-center">
        <PrimaryButton className='hover:bg-blue-700 font-HeroNewBold leading-5 text-sm px-4'>Terms and conditions</PrimaryButton>
      </div>
    </div>
  );
};

export default SubscriptionTerms;
