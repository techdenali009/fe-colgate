import React from 'react';
import Paragraph from '@ui/atoms/Paragraph/paragraph';

interface ContactDetailsProps {
  title: string;
  phoneNumber: string;
  availability: string;
  workingHours: string;
  className?: string;
  PhoneClassName?:string;
}

const ContactDetails: React.FC<ContactDetailsProps> = ({
  title,
  phoneNumber,
  availability,
  workingHours,
  className,
  PhoneClassName,

}) => {
  return (
    <div className={`text-[14px] ${className}`}>
      <h3 className="font-HeroNewExtraBold">{title}</h3>
      <a className="">
        <Paragraph className={`font-HeroNewLight text-[14px] py-1 px-4 -ml-4 ${PhoneClassName}`}>
          {phoneNumber}
        </Paragraph>
      </a>
      <div className="mt-2 text-[#333333]">
        <Paragraph className="font-HeroNewBold ">{availability}</Paragraph>
        <Paragraph className="font-HeroNewLight">{workingHours}</Paragraph>
      </div>
    </div>
  );
};

export default ContactDetails;
