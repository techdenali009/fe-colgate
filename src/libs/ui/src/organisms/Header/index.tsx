import React, { useState, useEffect } from 'react';
import { ButtonWithIcon } from '@ui/molecules/ButtonWithIcon/index';
import { Icon } from '@ui/atoms/Icons';
import Popover from '@ui/molecules/Popover/Popover';
import './header.styles.scss';
import NavLinks from '@ui/molecules/NavLink/NavLink';
import SubMenu from '@ui/molecules/SubMenu/SubMenu';
import { HeaderLogo } from '@ui/atoms/HeaderLogo';

import HoverCart from '../../../assets/HoverCart.svg';
import HoverSearch from '../../../assets/HoverSearch.svg';
import HoverProfile from '../../../assets/HoverProfile.svg';
import searchIcon from '../../../assets/searchIcon.svg';
import profile from '../../../assets/profile.svg';
import cart from '../../../assets/cart.svg';
import SearchModal from '@ui/molecules/SearchModal';
import { CreateAccountButton } from '@ui/atoms/CreateAccountButton';

interface headerProps {
  modalSetToggle: () => void;
  handleRegisterClick: () => void;
}
const Header: React.FC<headerProps> = ({ modalSetToggle, handleRegisterClick }) => {
  const [isFixed, setIsFixed] = useState<boolean>(false);
  const [isProfileHovered, setIsProfileHovered] = useState(false);
  const [isCartHovered, setIsCartHovered] = useState(false);
  const [isSearchHovered, setIsSearchHovered] = useState(false);
  const [, setIsSubmenuHovered] = useState(false);
  const [isNavActive, setIsNavActive] = useState(false);
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const [submenuData, setSubmenuData] = useState<any>(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isSearchModalOpen, setSearchModalOpen] = useState(false);
 

  const handleMouseEnterLogo = () => {
    setIsNavActive(false);
  };

  const handleMouseEnterProfile = () => {
    setIsProfileHovered(true);
    setIsNavActive(false);
  };

  const handleMouseLeaveProfile = () => {
    setIsProfileHovered(false);
  };

  const handleMouseEnterSearch = () => {
    setIsNavActive(false);
    setIsSearchHovered(true);
  };

  const handleMouseLeaveSearch = () => {
    setIsSearchHovered(false); // Reset search hover state
  };
  // Handle scroll to fix header
  const handleScroll = () => {
    setIsFixed(window.scrollY > 0);
  };

  // Handle window resize to detect small screen
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1020);
    };

    handleResize(); // Set the initial screen size
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const handleNavLinkActive = (isActive: boolean, data: any) => {
    setIsNavActive(isActive);
    setSubmenuData(data);
  };


  const handleCartClick = () => {
    if (isSmallScreen) {
      setIsCartHovered(!isCartHovered);
    }
  };


  const handleMouseEnterCart = () => {
    if (!isSmallScreen) {
      setIsCartHovered(true);
      setIsNavActive(false);
    }
  };

  const handleMouseLeaveCart = () => {
    if (!isSmallScreen) {
      setIsCartHovered(false);
    }
  };
  
  return (
    <>
      <header id='header_shadow' className={`${isFixed ? 'fixed top-0 left-0 w-full z-50 bg-white' : ''}`}>
        <div className='flex gap-4 items-center justify-between font-serif shadow-[3px_3px_0_#fafcfd]'>

          <div className='tm:flex tl:hidden humburger'>
            <NavLinks onNavLinkActive={handleNavLinkActive} />
          </div>

          <div className='tm:hidden logo_one' onMouseEnter={handleMouseEnterLogo}>
            <HeaderLogo />
          </div>

          <div className='tm:hidden tl:flex'>
            <NavLinks onNavLinkActive={handleNavLinkActive} />
          </div>

          <div className=' tm:gap-0 tm:flex  Iconsnav items-center  flex space-x-4 tm:pr-0 pr-16 gap-6'>
            <div className='tm:ml-[-78px] tl:hidden logo_two tm:p-0'>
              <HeaderLogo />
            </div>
            <ButtonWithIcon
              onMouseEnter={handleMouseEnterSearch}
              onMouseLeave={handleMouseLeaveSearch}
              onClick={() => setSearchModalOpen(true)}
              className=' hover:bg-gray-200  w-[40px]  h-[40px] border-0 border-b-0 pt-[1.1rem] pr-[2.3rem] pb-[2.5rem] pl-[1.1rem] sm:ml-0'>
              <Icon icon={isSearchHovered ? HoverSearch : searchIcon} className='text-black' />
            </ButtonWithIcon>
            <SearchModal isOpen={isSearchModalOpen} onClose={() => setSearchModalOpen(false)} />
            <div
              onMouseEnter={handleMouseEnterProfile}
              onMouseLeave={handleMouseLeaveProfile}
            >
              <ButtonWithIcon className='hover:bg-gray-200 tm:hidden profile w-[40px] h-[40px] border-0 border-b-0 pt-[1.1rem] pr-[2.3rem] pb-[2.5rem] pl-[1.1rem]'>
                <Icon icon={isProfileHovered ? HoverProfile : profile} className='text-black' />
              </ButtonWithIcon>

              {isProfileHovered && (
                <Popover className=' hover:bg-gray-200float-left right-[0px] w-[415px] pt-3 pb-3 boxshadow'>
                  <h2 className='p-4 h-[128px] text-tertiary-400 tracking-wider font-bold text-base leading-24 w-full mt-6 HeroNewLight font-HeroNewRegular'>
                    If you have a professional account, please login. If you would like to establish a professional account please click Create Account.
                  </h2>
                  <div className='pop_up p-4 flex gap-4'>
                    {/* <PrimaryButton className='w-[152px] font-bold text-base  text-sm font-HeroNewBold'>Login In</PrimaryButton> */}
                    <CreateAccountButton className='w-[90%] font-HeroNewBold text-sm' onClick={modalSetToggle}>Login</CreateAccountButton>
                    {/* {toggle && <LoginModal closeModal={modalSetToggle} />} */}
                    <CreateAccountButton className='w-[90%] font-HeroNewBold text-sm' onClick={handleRegisterClick}>Create Account</CreateAccountButton>

                  </div>
                </Popover>
              )}
            </div>

            {/* Cart Button and Popover */}
            <div
              onMouseEnter={handleMouseEnterCart}
              onMouseLeave={handleMouseLeaveCart}
            >
              <ButtonWithIcon className='w-[40px] h-[40px] border-0 border-b-0 pt-[1.1rem]  pr-[39px] pb-[2.5rem] pl-[18px]'>
                <Icon icon={isCartHovered ? HoverCart : cart} className='text-black' onClick={handleCartClick} />
              </ButtonWithIcon>

              {isCartHovered && (
                <Popover className='float-left right-[0px] w-[371px] pt-3 pb-3 boxshadow tm:pl-9'>
                  <h2 className='p-4 h-[128px]  text-tertiary-400 tracking-wider font-bold tm:pr-[18px] tm:pl-[52px] text-base leading-24 w-full mt-6 font-HeroNewRegular'>
                    If you have a professional account, please login. If you would like to establish a professional account please click Create Account.
                  </h2>
                  <div className='pop_up p-4 m-1 flex gap-[3] tm:pr-[5px] tm:pl-[24px] gap-4 text-nowrap'>
                    <CreateAccountButton className='w-[148px] font-HeroNewBold text-sm' onClick={modalSetToggle}>Login In</CreateAccountButton>
                    <CreateAccountButton className='w-[148px] font-HeroNewBold text-sm' onClick={handleRegisterClick}>Register Now</CreateAccountButton>
                  </div>
                </Popover>
              )}
            </div>
          </div>
        </div>

        {isNavActive && submenuData && (
          <div >
            <SubMenu className={`hidden lg:block ${isNavActive ? 'block' : ''}`}
              isActive={isNavActive}
              submenu={submenuData}
              handleMouseEnter={() => setIsSubmenuHovered(false)}
              handleMouseLeave={() => {
                setIsNavActive(false);
              }}
            />
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
