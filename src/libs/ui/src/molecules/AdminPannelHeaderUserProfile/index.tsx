import React from 'react';
import './AdminPannelHeaderUserProfile.styles.scss';
import DropdownToggle from '@ui/atoms/AdminPannelDropdownToggle';

interface UserProfileProps {
  name: string;
  role: string;
  profileImage: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ name, role, profileImage }) => {
  return (
    <div className='user-profile p-[10px] pr-[20px] flex items-center'>
      <div className='user-media'>
        <img
          src={profileImage}
          alt=''
          className='profile-image rounded-[45px] w-[45px]'
        />
      </div>
      <div className='user-info grid pl-[14px] pt-[6px] pb-[10px] pr-[10px]'>
        <span className='user-name text-appWhiteTheme-opacity-70 font-HeroNewRegular'>
          {name}
        </span>
        <span className='user-role text-appWhiteTheme-opacity-60 text-[12px] font-HeroNewRegular'>
          {role}
        </span>
      </div>
     
      <DropdownToggle />
    </div>
  );
};

export default UserProfile;
