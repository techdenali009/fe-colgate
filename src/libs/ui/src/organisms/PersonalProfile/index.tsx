import ChangePassword from '@ui/molecules/ChangePasswordPersonalProfile';
import PersonalProfileFeilds from '@ui/molecules/PersonalProfileFields';
import { fieldsData } from '@utils/test';
import React from 'react';



interface PersonalProfileProps {
  className?: string;
}



const PersonalProfile: React.FC<PersonalProfileProps> = ({
  className
}) => {
  return (
    <div className={`w-full py-14 px-6 lg:!flex lg:p-0 ${className}`}>
      <div className='w-[50%] lg:w-[25%]'>
        <h3 className='text-[20px] font-HeroNewRegular mb-3'>Account</h3>
      </div>
      <div className='w-[100%] lg:w-[75%] '>
        <h3 className="text-[38px] text-appTheme mb-[28px] font-HeroNewRegular  ">Personal Profile</h3>
        <PersonalProfileFeilds fields={fieldsData} className='full'></PersonalProfileFeilds>
        <div>
          <hr className='border-neutral-300 lg:mt-12 mt-8 lg:mb-0 mb-2 bg-red'></hr>
          <ChangePassword className='w-full'></ChangePassword>

        </div>
      </div>
    </div>
  );
};

export default PersonalProfile;
