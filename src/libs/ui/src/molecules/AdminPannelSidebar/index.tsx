import React, { useState } from 'react';
import {
  Home,
  Settings,
  UserCircle,
  KeyRound,
  LogOut,
  UserPlus,
  Package,
  ShoppingCart,
  Box,
  Star,
} from 'lucide-react';
import {
  SidebarProps,
  MenuItem,
  ProfileOption,
} from '@utils/AdminPannerUserProfileData';

const DesktopSidebar: React.FC<SidebarProps> = ({ isSidebarOpen }) => {
  const isDesktop = window.innerWidth > 1020;

  const [activeMenuItem, setActiveMenuItem] = useState<string | null>(null);

  const menuItems: MenuItem[] = [
    { icon: Home, label: 'Dashboard' },
    { icon: UserPlus, label: 'User Management' },
    { icon: Package, label: 'Product Management' },
    { icon: ShoppingCart, label: 'Order Management' },
    { icon: Box, label: 'Inventory Management' },
    { icon: Star, label: 'Review and Feedback' },
    { icon: Settings, label: 'Settings' },
  ];

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

  const handleMenuClick = (label: string) => {
    setActiveMenuItem(label);
  };

  return (
    <aside
      className={`Admin-Pannel bg-white border-r w-[300px] fixed left-0 top-16 h-[100%] transition-all duration-300 z-40 ${
        isSidebarOpen
          ? 'w-64 translate-x-0'
          : 'w-64 -translate-x-full lg:w-20 lg:translate-x-0'
      }`}
    >
      <nav className='p-4 flex flex-col h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100'>
        {/* User Profile Section in Sidebar - Only show on mobile/tablet */}
        {!isDesktop && (
          <div className='mb-6 pb-6 border-b'>
            <div className='flex items-center gap-3 px-3 mb-4'>
              <div className='w-10 h-10 bg-gray-200 rounded-full'></div>
              <div>
                <p className='text-sm font-medium'>John Doe</p>
                <p className='text-xs text-gray-500'>john.doe@example.com</p>
              </div>
            </div>

            {/* Menu Items */}
            {menuItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={index}
                  onClick={() => handleMenuClick(item.label)}
                  className={`w-full flex items-center gap-4 p-3 text-gray-700 hover:bg-appTheme rounded-lg mb-1 ${
                    activeMenuItem === item.label
                      ? 'bg-appTheme' // Highlight active item
                      : ''
                  }`}
                >
                  <IconComponent size={20} />
                  <span className={`${!isSidebarOpen ? 'lg:hidden' : ''}`}>
                    {item.label}
                  </span>
                </button>
              );
            })}

            {/* Profile Options */}
            {profileOptions.map((option, index) => {
              const IconComponent = option.icon;
              return (
                <button
                  key={index}
                  onClick={option.action}
                  className='w-full flex items-center gap-4 p-3 text-gray-700 hover:bg-appTheme rounded-lg mb-1'
                >
                  <IconComponent size={18} className='text-gray-500' />
                  {option.label}
                </button>
              );
            })}
          </div>
        )}

        {/* Regular Menu Items */}
        {isDesktop &&
          menuItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <button
                key={index}
                onClick={() => handleMenuClick(item.label)}
                className={`w-full flex items-center gap-4 p-3 text-gray-700 hover:bg-appTheme rounded-lg mb-1 ${
                  activeMenuItem === item.label
                    ? 'bg-appTheme' // Highlight active item
                    : ''
                }`}
              >
                <IconComponent size={20} />
                <span className={`${!isSidebarOpen ? 'lg:hidden' : ''}`}>
                  {item.label}
                </span>
              </button>
            );
          })}
      </nav>
    </aside>
  );
};

export default DesktopSidebar;
