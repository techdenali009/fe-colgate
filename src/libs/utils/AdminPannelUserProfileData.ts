import { LucideIcon } from 'lucide-react';

export interface ProfileOption {
  icon: LucideIcon;
  label: string;
  action: () => void;
}

export interface MenuItem {
  icon: LucideIcon;
  label: string;
}

export interface HeaderProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
  isProfileOpen: boolean;
  setIsProfileOpen: (open: boolean) => void;
}

export interface SidebarProps {
  isSidebarOpen: boolean;
}