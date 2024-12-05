import React, { useState, useEffect } from 'react';
import { ButtonWithIcon } from '@ui/molecules/ButtonWithIcon/index';
import Popover from '@ui/molecules/Popover/Popover';
import './header.styles.scss';
import NavLinks from '@ui/molecules/NavLink/NavLink';
import SubMenu from '@ui/molecules/SubMenu/SubMenu';
import { HeaderLogo } from '@ui/atoms/HeaderLogo';
import SearchModal from '@ui/molecules/SearchModal';
import { CreateAccountButton } from '@ui/atoms/CreateAccountButton';
import { useNavigate } from 'react-router-dom';
import { appSetting } from '@utils/appSetting';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store/store';
import { logout } from '@store/services/Slices/authSlice';
import logout_blue from '../../../assets/logout_blue.5f7a5450.svg';

import CartIcon from '@ui/atoms/SvgAtoms/CartIcon';
import ProfileIcon from '@ui/atoms/SvgAtoms/ProfileIcon';
import SearchIcon from '@ui/atoms/SvgAtoms/SearchIcon';
import { plpFilters } from '@utils/plpFilterData';
import { useLogoutMutation } from '@store/services/Endpoints/AuthApi';

import CartModal from '@ui/molecules/Cart-modal';
import AccountButton from '@ui/molecules/Profile-modal';
import ProfileModal from '@ui/molecules/Profile-modal';
interface headerProps {
  modalSetToggle: () => void;
  handleRegisterClick: () => void;
}
const Header: React.FC<headerProps> = ({
  modalSetToggle,
  handleRegisterClick,
}) => {
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

  const [selectNavLink, setSelectNavLink] = useState<string>('');
  const dispatch = useDispatch();
  const [LogOut] = useLogoutMutation();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(
    (state: RootState) => state.authSlice.userInfo
  );
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

  const handleNavLinkClick = (title: string, parentCatagory: string = '') => {
    const catagory = appSetting.find(
      (link) =>
        link.title.toLocaleLowerCase() === selectNavLink.toLocaleLowerCase()
    );

    const isNavigate =
      catagory &&
      catagory?.canNavigate &&
      (catagory?.navigationPages.includes(title) ||
        selectNavLink === appSetting[0].title);

    if (isNavigate) {
      let mainCategory = selectNavLink;
      let url = `${mainCategory}`;

      if (selectNavLink === appSetting[0].title) {
        // Default main category for products page
        mainCategory = 'products';
        url = `${mainCategory}`;

        // Helper function for encoding and formatting based on parent category
        const getCategoryParam = (parentCat: string, optionTitle: string) => {
          switch (parentCat) {
            case 'Professional treatments':
            case 'Daily care':
              return `category=${encodeURIComponent(optionTitle)}`;
            case 'By skin type':
              return `skin-type=${encodeURIComponent(optionTitle)}`;
            case 'By skin concern':
              return `skin-concern=${encodeURIComponent(optionTitle)}`;
            default:
              return `${parentCat
                .replace(/ /g, '-')
                .toLowerCase()}=${encodeURIComponent(optionTitle)}`;
          }
        };

        // Construct URL with different formats based on parent category
        if (title === 'View All' || title === 'Best Seller') {
          const additionalCategories = plpFilters
            .filter((filter) => filter.mainCatagory === parentCatagory)
            .flatMap((filter) => filter.options)
            .filter((option) => option.title)
            .map((option) => getCategoryParam(parentCatagory, option.title));

          if (title === 'Best Seller') {
            // Ensure a proper separator for the query string
            url = `${url}?${additionalCategories.join(
              '&'
            )}&category=Best Seller`;
          } else {
            url = `${url}?${additionalCategories.join('&')}`;
          }
        } else if (parentCatagory && title) {
          // Specific option selection
          const paramKey = getCategoryParam(parentCatagory, title);
          url = `${url}?${paramKey}`;
        }

        // Update breadcrumbs and navigate
        navigate(url);
        return;
      }

      if (
        [
          appSetting[3].title,
          appSetting[1].title,
          appSetting[2].title,
        ].includes(selectNavLink)
      ) {
        const encodedTitle = title.replace(/[\s&]+/g, '-');
        url = `${url}/${encodedTitle}`;
        navigate(url);
        return;
      }
    }
  };
  const handleLogoutClick = () => {
    LogOut({});
    dispatch(logout());
  };
  return (
    <>
      <header
        id="header_shadow"
        className={`${isFixed
            ? 'fixed top-0 left-0 w-full z-50 bg-white dark:bg-appModalColor'
            : ''
          }`}
      >
        <div className="tm:py-0 tm:px-6  flex gap-0 items-center justify-between font-serif shadow-[3px_2px_0_#e8eced] dark:shadow-[3px_3px_0_#242528] dark:bg-appModalColor">
          <div className="tm:flex tl:hidden humburger">
            <NavLinks
              setSelectNavLink={setSelectNavLink}
              onNavLinkActive={handleNavLinkActive}
              onNavLinkClick={handleNavLinkClick}
            />
          </div>

          <div
            className="tm:hidden logo_one  lg:ml-[80px] "
            onMouseEnter={handleMouseEnterLogo}
          >
            <HeaderLogo />
          </div>

          <div className="tm:hidden tl:flex">
            <NavLinks
              setSelectNavLink={setSelectNavLink}
              onNavLinkActive={handleNavLinkActive}
              onNavLinkClick={handleNavLinkClick}
            />
          </div>

          <div className=" tm:gap-0 tm:flex Iconsnav items-center  flex  tm:space-x-0 lg:pr-[2rem] xl:pr-[5rem] xl:gap-2">
            <div className="tm:ml-[-78px] tl:hidden logo_two tm:pr-2">
              <HeaderLogo />
            </div>
            <ButtonWithIcon
              onMouseEnter={handleMouseEnterSearch}
              onMouseLeave={handleMouseLeaveSearch}
              onClick={() => setSearchModalOpen(true)}
              className=" hover:bg-gray-200   w-[40px]  h-[40px] border-0 border-b-0 pt-[1.1rem] pr-[2.3rem] pb-[2.5rem] pl-[1.1rem] sm:ml-0 dark:hover:bg-appTheme-opacity-10"
            >
              {isSearchHovered ? (
                <SearchIcon></SearchIcon>
              ) : (
                <SearchIcon fillColor="var(--secondary-color)"></SearchIcon>
              )}
            </ButtonWithIcon>
            <SearchModal
              isOpen={isSearchModalOpen}
              onClose={() => setSearchModalOpen(false)}
            />
            <div
              onMouseEnter={handleMouseEnterProfile}
              onMouseLeave={handleMouseLeaveProfile}
            >
              <ButtonWithIcon className="hover:bg-gray-200 tm:hidden profile w-[40px] h-[40px] border-0 border-b-0 pt-[1.1rem] pr-[2.3rem] pb-[2.5rem] pl-[1.1rem] dark:hover:bg-appTheme-opacity-10">
                {isProfileHovered ? (
                  <ProfileIcon></ProfileIcon>
                ) : (
                  <ProfileIcon fillColor="var(--secondary-color)"></ProfileIcon>
                )}
              </ButtonWithIcon>

              {isProfileHovered && (
                <>
                  {!isLoggedIn ? (
                    <Popover className=" hover:bg-gray-200float-left right-[0px] w-[415px] pt-3 pb-3 boxshadow">
                      <h2 className="p-4 h-[128px] text-tertiary-400 tracking-wider font-bold text-base leading-24 w-full mt-6 HeroNewLight font-HeroNewRegular">
                        If you have a professional account, please login. If you
                        would like to establish a professional account please
                        click Create Account.
                      </h2>
                      <div className="pop_up p-4 flex gap-4">
                        {/* <PrimaryButton className='w-[152px] font-bold text-base  text-sm font-HeroNewBold'>Login In</PrimaryButton> */}
                        <CreateAccountButton
                          className="w-[90%] font-HeroNewBold text-sm"
                          onClick={modalSetToggle}
                        >
                          Login
                        </CreateAccountButton>
                        {/* {toggle && <LoginModal closeModal={modalSetToggle} />} */}
                        <CreateAccountButton
                          className="w-[90%] font-HeroNewBold text-sm"
                          onClick={handleRegisterClick}
                        >
                          Create Account
                        </CreateAccountButton>
                      </div>
                    </Popover>
                  ) : (
                    <Popover className=" w-1/4 mr-10 ml-2 rounded-none float-left right-[0px] pt-3 pb-3 boxshadow">
                     

                      <ProfileModal handleLogoutClick={handleLogoutClick} />

                    </Popover>
                  )}
                </>
              )}
            </div>

            {/* Cart Button and Popover */}
            <div
              onMouseEnter={handleMouseEnterCart}
              onMouseLeave={handleMouseLeaveCart}
            >
              <ButtonWithIcon
                className="w-[40px] h-[40px] border-0 border-b-0 pt-[1.1rem]  pr-[39px] pb-[2.5rem] pl-[18px] dark:hover:bg-appTheme-opacity-10"
                onClick={handleCartClick}
              >
                {isCartHovered ? (
                  <CartIcon></CartIcon>
                ) : (
                  <CartIcon fillColor="var(--secondary-color)"></CartIcon>
                )}
              </ButtonWithIcon>

              {isCartHovered && (
                <>
                  {isLoggedIn ? (
                    <CartModal />

                  ) : (
                    <Popover className="float-left right-[0px] w-[371px] pt-3 pb-3 boxshadow tm:pl-9">
                      <h2 className="p-4 h-[128px]  text-tertiary-400 tracking-wider font-bold tm:pr-[18px] tm:pl-[52px] text-base leading-24 w-full mt-6 font-HeroNewRegular">
                        If you have a professional account, please login. If you
                        would like to establish a professional account please click
                        Create Account.
                      </h2>
                      <div className="pop_up p-4 m-1 flex gap-[3] tm:pr-[5px] tm:pl-[24px] gap-4 text-nowrap">
                        <CreateAccountButton
                          className="w-[148px] font-HeroNewBold text-sm"
                          onClick={modalSetToggle}
                        >
                          Login In
                        </CreateAccountButton>
                        <CreateAccountButton
                          className="w-[148px] font-HeroNewBold text-sm"
                          onClick={handleRegisterClick}
                        >
                          Register Now
                        </CreateAccountButton>
                      </div>
                    </Popover>
                  )}
                </>
              )}
            </div>
          </div>
        </div>

        {isNavActive && submenuData && (
          <div>
            <SubMenu
              className={`hidden lg:block ${isNavActive ? 'block' : ''}`}
              isActive={isNavActive}
              submenu={submenuData}
              handleMouseEnter={() => setIsSubmenuHovered(false)}
              handleMouseLeave={() => {
                setIsNavActive(false);
              }}
              onNavLinkClick={handleNavLinkClick}
            />
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
