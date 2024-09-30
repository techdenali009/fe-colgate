import React, { useState, useEffect } from 'react';
import Logo from '@ui/atoms/Logo';
import { ButtonWithIcon } from '@ui/molecules/ButtonWithIcon/index';
import searchIcon from '../../../assests/searchIcon.svg';
import profile from '../../../assests/profile.svg';
import cart from '../../../assests/cart.svg';
import { Icon } from '@ui/atoms/Icons';
import Popover from '@ui/molecules/Popover/Popover';
import { PrimaryButton } from '@ui/molecules/PrimaryButton';
import './header.styles.scss';
import NavLinks from '@ui/molecules/NavLink/NavLink';
import SubMenu from '@ui/molecules/SubMenu/SubMenu';

const Header: React.FC = () => {
  const [isFixed, setIsFixed] = useState<boolean>(false);
  const [isProfileHovered, setIsProfileHovered] = useState(false);
  const [isSearchHovered, setIsSearchHovered] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const [isCartHovered, setIsCartHovered] = useState(false);
  const [isSubmenuHovered, setIsSubmenuHovered] = useState(false);
  const [isNavActive, setIsNavActive] = useState(false);
  const [submenuData, setSubmenuData] = useState<any>(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);

  const handleMouseEnterLogo = () => {
    setIsLogoHovered(true);
    setIsNavActive(false);
  };

  const handleMouseLeaveLogo = () => {
    setIsLogoHovered(false);
  };
  const handleMouseEnterProfile = () => {
    setIsProfileHovered(true);
    setIsNavActive(false);
  };

  const handleMouseLeaveProfile = () => {
    setIsProfileHovered(false);
  };
  const handleMouseEnterSearch = () => {
    setIsSearchHovered(true);
    setIsNavActive(false);
  };

  const handleMouseLeaveSearch = () => {
    setIsSearchHovered(false);
  };
  // Handle scroll to fix header
  const handleScroll = () => {
    setIsFixed(window.scrollY > 0);
  };

  const togglePopover = () => {
    setPopoverOpen((prev) => !prev);

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

  // Handle NavLink activation and submenu data
  const handleNavLinkActive = (isActive: boolean, data: any) => {
    setIsNavActive(isActive);
    setSubmenuData(data);
  };

  // Handle click event for cart popover on small screens
  const handleCartClick = () => {
    if (isSmallScreen) {
      setIsCartHovered(!isCartHovered);
    }
  };

  // Handle mouse enter and leave for large screens
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
          <div className='humburger'><NavLinks onNavLinkActive={handleNavLinkActive} /></div>
          <div className='logo_one' onMouseEnter={handleMouseEnterLogo}
            onMouseLeave={handleMouseLeaveLogo}><Logo /></div>
          <div className='second_nav'><NavLinks onNavLinkActive={handleNavLinkActive} /></div>

          <div className='Iconsnav flex space-x-4 pr-16 gap-6'>
            <div className='second_logo'><Logo /></div>
            <ButtonWithIcon onMouseEnter={handleMouseEnterSearch}
              onMouseLeave={handleMouseLeaveSearch} className='w-[40px] h-[40px] border-0 border-b-0 pt-[1.1rem] pr-[2.3rem] pb-[2.5rem] pl-[1.1rem] sm:ml-0'>
              <Icon icon={searchIcon} className='text-black' />
            </ButtonWithIcon>

            <div
              onMouseEnter={handleMouseEnterProfile}
              onMouseLeave={handleMouseLeaveProfile}
            >
              <ButtonWithIcon className='profile w-[40px] h-[40px] border-0 border-b-0 pt-[1.1rem] pr-[2.3rem] pb-[2.5rem] pl-[1.1rem]'>
                <Icon icon={profile} className='text-black' />
              </ButtonWithIcon>

              {isProfileHovered && (
                <Popover className='float-left right-[0px] w-[415px] pt-3 pb-3 boxshadow'>
                  <h2 className='p-4 h-[128px] text-tertiary-400 tracking-wider font-bold text-base leading-24 w-full mt-6 HeroNewLight font-HeroNewRegular'>
                    If you have a professional account, please login. If you would like to establish a professional account please click Create Account.
                  </h2>
                  <div className='pop_up p-4 flex gap-[3]'>
                    <PrimaryButton className='w-[152px] font-bold text-base text-sm font-HeroNewBold'>Login In</PrimaryButton>
                    <PrimaryButton className='font-bold text-base text-sm font-HeroNewBold'>Create Account</PrimaryButton>
                  </div>
                </Popover>
              )}
            </div>

            {/* Cart Button and Popover */}
            <div
              onMouseEnter={handleMouseEnterCart}
              onMouseLeave={handleMouseLeaveCart}
            >
              <ButtonWithIcon className='w-[40px] h-[40px] border-0 border-b-0 pt-[1.1rem] pr-[39px] pb-[2.5rem] pl-[18px]'>
                <Icon icon={cart} className='text-black' onClick={handleCartClick} />
              </ButtonWithIcon>

              {isCartHovered && (
                <Popover className='float-left right-[0px] w-[371px] pt-3 pb-3 boxshadow'>
                  <h2 className='p-4 h-[128px] text-tertiary-400 tracking-wider font-bold text-base leading-24 w-full mt-6 font-HeroNewRegular'>
                    If you have a professional account, please login. If you would like to establish a professional account please click Create Account.
                  </h2>
                  <div className='pop_up p-4 m-1 flex gap-[3]'>
                    <PrimaryButton className='w-[152px] font-bold text-base font-hero-new-bold text-sm font-HeroNewBold'>Login In</PrimaryButton>
                    <PrimaryButton className='w-[148px] font-bold text-base font-hero-new-bold text-sm font-HeroNewBold'>Register Now</PrimaryButton>
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
              handleMouseEnter={() => setIsSubmenuHovered(false)} // Handle submenu mouse enter
              handleMouseLeave={() => {
                setIsNavActive(false); // Close the submenu if not hovering
              }}
            />
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
