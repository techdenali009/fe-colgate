import { useChangepasswordMutation } from '@store/services/Endpoints/AuthApi';
import { RootState } from '@store/store';
import ChangePassword from '@ui/molecules/ChangePasswordPersonalProfile';
import PersonalProfileFields from '@ui/molecules/PersonalProfileFields';


import { showErrorToast, showSuccessToast } from '@utils/toastUtils';
import React from 'react';
import { useSelector } from 'react-redux';



interface PersonalProfileProps {
  className?: string;
  
}

const PersonalProfile: React.FC<PersonalProfileProps> = ({
  className
}) => {
  const isLoggedIn = useSelector((state: RootState) => state.authSlice.userInfo);
  const [changepassword] = useChangepasswordMutation({});

 
  // Define the onSubmit function for handling password changes
  const handlePasswordChange = async (formData: {
    currentPassword: string;
    newPassword : string
  }) => {
    const { currentPassword, newPassword  } = formData;
    const passwordChangeData = {
      email: isLoggedIn?.email,
      currentPassword,
      newPassword ,
    };
  
    try {
      const response = await changepassword(passwordChangeData).unwrap();
      if (response.status === 'Success') {
        showSuccessToast(
          'Password  updated successfully!', 'top-right'
        );
      }
    }
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    catch (err: any) {
      console.error('Error adding user:', err.data.message);
      showErrorToast(
        `${err.data.message}`, 'top-right'
      );
    }
  };
  return (
    <div className={`w-full py-14 px-6 lg:!flex lg:p-0 ${className}`}>
      <div className='w-[50%] lg:w-[25%]'>
        <h3 className='text-[20px] font-HeroNewRegular mb-3'>Account</h3>
      </div>
      <div className='w-[100%] lg:w-[75%] '>
        <h3 className="text-[38px] text-appTheme mb-[28px] font-HeroNewRegular">Personal Profile</h3>
       
        <PersonalProfileFields />
        <div>
          <hr className='border-neutral-300 lg:mt-12 mt-8 lg:mb-0 mb-2 bg-red'></hr>
          <ChangePassword className='w-[100%]' onSubmit={handlePasswordChange} ></ChangePassword>
        </div>
      </div>
    </div>
  );
};

export default PersonalProfile;
