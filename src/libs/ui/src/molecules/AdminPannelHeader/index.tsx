import React, { useRef, useEffect, useState } from 'react';
import { Menu, X, Bell } from 'lucide-react';
import { HeaderProps } from '@utils/AdminPannelUserProfileData';
import { HeaderLogo } from '@ui/atoms/HeaderLogo';
import {
  API_ENDPOINTS,
  PROFILE_OPTIONS,
} from '@utils/AdminPanelHeaderSideBardata';

const DesktopHeader: React.FC<HeaderProps> = ({
  isSidebarOpen,
  setIsSidebarOpen,
  isProfileOpen,
  setIsProfileOpen,
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const isDesktop = window.innerWidth > 1020;

  const [userData, setUserData] = useState<{ name: string; email: string }>({
    name: '',
    email: '',
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(API_ENDPOINTS.USER_DATA);
        if (response.ok) {
          const data = await response.json();
          setUserData({ name: data.name, email: data.email });
        } else {
          console.error('Failed to fetch user data');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [setIsProfileOpen]);

  return (
    <header className='Admin-Pannel bg-white border-b h-16 fixed w-full top-0 z-50'>
      <div className='h-full max-w-[1920px] mx-auto flex items-center justify-between px-4'>
        {/* Left Section */}
        <div className='flex items-center w-1/3'>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className='p-2 hover:bg-appTheme rounded-lg'
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Center Logo */}
        <div className='flex items-center justify-center w-1/3'>
          <div className='flex items-center gap-2'>
            <div className='w-8 h-8 rounded-lg flex items-center justify-center'>
              <HeaderLogo />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className='flex items-center justify-end w-1/3 gap-2'>
          <button className='p-2 hover:bg-appTheme rounded-full relative hidden lg:block'>
            <Bell size={20} />
            <span className='absolute top-1 right-1 bg-red-500 rounded-full w-2 h-2'></span>
          </button>
          <div className='h-8 border-l mx-2 hidden lg:block'></div>

          {/* Profile Section */}
          {isDesktop ? (
            <div className='relative' ref={dropdownRef}>
              <button
                className='flex items-center gap-3 p-2 rounded-lg'
                onClick={() => setIsProfileOpen(!isProfileOpen)}
              >
                <div className='hidden sm:block text-right'>
                  <p className='text-sm font-medium'>
                    {userData.name || 'User'}
                  </p>
                  <p className='text-xs text-gray-500'>
                    {userData.email || 'Email not available'}
                  </p>
                </div>
                <div className='w-8 h-8 bg-gray-200 rounded-full tm:hidden'></div>
              </button>

              {isProfileOpen && (
                <div className='absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border py-2 z-50'>
                  <div className='px-4 py-3 border-b'>
                    <p className='text-sm font-medium'>
                      {userData.name || 'User'}
                    </p>
                    <p className='text-xs text-gray-500'>
                      {userData.email || 'Email not available'}
                    </p>
                  </div>
                  {PROFILE_OPTIONS.map((option, index) => {
                    const IconComponent = option.icon;
                    return (
                      <button
                        key={index}
                        onClick={() => {
                          option.action();
                          setIsProfileOpen(false);
                        }}
                        className='w-full px-4 py-2 text-sm text-gray-700 hover:bg-appTheme flex items-center gap-3'
                      >
                        <IconComponent size={18} className='text-gray-500' />
                        {option.label}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          ) : (
            <button className='w-8 h-8 bg-gray-200 rounded-full hidden lg:block' />
          )}
        </div>
      </div>
    </header>
  );
};

export default DesktopHeader;
