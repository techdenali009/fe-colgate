import React from 'react';
import LinkGroup from '@ui/molecules/FooterList'; // Adjust the path as needed
import { Label } from '@ui/atoms/Label/index';
import Paragraph from '@ui/atoms/Paragraph/paragraph';
import { Logo } from '@ui/atoms/Logo/logo';
import { ABOUT, APPOWNER, CUSTOMER_SERVICE, LEARN, OTHERLINKS, SHOP_D, } from '@utils/constants';
import { About, CustomerService, Learn, OtherLinks, shop } from '@utils/constants';
import AccordionItem from '@ui/molecules/AccordianItem';
import PCA_LOGO from '../../../assets/logo.svg';
import { appSetting } from '@utils/appSetting';
import { useNavigate } from 'react-router-dom';


const Footer: React.FC = () => {
  const navigate = useNavigate();
  const redirection = (title: string, selectNavLink: string) => {

    // let finalCatagory = selectNavLink;
    const catagory = appSetting.find((link) => link.title.toLocaleLowerCase() === selectNavLink.toLocaleLowerCase());
    const isNavigate =
      catagory &&
      catagory?.canNavigate &&
      catagory?.navigationPages.find(
        (label) => label?.toLocaleLowerCase().includes(title?.toLocaleLowerCase()));
    
    if (isNavigate) {
      let subUrl = title === 'Shipping' ? 'Shipping terms' : title;
      subUrl = title === 'Returns' ? 'Returns exchanges' : subUrl;
      const encodedTitle = subUrl.toLocaleLowerCase().replace(/[\s&]+/g, '-');
      navigate(`${selectNavLink}/${encodedTitle}`);
    }
  }

  return (
    <footer className="bg-black text-white ">
      <div className='px-6  m-0 lg:p-14 lg:!pb-0 lg:!pt-14 lg:mx-10'>
        {/* Desktop view */}
        <div className='hidden lg:flex gap-8 xl:flex '>
          <div className=' text-left w-1/4 mb-4 '>
            <div className='mb-5'><Label className='font-bold text-brand-white-100  text-base font-HeroNewBold'>{SHOP_D}</Label></div>
            <LinkGroup links={shop} className="text-white font-HeroNewLight" onClick={(pageName) => {
              redirection(pageName, 'Shop')
            }} />

          </div>
          <div className='text-left w-1/4 mb-4'>
            <div className='mb-5'><Label className='font-bold text-brand-white-100  text-base font-HeroNewBold'>{LEARN}</Label></div>
            <LinkGroup links={Learn} className="text-white font-HeroNewLight" onClick={(pageName) => {
              redirection(pageName, 'Learn')
            }} />
          </div>
          <div className='text-left w-1/4 mb-4'>
            <div className='mb-5'><Label className='font-bold text-brand-white-100  text-base font-HeroNewBold'>{ABOUT}</Label></div>
            <LinkGroup links={About} className="text-white font-HeroNewLight" onClick={(pageName) => {
              redirection(pageName, 'About')
            }} />
          </div>
          <div className='text-left w-1/4 mb-4'>
            <div className='mb-5'><Label className='font-bold text-brand-white-100  text-base font-HeroNewBold'>{CUSTOMER_SERVICE}</Label></div>
            <LinkGroup links={CustomerService} className="text-white font-HeroNewLight" onClick={(pageName) => {
              redirection(pageName, 'About')
            }} />
          </div>
        </div>

        <div className='hidden lg:flex gap-1 xl:flex  '>
          <div className='mb-5'><Label className='!px-4 hidden '>{OTHERLINKS}</Label></div>
          <LinkGroup links={OtherLinks} className="-ml-2  pr-1 !mb-0 flex  footer-item items-center pt-8 text-sm font-HeroNewLight" onClick={(pageName) => {
            redirection(pageName, 'About')
          }} />
        </div>

        <div className='hidden flex-col items-center py-8 text-brand-white-100 lg:flex-row logo-wrapper h-3  lg:flex xl:flex pb-14 pr-1 -ml-1'>
          <Logo src={PCA_LOGO} alt={''} className='scale-y-[1] h-24'></Logo>
          <Paragraph className='p-8  text-[16px]'>{APPOWNER}</Paragraph>
        </div>


        {/* responsive view */}
        <div className=''>
          <div id="Accordian" className='mb-10 pt-10 lg:hidden flex-col text-white bg-black  '>
            <AccordionItem title='Shop' className='bg-black  px-0' containerClassName='mb-0' titleClassName=' text-base font-bold pr-4 text-brand-white-100 font-HeroNewBold' contentClassName='' >
              <LinkGroup links={shop} className=" text-white bg-black " onClick={(pageName) => redirection(pageName, 'Shop')} />
            </AccordionItem>
            <hr className='px-6 '></hr>
            <AccordionItem title={LEARN} className='bg-black px-0' containerClassName="mb-0" titleClassName='text-base font-bold pr-4 text-brand-white-100 font-HeroNewBold' contentClassName=''>
              <LinkGroup links={Learn} className="text-white bg-black" onClick={(pageName) => redirection(pageName, 'Learn')} />
            </AccordionItem>
            <hr className='px-6 '></hr>
            <AccordionItem title={ABOUT} className='bg-black  px-0' containerClassName="mb-0" titleClassName='text-base font-bold pr-4 text-brand-white-100 font-HeroNewBold' contentClassName=''>
              <LinkGroup links={About} className="text-white bg-black" onClick={(pageName) => redirection(pageName, 'About')} />
            </AccordionItem>
            <hr className='px-6 '></hr>
            <AccordionItem title={CUSTOMER_SERVICE} className='bg-black  px-0' containerClassName="mb-0" titleClassName='text-base font-bold pr-4 text-brand-white-100 font-HeroNewBold' contentClassName=''>
              <LinkGroup links={CustomerService} className="text-white bg-black" onClick={(pageName) => redirection(pageName, 'Customer Service')} />
            </AccordionItem>
            <hr className='px-6 '></hr>
            <AccordionItem title={OTHERLINKS} className='bg-black  px-0' containerClassName="mb-0" titleClassName='text-base font-bold pr-4 text-brand-white-100 font-HeroNewBold' contentClassName=''>
              <LinkGroup links={OtherLinks} className="text-white bg-black" onClick={(pageName) => {
                redirection(pageName, 'otherLinks')
              }} />
            </AccordionItem>


            <hr className='px-6 '></hr>
          </div>

          <div className='lg:hidden sm:text-left py-8 md:px-0 '>
            <Logo src={PCA_LOGO} alt={''} className='w-48 h-24'></Logo>
            <Paragraph className='pt-4 text-xs font-HeroNewLight'>{APPOWNER}</Paragraph>
          </div>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
