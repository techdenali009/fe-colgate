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

import './header.styles.scss'

const Header: React.FC = () => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const [isFixed, setIsFixed] = useState<boolean>(false);

  const handleScroll = () => {
    setIsFixed(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`flex gap-4 items-center justify-between font-serif shadow-[3px_3px_0_#fafcfd] ${isFixed ? 'fixed top-0 left-0 w-full z-50 bg-white' : ''}`}>
       <div className='humburger'><NavLinks /></div>
       <div className='logo_one'><Logo /></div>
        
       <div className='second_nav'><NavLinks /></div> 
       
        <div className='Iconsnav flex space-x-4 pr-24 gap-6'>
        <div className='second_logo'><Logo /></div>
          <ButtonWithIcon
            className='w-[40px] h-[40px] border-0 border-b-0 pt-[1.3rem] pr-[2.5rem] pb-[2.2rem] pl-[1.3rem]'
          
          >
            <Icon icon={searchIcon} className='text-black' />
          </ButtonWithIcon>

          <ButtonWithIcon
            className='w-[40px] h-[40px] border-0 border-b-0 pt-[1.3rem] pr-[2.5rem] pb-[2.2rem] pl-[1.3rem]'
           
          >
            <Icon icon={cart} className='text-black' />
          </ButtonWithIcon>

          <ButtonWithIcon
            className=' profile w-[40px] h-[40px] border-0 border-b-0'
            onMouseEnter={() => setHoveredIcon('profile')}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <Icon icon={profile} className='text-black' />
          </ButtonWithIcon>
        </div>

      
       
      </header>
    </>
  );
}

export default Header;
