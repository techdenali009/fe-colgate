import React from 'react';
import UserProfile from '../../molecules/AdminPannelHeaderUserProfile';
import './AdminPannelHeader.styles.scss'; 
import { HeaderLogo } from '@ui/atoms/HeaderLogo';
import { userProfileData } from '@utils/AdminPannerUserProfileData';


const AdminPannelHeader: React.FC = () => {
  const { name, role, profileImage } = userProfileData;
  return (
    <header className='AdminPannelheader flex justify-between bg-[#17243e] px-5 h-[65px]'>
      <HeaderLogo />
      <UserProfile name={name} role={role} profileImage={profileImage} />
    </header>
  );
};

export default AdminPannelHeader;
