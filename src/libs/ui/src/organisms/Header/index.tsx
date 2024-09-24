import React, { useState, useEffect } from 'react';
import Logo from '@ui/atoms/Logo';
import { ButtonWithIcon } from '@ui/molecules/ButtonWithIcon/index';
import searchIcon from "../../../assests/searchIcon.svg";
import profile from "../../../assests/profile.svg";
import cart from "../../../assests/cart.svg";
import { Icon } from '@ui/atoms/Icons';
import NavLinks from '@ui/molecules/NavLink/NavLink';
import Popover from '@ui/molecules/Popover/Popover';
import { PrimaryButton } from '@ui/molecules/PrimaryButton';

const Header: React.FC = () => (
  <>
    <header className='flex items-center justify-between font-serif shadow-[3px_3px_0_#fafcfd]'>
      <Logo />
      
     <NavLinks />
      <div className='Iconsnav flex space-x-4  pr-24 gap-6'>
        <ButtonWithIcon
          className='w-[40px] h-[40px] border-0 border-b-0'
        >
        <Icon icon={searchIcon} className='text-black' />
        </ButtonWithIcon>

          <ButtonWithIcon
            className='w-[40px] h-[40px] border-0 border-b-0 pt-[1.3rem] pr-[2.5rem] pb-[2.2rem] pl-[1.3rem]'
          
          >
            <Icon icon={profile} className='text-black' />
          </ButtonWithIcon>
          <ButtonWithIcon
            className='w-[40px] h-[40px] border-0 border-b-0 pt-[1.3rem] pr-[2.5rem] pb-[2.2rem] pl-[1.3rem]'
           
          >
            <Icon icon={cart} className='text-black' />
          </ButtonWithIcon>
        </div>

      
       
      </header>
    </>
  );

export default Header;
