import React, { useState, useEffect } from 'react';
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
} from '@utils/AdminPannelUserProfileData';
import { API_ENDPOINTS } from '@utils/AdminPanelHeaderSideBardata';
import { useNavigate } from 'react-router-dom';


const DesktopSidebar: React.FC<SidebarProps> = ({ isSidebarOpen }) => {
  const isDesktop = window.innerWidth > 1020;
  const [activeMenuItem, setActiveMenuItem] = useState<string | null>(null);
  const [userData, setUserData] = useState<{ name: string; email: string }>({
    name: '',
    email: '',
  });

  const navigate = useNavigate();

  const menuItems: MenuItem[] = [
    { icon: Home, label: 'Dashboard' },
    { icon: UserPlus, label: 'Users' },
    { icon: Package, label: 'Products' },
    { icon: ShoppingCart, label: 'Orders' },
    { icon: Box, label: 'Inventory' },
    { icon: Star, label: 'Review' },
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
      action: () => console.log('Change password LogOut'),
    },
  ];

  const handleMenuClick = (label: string) => {
    setActiveMenuItem(label);
    navigate(`/admin/${label}`);
  };

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

  return (
    <aside
      className={`Admin-Pannel bg-white border-r fixed left-0 top-16 h-[100%] transition-all duration-300 z-40 ${
        isSidebarOpen
          ? 'w-64 translate-x-0'
          : 'w-64 -translate-x-full lg:w-20 lg:translate-x-0'
      }`}
    >
      <nav className="p-4 flex flex-col h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        {/* User Profile Section */}
        {!isDesktop && (
          <div className="mb-6 pb-6 border-b">
            <div className="flex items-center gap-3 px-3 mb-4">
              <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
              <div>
                <p className="text-sm font-medium">{userData.name || 'User'}</p>
                <p className="text-xs text-gray-500">
                  {userData.email || 'Email not available'}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Menu Items */}
        {menuItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <button
              key={index}
              onClick={() => handleMenuClick(item.label)}
              className={`group w-full flex items-center gap-4 p-3 rounded-lg mb-1 transition-colors ${
                activeMenuItem === item.label
                  ? 'bg-appTheme text-white'
                  : 'text-black hover:bg-appTheme'
              }`}
            >
              <IconComponent
                size={20}
                className={`transition-colors ${
                  activeMenuItem === item.label
                    ? 'text-white'
                    : 'text-black group-hover:text-white'
                }`}
              />
              <span
                className={`transition-colors ${
                  activeMenuItem === item.label
                    ? 'text-white'
                    : 'text-black group-hover:text-white'
                } ${!isSidebarOpen ? 'lg:hidden' : ''}`}
              >
                {item.label}
              </span>
            </button>
          );
        })}

        {/* Profile Options */}
        <div className="hidden tm:block">
          {profileOptions.map((option, index) => {
            const IconComponent = option.icon;
            return (
              <button
                key={index}
                onClick={option.action}
                className="group w-full flex items-center gap-4 p-3 rounded-lg mb-1 transition-colors hover:bg-appTheme"
              >
                <IconComponent
                  size={18}
                  className="text-gray-500 transition-colors group-hover:text-white"
                />
                <span className="text-gray-700 transition-colors group-hover:text-white">
                  {option.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </aside>
  );
};

export default DesktopSidebar;
