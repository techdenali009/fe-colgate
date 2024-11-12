import { Heading } from '@ui/molecules/Heading';
import { Paragraph } from '@ui/molecules/Paragraph';
import { PrimaryButton } from '@ui/molecules/PrimaryButton';
import './careers.styles.scss'
import React from 'react';


const Careers: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <Heading className='!text-[2.375rem] !leading-10 !font-HeroNewUltraLight'>
        The place for your career to thrive
      </Heading>
      <Heading className='!text-[1.25rem] leading-10 !font-bold !font-HeroNewBold justify-center items-center mb-6 !tracking-normal'>
        Opportunity, challenges, great co-workers feed your intellectual curiosity.
      </Heading>
      <div className='lg:max-w-3xl font-normal text-[1rem] font-HeroNewRegular mb-5'>
        <Paragraph className='paragraph'>
          At PCA SKIN, we provide you with a creative, entrepreneurial and collaborative work environment to help you thrive in your career. Recognized as a “Best Places to Work” by several organizations, we empower our employees to carry our mission of improving people’s lives into our work culture.
        </Paragraph>
        <Paragraph className='paragraph'>
          As a “Best Places to Work” company, and with our domestic and international markets growing, we are an ideal company to help you reach your career goals. Become a part of the PCA SKIN family and embrace the opportunity to and change people’s lives through transformative skin care.        
        </Paragraph>
        <Paragraph className='paragraph'>
          As a health care company with the vision of improving people’s lives, we provide a variety of benefits to improve our own employees’ lives. Eligibility for benefits is dependent upon employment category and may include the following:
        </Paragraph>
        <ul className=" my-4 ml-6 list-disc mb-4">
          <li className='font-HeroNewLight'>Medical / Dental / Vision</li>
          <li className='font-HeroNewLight' >Life insurance</li>
          <li className='font-HeroNewLight'>Disability plan</li>
          <li className='font-HeroNewLight'>Employer - matched 401 k</li>
          <li className='font-HeroNewLight'>Flexible spending account</li>
          <li className='font-HeroNewLight'>Dependent care spending account</li>
          <li className='font-HeroNewLight'>Product allotments</li>
          <li className='font-HeroNewLight'>Customized skin treatments</li>
          <li className='font-HeroNewLight'>Advanced industry training</li>
        </ul>
        <Paragraph className='paragraph !mb-0'>PCA SKIN is an equal opportunities employer</Paragraph>
        <Paragraph className='paragraph'>
          Stay in the loop!
        </Paragraph>
      </div>
      <PrimaryButton className='font-HeroNewBold text-center font-bold leading-6 tracking-[0.3px] py-[0.625rem] px-6 bg-appTheme mb-6 text-white hover:!underline hover:!bg-appTheme'>View open roles</PrimaryButton>
    </div>

  );
};

export default Careers;
