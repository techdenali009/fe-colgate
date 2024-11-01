import { Heading } from '@ui/molecules/Heading';
import { Paragraph } from '@ui/molecules/Paragraph';
import React from 'react';


const DoNotSellPersonalInfo: React.FC = () => {
  return (
    <div className='flex flex-col items-center'>
          
      <div className="">
        <Heading className='lg:!text-[2.375rem] !leading-10 !font-HeroNewUltraLight 2xs:text-[1.75rem]'>
        Do Not Sell My Personal Information
        </Heading>
        <div className='lg:max-w-3xl font-normal !tracking-normal !leading-10 font-HeroNewRegular mb-6'>
          <Paragraph className='font-HeroNewLight !text-[16px] '>
          PCA Skin does not sell personal information for monetary consideration; however, we may share certain personal information with third parties under circumstances which might be deemed a “sale” under the California Consumer Privacy Act.          
          </Paragraph>
          
          <Paragraph className='font-HeroNewLight !text-[16px]'>
          If you are a California resident, you may request that we exclude your personal information from such sharing arrangements by entering your email address below.          
          </Paragraph>
         
          <Paragraph className='font-HeroNewLight !text-[16px]'>
          You may need to provide additional identifying information before we can process your request. You may also make this request by calling <strong className='font-HeroNewBold' >877.PCA.SKIN [722.7546].</strong>          
          </Paragraph>
         
          <strong className='font-HeroNewBold' >Please note.</strong>
          <ul className="my-4 ml-6 list-disc mb-4 font-HeroNewLight !text-[16px]">
            <li>For requests related to Marketing preferences, please contact <u className='decoration-solid text-appTheme'> Professional Affairs.</u></li>
            <li>For more information about how we handle your Personal Data, please review our <u className='decoration-solid text-appTheme'> Privacy Policy.</u></li>          
          </ul>
        
        </div>
      </div>

    </div>
  );
};

export default DoNotSellPersonalInfo;
