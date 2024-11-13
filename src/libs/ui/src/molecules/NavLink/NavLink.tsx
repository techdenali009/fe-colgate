import React, { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { Label } from '@ui/atoms/Label';
import { links } from '@utils/NavLinksConstants';

import responsiveProfile from '../../../assets/responsiveProfile.svg';
import Popover from '../Popover/Popover';
import { PrimaryButton } from '../PrimaryButton';
import GreaterArrow from '@ui/atoms/SvgAtoms/GreaterArrow';
import StraightArrow from '@ui/atoms/SvgAtoms/StraightArrow';

interface NavLinksProps {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  onNavLinkActive: (isActive: boolean, submenuData: any) => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  setSelectNavLink: (link: string) => void;
  onNavLinkClick: (title: string) => void;
}

const NavLinks: React.FC<NavLinksProps> = ({
  onNavLinkActive,
  setSelectNavLink,
  onNavLinkClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const [, setActiveMenu] = useState<string | null>(null);
  const [submenuOpen, setSubmenuOpen] = useState<string | null>(null);

  const [popoverOpen, setPopoverOpen] = useState(false);
 
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const handleMouseEnter = (title: string, submenu: any) => {
    if (window.innerWidth >= 1024) {
      setActiveMenu(title);
      onNavLinkActive(true, submenu);
      setSubmenuOpen(title);
      setSelectNavLink(title);
    }
  };

  const handleMouseLeave = () => {
    setSubmenuOpen(null);
  };

  const handleToggleSubmenu = (title: string) => {
    setSubmenuOpen((prev) => (prev === title ? null : title));
    setIsOpen(false);
    setSelectNavLink(title);
  };

  const handleHamburgerClick = () => {
    setIsOpen((prev) => !prev);
    setSubmenuOpen(null);
   
  };

  const togglePopover = () => {
    setPopoverOpen((prev) => !prev);
    setSubmenuOpen(null); // Close any open submenu when toggling popover
   
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleLinkClick = (title: string) => {
    onNavLinkClick(title);
  };


  return (
    <div className="relative">
      <button
        className="lg:hidden p-2 text-appTextColor hover:text-appTheme "
        onClick={handleHamburgerClick}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
      </button>

      <ul
        className={`fixed grid  sm:gap-[0rem] hover:text-appTheme md:gap-[0rem] xl:gap-1 top-0 left-0 w-full bg-white lg:static lg:flex  text-nowrap lg:p-0 p-4 transform lg:transform-none transition-transform duration-300 dark:bg-appModalColor ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } z-20`}
      >
        <span
          className="text-black cursor-pointer lg:hidden !hover:text-blue-600 flex justify-end relative right-[10px]"
          onClick={() => handleHamburgerClick()}
        >
          <HiX size={24} aria-label="back icon" />
        </span>
        {links.map((link) => (
          <li
            key={link.title}
            className="relative border-b  lg:border-none group hover:text-appTheme "
            onMouseEnter={() => handleMouseEnter(link.title, link.submenu)}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="flex hover:text-appTheme items-center text-gray-600 justify-between pt-3 pb-3 pl-4 pr-4 cursor-pointer lg:hover:bg-appTheme-opacity-10 transition-transform duration-300 "
              onClick={() => {
                handleToggleSubmenu(link.title);
                
              }}
            >
              <Label className="font-HeroNewRegular text-gray-600 text-base font-normal relative z-10 group-hover:text-appTheme group-hover:underline transition-colors duration-300 dark:text-appWhiteTheme-opacity-60" >
                {link.title}
              </Label>
              {link.submenu && (
                <span className="ml-2 lg:hidden">
                  {submenuOpen === link.title ? (
                    <span aria-label="collapse icon"></span>
                  ) : (
                    <span aria-label="expand icon">
                      <GreaterArrow></GreaterArrow>
                    </span>
                  )}
                </span>
              )}
            </div>
          </li>
        ))}

        <div className="flex justify-between align-middle menu-layout_two container lg:hidden h-full pt-2.5 pb-32 bg-gray-200 max-w-full  dark:bg-appModalColor">
          <div
            className="profile_signin flex gap-2 pl-4"
            onClick={togglePopover}
          >
            <img
              onClick={togglePopover}
              src={responsiveProfile}
              alt="responsiveProfile"
              className=""
            />
         
            <span className="font-regular text-tertiary-400 ">Sign In</span>
          </div>
          <div className="arrow pr-5">
            <span onClick={togglePopover} aria-label="expand icon">
              <GreaterArrow></GreaterArrow>
            </span>
          </div>
        </div>

        {popoverOpen && (
          <Popover className="w-full h-[78%] rounded-none text-center   right-[0px] w-full pt-3 pb-3 boxshadow">
            <div className="flex justify-between">
              <span onClick={handleHamburgerClick} aria-label="back icon">
                <StraightArrow></StraightArrow>
              </span>
              <h2 className="font-HeroNewBold">signIn</h2>
              <span
                className="text-black cursor-pointer hover:text-appTheme"
                onClick={handleHamburgerClick}
              >
                <HiX size={24} aria-label="back icon" />
              </span>
            </div>
            <h2 className="p-4 h-[128px] text-tertiary-400 text-center font-HeroNewBold  whitespace-normal tracking-wider font-bold text-base leading-24 w-full mt-6 HeroNewLight font-HeroNewRegular">
              If you have a professional account, please login. If you would
              like to establish a professional account please click Create
              Account.
            </h2>
            <div className="pop_up p-4 flex gap-[3]">
              <PrimaryButton className="w-[152px] font-bold text-base text-sm font-HeroNewBold">
                Login In
              </PrimaryButton>
              <PrimaryButton className="font-bold text-base text-sm font-HeroNewBold">
                Create Account
              </PrimaryButton>
            </div>
          </Popover>
        )}
      </ul>

      {submenuOpen && window.innerWidth < 1024 && (
        <ul className="fixed inset-0 w-full h-full bg-white z-30 overflow-hidden dark:bg-appModalColor" >
          <li className="relative h-full" >
            <div className="flex items-center justify-between p-4 bg-white cursor-pointer  transition-transform duration-300 dark:bg-appModalColor"  >
              <span
                onClick={() => {
                  handleHamburgerClick(); 
                 
                }}
                aria-label="back icon"
                
              >
                <StraightArrow></StraightArrow>
              </span>
              <Label className="text-appTextColor font-bold text-xl font-HeroNewBold"
              
              >
                {submenuOpen}
              </Label>
              <span
                className="text-appTextColor cursor-pointer hover:text-appTheme"
                onClick={() => setSubmenuOpen(null)}
              >
                <HiX size={24} aria-label="close icon"  />
              </span>
            </div>
            <div className="px-4 h-[calc(100%-60px)] overflow-y-auto scroll-smooth">
              {links
                .find((link) => link.title === submenuOpen)
                ?.submenu.map((subItem) => (
                  <div key={subItem.title}>
                    <Label className="pb-4 text-[1.08rem] font-bold leading-6 font-HeroNewBold tracking-[0.3px] text-appTextColor text-base hover:text-appTheme cursor-pointer tm:leading-[3.5rem]" >
                      {subItem.title}
                    </Label>
                    {subItem.items && (
                      <ul className="pl-4 border-b border-gray-500 p-2 bg-white grid gap-y-2 text-[1rem] font-HeroNewLight dark:bg-appModalColor">
                        {subItem.items.map((item) => (
                          <li key={item} className="py-1 bg-white dark:bg-appModalColor">
                            <Label
                              className="text-appTextColor hover:text-appTheme  hover:underline cursor-pointer"
                              onClick={() => {

                                handleLinkClick(item); 
                              }}
                            >
                              {item}
                            </Label>
                          </li>
                        ))}
                        {subItem.hasMore && (
                          <li className="text-appTheme pl-[9px] py-3 cursor-pointer hover:underline tm:pl-0 tm:font-bold tm:text-appTheme tm:tracking-tight tm:font-HeroNewBold">
                            <Label>View All</Label>
                          </li>
                        )}
                      </ul>
                    )}
                  </div>
                ))}
            </div>
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavLinks;
