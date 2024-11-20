// src/molecules/Sidebar/Sidebar.tsx
import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import './AdminPannelSidebar.styles.scss';
import HomeIcon from '@ui/atoms/SvgAtoms/Homeicon';
import SettingsIcon from '@ui/atoms/SvgAtoms/SettingsIcon';
import UserManagementIcon from '@ui/atoms/SvgAtoms/UsermanagementIcon';
import ProductManagementIcon from '@ui/atoms/SvgAtoms/ProductManagementicon';
import OrderManagementtIcon from '@ui/atoms/SvgAtoms/OrderManagementtIcon';
import InventoryIcon from '@ui/atoms/SvgAtoms/InventoryIcon';
import Feedbackicon from '@ui/atoms/SvgAtoms/feedbackicon';

const AdminPannelSidebar: React.FC = () => {
  return (
    <div className="admin-pannel">
    <div className='sidebar h-full bg-[#DBE6F6] w-1/5'>
      <nav className='sidebar-nav p-4 font-HeroNewSemiBold'>
        <ul>
          <li className='p-2 flex justify-start  items-center'>
            <div className='icons flex space-x-2'>
              <HomeIcon />
            </div>
            <Link to='/home' className='text-black hover:underline pl-4'>Dashboard</Link>
          </li>
        </ul>
        <ul>
          <li className='p-2 flex justify-start items-center'>
            <div className='icons flex space-x-2'>
              <UserManagementIcon />
            </div>
            <Link to='/about' className='text-black hover:underline pl-4'>User Management</Link>
          </li>
        </ul>
        <ul>
          <li className='p-2 flex justify-start items-center'>
            <div className='icons flex space-x-2'>
              <ProductManagementIcon />
            </div>
            <Link to='/services' className='text-black hover:underline pl-4'>Product Management</Link>
          </li>
        </ul>
        <ul>
          <li className='p-2 flex justify-start  items-center'>
            <div className='icons flex space-x-2'>
              <OrderManagementtIcon />
            </div>
            <Link to='/home' className='text-black hover:underline pl-4'>Order Management </Link>
          </li>
        </ul>
        <ul>
          <li className='p-2 flex justify-start items-center'>
            <div className='icons flex space-x-2'>
              <InventoryIcon />
            </div>
            <Link to='/about' className='text-black hover:underline pl-4'>Inventory Management</Link>
          </li>
        </ul>
        <ul>
          <li className='p-2 flex justify-start items-center'>
            <div className='icons flex space-x-2'>
              <Feedbackicon />
            </div>
            <Link to='/services' className='text-black hover:underline pl-4'>Review and Feedback</Link>
          </li>
        </ul>
        <ul>
          <li className='p-2 flex justify-start items-center'>
            <div className='icons flex space-x-2'>
              <SettingsIcon />
            </div>
            <Link to='/services' className='text-black hover:underline pl-4'>Settings</Link>
          </li>
        </ul>
      </nav>
    </div>
    </div>
  );
};

export default AdminPannelSidebar;
