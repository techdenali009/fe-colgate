// export default PersonalProfileFeilds;
import React from 'react';
import Paragraph from '@ui/atoms/Paragraph/paragraph';
import { ButtonWithTextAndIcon } from '../ButtonWithTextAndIcon';



interface RequestInfoUpdateProps {
  className?: string;
  labelclassName?: string;
  paraclassName?: string;

}

const RequestInfoUpdate: React.FC<RequestInfoUpdateProps> = ({ className, paraclassName }) => {
  return (
    <div className={`w-full mt-8  bg-[#e6e7eb] ${className}`}>
      <div className='w-full p-8 lg:w-[672px]'>
        <Paragraph className={`mb-6 ${paraclassName}`}>Need to make changes to your information shown above? Submit a request form and our customer service team will make the changes.</Paragraph>
        <ButtonWithTextAndIcon className='!bg-appTheme text-white !border-appTheme hover:!bg-black hover:!border-none font-HeroNewBold '>Request Information Update</ButtonWithTextAndIcon>
     
      </div>
    </div>
  );
};

export default RequestInfoUpdate;

