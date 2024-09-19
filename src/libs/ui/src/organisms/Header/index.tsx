import Logo from '@ui/atoms/Logo';
// import NavLinksGroup from '@ui/molecules/NavLinksGroup';

import React from 'react';
import { ButtonWithIcon } from '@ui/molecules/ButtonTypes/ButtonWithIcon';
import searchIcon from "../../../assets/searchIcon.svg";
import profile from "../../../assets/profile.svg";
import cart from "../../../assets/cart.svg";
import { Icon } from '@ui/atoms/Icons';

import NavLinks from '@ui/molecules/NavLink/navLink';



const Header: React.FC = () => (
  <>
    <header className='flex items-center justify-between font-serif shadow-[3px_3px_0_#fafcfd]'>
      <Logo />
     
    
     <NavLinks />
      <div className='Iconsnav flex space-x-4 pr-24 gap-6'>
        <ButtonWithIcon
          icon={<Icon icon={searchIcon} className='text-black' />}
          className='w-[40px] h-[40px] border-0 border-b-0'
        />
        <ButtonWithIcon
          icon={<Icon icon={profile} className='text-black' />}
          className='w-[40px] h-[40px] border-0 border-b-0'
        />
        <ButtonWithIcon
          icon={<Icon icon={cart} className='text-black' />}
          className='w-[40px] h-[40px] border-0 border-b-0'
        />
      </div>
    </header>
  </>

);

export default Header;
