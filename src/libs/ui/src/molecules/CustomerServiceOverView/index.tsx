
import React from 'react';
import ContactDetails from '../OverViewContactDetails';

interface TextBlockProps {
  title?: string;
  content: string;
  className?: string;
}

const CustomerServiceOverView: React.FC<TextBlockProps> = ({ className }) => {
  return (
    <div className={`py-8 px-6 bg-[#f3f3f3] flex lg:p-8 ${className}`}>
      <div
        style={{
          backgroundImage:
            'url(\'https://www.pcaskinpro.com/myaccount/_next/static/media/support-blue.8818be79.svg\')',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          width: '24px',
          height: '24px',
          marginRight: '16px',
        }}
      >
      </div>
      <ContactDetails
        title="PCA SKIN® Customer Service"
        phoneNumber="1 (877) 722-7546"
        availability="Available Monday–Friday"
        workingHours="7:00 AM—5:00 PM MT"
        className=""
      />
    </div>
  );
};

export default CustomerServiceOverView;
