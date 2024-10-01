import React from 'react';
import LinkGroup from '@ui/molecules/FooterList'; // Adjust the path as needed
import { Label } from '@ui/atoms/Label/index';
import Paragraph from '@ui/atoms/Paragraph/paragraph';
import { Image } from '@ui/atoms/LogoImage/logoimg';
import { ABOUT, APPOWNER, CUSTOMER_SERVICE, LEARN, OTHERLINKS, SHOP_D, } from '@utils/constants';
import { About, CustomerService, Learn, OtherLinks, shop } from '@utils/test';
import AccordionItem from '@ui/molecules/AccordianItem';
import PCA_LOGO from '../../../assests/appSvgs/PCA_LOGO.svg';


const Footer: React.FC = () => {
  // const navigation = useNavigate();
  const navigate = (pageName: string, contentType: string) => {
    console.log('pageName', pageName, contentType);
  }
  return (
    <footer className="bg-black text-white ">
      <div className='px-6  m-0 lg:p-14 lg:!pb-0 lg:!pt-14 lg:mx-10'>
        {/* Desktop view */}
        <div className='hidden lg:flex gap-8 xl:flex '>
          <div className=' text-left w-1/4 mb-4 '>
            <div className='mb-5'><Label className='font-bold text-brand-white-100  text-base font-HeroNewBold'>{SHOP_D}</Label></div>
            <LinkGroup links={shop} className="text-white font-HeroNewLight" onClick={(pageName) => {
              navigate(pageName, 'Shop')
            }} />

          </div>
          <div className='text-left w-1/4 mb-4'>
            <div className='mb-5'><Label className='font-bold text-brand-white-100  text-base font-HeroNewBold'>{LEARN}</Label></div>
            <LinkGroup links={Learn} className="text-white font-HeroNewLight" onClick={(pageName) => {
              navigate(pageName, 'Learn')
            }} />
          </div>
          <div className='text-left w-1/4 mb-4'>
            <div className='mb-5'><Label className='font-bold text-brand-white-100  text-base font-HeroNewBold'>{ABOUT}</Label></div>
            <LinkGroup links={About} className="text-white font-HeroNewLight" onClick={(pageName) => {
              navigate(pageName, 'About')
            }} />
          </div>
          <div className='text-left w-1/4 mb-4'>
            <div className='mb-5'><Label className='font-bold text-brand-white-100  text-base font-HeroNewBold'>{CUSTOMER_SERVICE}</Label></div>
            <LinkGroup links={CustomerService} className="text-white font-HeroNewLight" onClick={(pageName) => {
              navigate(pageName, 'Customer Service')
            }} />
          </div>
        </div>

        <div className='hidden lg:flex gap-1 xl:flex  '>
          <div className='mb-5'><Label className='!px-4 hidden '>{OTHERLINKS}</Label></div>
          <LinkGroup links={OtherLinks} className="-ml-2  pr-1 !mb-0 flex  footer-item items-center pt-8 text-sm font-HeroNewLight" onClick={(pageName) => {
            navigate(pageName, 'otherLinks')
          }} />
        </div>

        <div className='hidden flex-col items-center py-8 text-brand-white-100 lg:flex-row logo-wrapper h-3  lg:flex xl:flex pb-14 pr-1 -ml-1'>
          <Image src={PCA_LOGO} alt={''} className=''></Image>
          <Paragraph className='p-8 mb-4 text-xs'>{APPOWNER}</Paragraph>
        </div>


        {/* responsive view */}
        <div className=''>
          <div id="Accordian" className='mb-10 pt-10 lg:hidden flex-col text-white bg-black  '>
            <AccordionItem title='Shop' className='bg-black  px-0' containerClassName='mb-0' titleClassName=' text-base font-bold pr-4 text-brand-white-100 font-HeroNewBold' contentClassName='' >
              <LinkGroup links={shop} className=" text-white bg-black " onClick={(pageName) => navigate(pageName, 'Shop')} />
            </AccordionItem>
            <hr className='px-6 '></hr>
            <AccordionItem title={LEARN} className='bg-black px-0' containerClassName="mb-0" titleClassName='text-base font-bold pr-4 text-brand-white-100 font-HeroNewBold' contentClassName=''>
              <LinkGroup links={Learn} className="text-white bg-black" onClick={(pageName) => navigate(pageName, 'Learn')} />
            </AccordionItem>
            <hr className='px-6 '></hr>
            <AccordionItem title={ABOUT} className='bg-black  px-0' containerClassName="mb-0" titleClassName='text-base font-bold pr-4 text-brand-white-100 font-HeroNewBold' contentClassName=''>
              <LinkGroup links={About} className="text-white bg-black" onClick={(pageName) => navigate(pageName, 'About')} />
            </AccordionItem>
            <hr className='px-6 '></hr>
            <AccordionItem title={CUSTOMER_SERVICE} className='bg-black  px-0' containerClassName="mb-0" titleClassName='text-base font-bold pr-4 text-brand-white-100 font-HeroNewBold' contentClassName=''>
              <LinkGroup links={CustomerService} className="text-white bg-black" onClick={(pageName) => navigate(pageName, 'Customer Service')} />
            </AccordionItem>
            <hr className='px-6 '></hr>
            <AccordionItem title={OTHERLINKS} className='bg-black  px-0' containerClassName="mb-0" titleClassName='text-base font-bold pr-4 text-brand-white-100 font-HeroNewBold' contentClassName=''>
              <LinkGroup links={OtherLinks} className="text-white bg-black" onClick={(pageName) => {
                navigate(pageName, 'otherLinks')
              }} />
            </AccordionItem>


            <hr className='px-6 '></hr>
          </div>

          <div className='lg:hidden sm:text-left py-8 md:px-0 '>
            <Image src={PCA_LOGO} alt={''} className=''></Image>
            <Paragraph className='pt-4 text-xs font-HeroNewLight'>{APPOWNER}</Paragraph>
          </div>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
