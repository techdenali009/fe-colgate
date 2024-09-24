import React from 'react';
import LinkGroup from '@ui/molecules/Footer_list'; // Adjust the path as needed
import { Label } from '@ui/atoms/Label/index';
import Paragraph from '@ui/atoms/Paragraph/paragraph';
import { Image } from '@ui/atoms/LogoImage/logoimg';
import { ABOUT, APPOWNER, CUSTOMER_SERVICE, LEARN, OTHERLINKS, SHOP_D, } from '@utils/constants';
import { About, CustomerService, Learn, OtherLinks, shop } from '@utils/test';
import AccordionItem from '@ui/molecules/AccordianItem';

const Footer: React.FC = () => {
  // const navigation = useNavigate();
  const navigate = (pageName: string, contentType: string) => {
    console.log('pageName', pageName, contentType);
  }
  return <footer className="bg-black text-white ">
    <div className='lg:p-11 lg:mx-8 '>
      {/* Desktop view */}
      <div className='hidden lg:flex xl:flex'>
        <div className=' text-left w-1/4 '>
          <div className='mb-5'><Label className='font-bold text-brand-white-100 ps-3 text-base'>{SHOP_D}</Label></div>
          <LinkGroup links={shop} className="text-white" onClick={(pageName) => {
            navigate(pageName, 'Shop')
          }} />

        </div>
        <div className='text-left w-1/4'>
          <div className='mb-5'><Label className='font-bold text-brand-white-100 ps-3 text-base'>{LEARN}</Label></div>
          <LinkGroup links={Learn} className="text-white" onClick={(pageName) => {
            navigate(pageName, 'Learn')
          }} />
        </div>
        <div className='text-left w-1/4'>
          <div className='mb-5'><Label className='font-bold text-brand-white-100 ps-3 text-base'>{ABOUT}</Label></div>
          <LinkGroup links={About} className="text-white" onClick={(pageName) => {
            navigate(pageName, 'About')
          }} />
        </div>
        <div className='text-left w-1/4'>
          <div className='mb-5'><Label className='font-bold text-brand-white-100 ps-3 text-base'>{CUSTOMER_SERVICE}</Label></div>
          <LinkGroup links={CustomerService} className="text-white" onClick={(pageName) => {
            navigate(pageName, 'Customer Service')
          }} />
        </div>
      </div>

      <div className='hidden lg:flex xl:flex'>
        <div className='mb-5'><Label className='hidden'>{OTHERLINKS}</Label></div>
        <LinkGroup links={OtherLinks} className="flex mb-4 footer-item items-center pt-8" onClick={(pageName) => {
          navigate(pageName, 'otherLinks')
        }} />
      </div>

      <div className=' hidden  flex-col items-center py-8 text-brand-white-100 lg:flex-row logo-wrapper h-3  lg:flex xl:flex'>
        <Image src={'src/libs/ui/assets/appSvgs/PCA_LOGO.svg'} alt={''} className=''></Image>
        <Paragraph className='p-8 mb-4'>{APPOWNER}</Paragraph>
      </div>


      {/* responsive view */}
      <div className=''>
        <div id="Accordian" className='lg:hidden flex-col text-white bg-black sm:px-6 pt-10 '>
          <AccordionItem title='Shop' className='bg-black' containerClassName='' titleClassName='text-white text-base font-bold pr-4' contentClassName='' >
            <LinkGroup links={shop} className="text-white bg-black" onClick={(pageName) => navigate(pageName, 'Shop')} />
          </AccordionItem>
          <hr className='px-6 mx-4'></hr>
          <AccordionItem title={LEARN} className='bg-black' containerClassName="" titleClassName='text-white text-base font-bold' contentClassName=''>
            <LinkGroup links={Learn} className="text-white bg-black" onClick={(pageName) => navigate(pageName, 'Learn')} />
          </AccordionItem>
          <hr className='px-6 mx-4'></hr>
          <AccordionItem title={ABOUT} className='bg-black' containerClassName="" titleClassName='text-white text-base font-bold' contentClassName=''>
            <LinkGroup links={About} className="text-white bg-black" onClick={(pageName) => navigate(pageName, 'About')} />
          </AccordionItem>
          <hr className='px-6 mx-4'></hr>
          <AccordionItem title={CUSTOMER_SERVICE} className='bg-black' containerClassName="" titleClassName='text-white text-base font-bold' contentClassName=''>
            <LinkGroup links={CustomerService} className="text-white bg-black" onClick={(pageName) => navigate(pageName, 'Customer Service')} />
          </AccordionItem>
          <hr className='px-6 mx-4'></hr>
          <AccordionItem title={OTHERLINKS} className='bg-black' containerClassName="" titleClassName='text-white text-base font-bold' contentClassName=''>
            <LinkGroup links={OtherLinks} className="text-white bg-black" onClick={(pageName) => {
              navigate(pageName, 'otherLinks')
            }} />
          </AccordionItem>
          <hr className='px-6 mx-4'></hr>
        </div>

        <div className='lg:hidden sm:text-left py-8 md:text-left px-9'>
          <Image src={'src/libs/ui/assets/appSvgs/PCA_LOGO.svg'} alt={''} className=''></Image>
          <Paragraph className='pt-4 text-xs'>{APPOWNER}</Paragraph>
        </div>
      </div>
    </div>
  </footer>
};

export default Footer;
