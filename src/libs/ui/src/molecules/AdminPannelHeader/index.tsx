import React, { useRef, useEffect } from 'react';
import {
  Menu,
  X,
  Search,
  Bell,
  UserCircle,
  KeyRound,
  LogOut,
} from 'lucide-react';
import { HeaderProps, ProfileOption } from '@utils/AdminPannerUserProfileData';

const DesktopHeader: React.FC<HeaderProps> = ({
  isSidebarOpen,
  setIsSidebarOpen,
  isProfileOpen,
  setIsProfileOpen,
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const isDesktop = window.innerWidth > 1020;

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

  const profileOptions: ProfileOption[] = [
    {
      icon: UserCircle,
      label: 'My Profile',
      action: () => console.log('Profile clicked'),
    },
    {
      icon: KeyRound,
      label: 'Change Password',
      action: () => console.log('Change password clicked'),
    },
    {
      icon: LogOut,
      label: 'Logout',
      action: () => console.log('Logout clicked'),
    },
  ];

  return (
    <header className='Admin-Pannel bg-white border-b h-16 fixed w-full top-0 z-50'>
      <div className='h-full max-w-[1920px] mx-auto flex items-center justify-between px-4'>
        {/* Left Section */}
        <div className='flex items-center w-1/3'>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className='p-2 hover:bg-gray-100 rounded-lg'
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className='hidden lg:flex items-center ml-4'>
            <button className='p-2 hover:bg-gray-100 rounded-lg'>
              <Search size={20} />
            </button>
          </div>
        </div>

        {/* Center Logo */}
        <div className='flex items-center justify-center w-1/3'>
          <div className='flex items-center gap-2'>
            <div className='w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center'>
              <span className='text-white font-bold'>L</span>
            </div>
            <span className='text-xl font-semibold'>Logo</span>
          </div>
        </div>

        {/* Right Section */}
        <div className='flex items-center justify-end w-1/3 gap-2'>
          <button className='p-2 hover:bg-gray-100 rounded-full relative'>
            <Bell size={20} />
            <span className='absolute top-1 right-1 bg-red-500 rounded-full w-2 h-2'></span>
          </button>
          <div className='h-8 border-l mx-2'></div>
          {/* Profile Section with Dropdown - Only show on desktop */}
          {isDesktop ? (
            <div className='relative' ref={dropdownRef}>
              <button
                className='flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg'
                onClick={() => setIsProfileOpen(!isProfileOpen)}
              >
                <div className='hidden sm:block text-right'>
                  <p className='text-sm font-medium'>John Doe</p>
                  <p className='text-xs text-gray-500'>Admin</p>
                </div>
                <div className='w-8 h-8 bg-gray-200 rounded-full'></div>
              </button>

              {/* Desktop Profile Dropdown */}
              {isProfileOpen && (
                <div className='absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border py-2 z-50'>
                  <div className='px-4 py-3 border-b'>
                    <p className='text-sm font-medium'>John Doe</p>
                    <p className='text-xs text-gray-500'>
                      john.doe@example.com
                    </p>
                  </div>
                  {profileOptions.map((option, index) => {
                    const IconComponent = option.icon;
                    return (
                      <button
                        key={index}
                        onClick={() => {
                          option.action();
                          setIsProfileOpen(false);
                        }}
                        className='w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-3'
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
            // Mobile/Tablet Profile Button
            <button className='w-8 h-8 bg-gray-200 rounded-full' />
          )}
        </div>
      </div>
    </header>
  );
};

export default DesktopHeader;
