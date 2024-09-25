import Logo from '@ui/atoms/Logo';
// import NavLinksGroup from '@ui/molecules/NavLinksGroup';

import React from 'react';
import { ButtonWithIcon } from '@ui/molecules/ButtonWithIcon/index';
import searchIcon from "../../../assests/searchIcon.svg";
import profile from "../../../assests/profile.svg";
import cart from "../../../assests/cart.svg";
import { Icon } from '@ui/atoms/Icons';
import NavLinks from '@ui/molecules/NavLink/NavLink';





const Header: React.FC = () => (
  <>
    <header className='table-fixed flex items-center justify-between font-serif shadow-[3px_3px_0_#fafcfd]'>
      <Logo />
      
     <NavLinks />
      <div className='Iconsnav flex space-x-4  pr-24 gap-6'>
        <ButtonWithIcon
          className='w-[40px] h-[40px] border-0 border-b-0'
        >
        <Icon icon={searchIcon} className='text-black' />
        </ButtonWithIcon>

        <ButtonWithIcon
          className='w-[40px] h-[40px] border-0 border-b-0'
        >
          <Icon icon={cart} className='text-black' />
        </ButtonWithIcon>

        <ButtonWithIcon
          className='w-[40px] h-[40px] border-0 border-b-0'
        >
          <Icon icon={profile} className='text-black' />
        </ButtonWithIcon>

      </div>
    </header>
  </>

);

export default Header;
