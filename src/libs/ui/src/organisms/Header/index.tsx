import React, { useState, useEffect } from 'react';
import Logo from '@ui/atoms/Logo';
import { ButtonWithIcon } from '@ui/molecules/ButtonWithIcon/index';
import searchIcon from '../../../assests/searchIcon.svg';
import profile from '../../../assests/profile.svg';
import cart from '../../../assests/cart.svg';
import { Icon } from '@ui/atoms/Icons';
import NavLinks from '@ui/molecules/NavLink/NavLink';
import Popover from '@ui/molecules/Popover/Popover';
import { PrimaryButton } from '@ui/molecules/PrimaryButton';

import './header.styles.scss'

const Header: React.FC = () => {
  const [isFixed, setIsFixed] = useState<boolean>(false);
  const [isProfileHovered, setIsProfileHovered] = useState(false);
  const [isCartHovered, setIsCartHovered] = useState(false);


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
      <header id='header_shadow' className={`${isFixed ? 'fixed top-0 left-0 w-full z-50 bg-white' : ''}`}>
        <div className='flex gap-4 items-center justify-between font-serif shadow-[3px_3px_0_#fafcfd]'>
          <div className='humburger'><NavLinks /></div>
          <div className='logo_one'><Logo /></div>

          <div className='second_nav'><NavLinks /></div>

          <div className='Iconsnav flex space-x-4 pr-24 gap-6'>
            <div className='second_logo'><Logo /></div>
            <ButtonWithIcon className='w-[40px] h-[40px] border-0 border-b-0 pt-[1.1rem] pr-[2.3rem] pb-[2.5rem] pl-[1.1rem]'>
              <Icon icon={searchIcon} className='text-black' />
            </ButtonWithIcon>

            <div
              onMouseEnter={() => setIsProfileHovered(true)}
              onMouseLeave={() => setIsProfileHovered(false)}
            >
              <ButtonWithIcon className='profile w-[40px] h-[40px] border-0 border-b-0 pt-[1.1rem] pr-[2.3rem] pb-[2.5rem] pl-[1.1rem]'>
                <Icon icon={profile} className='text-black' />
              </ButtonWithIcon>

              {isProfileHovered && (
                <Popover className='float-left right-[0px] w-[415px] pt-3 pb-3 boxshadow'>
                  <h2 className='p-4 h-[128px] text-tertiary-400 tracking-wider font-bold text-base  leading-24 w-full mt-6 HeroNewLight font-HeroNewRegular'>If you have a professional account, please login. If you would like to establish a professional account please click Create Account.</h2>
                  <div className='pop_up p-4 flex gap-[3]'>
                    <PrimaryButton className='w-[152px] font-bold text-base  text-sm font-HeroNewBold'>Login In</PrimaryButton>
                    <PrimaryButton className='font-bold text-base  text-sm font-HeroNewBold'>Create Account</PrimaryButton>
                  </div>
                </Popover>
              )}
            </div>

            <div
              onMouseEnter={() => setIsCartHovered(true)}
              onMouseLeave={() => setIsCartHovered(false)}
            >
              
              <ButtonWithIcon className='w-[40px] h-[40px] border-0 border-b-0 pt-[1.1rem] pr-[39px] pb-[2.5rem] pl-[18px]'>
                <Icon icon={cart} className='text-black' />
              </ButtonWithIcon>

              {isCartHovered && (
                <Popover className='float-left right-[0px] w-[371px] pt-3 pb-3 boxshadow'>
                  <h2 className='p-4 h-[128px] text-tertiary-400 tracking-wider font-bold text-base  leading-24 w-full mt-6 font-HeroNewRegular'>If you have a professional account, please login. If you would like to establish a professional account please click Create Account.</h2>
                  <div className='pop_up p-4 m-1 flex gap-[3]'>
                    <PrimaryButton className='w-[152px] font-bold text-base font-hero-new-bold text-sm font-HeroNewBold'>Login In</PrimaryButton>
                    <PrimaryButton className='w-[148px] font-bold text-base font-hero-new-bold text-sm font-HeroNewBold' ><h2>Register Now</h2></PrimaryButton>
                  </div>
                </Popover>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
