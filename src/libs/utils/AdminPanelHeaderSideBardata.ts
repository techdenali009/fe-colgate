import { UserCircle, KeyRound, LogOut } from 'lucide-react';

export const API_ENDPOINTS = {
  USER_DATA: '/api/user', // Replace with your API endpoint
};

export const PROFILE_OPTIONS = [
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
