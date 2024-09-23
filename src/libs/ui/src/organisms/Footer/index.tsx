import React from 'react';
import LinkGroup from '@ui/molecules/Footer_list'; // Adjust the path as needed
import { Label } from '@ui/atoms/Label/index';
import Paragraph from '@ui/atoms/Paragraph/paragraph';
import { Image } from '@ui/atoms/LogoImage/logoimg';
import { about, Appowner, customer_Service, learn, otherLinks, shop_d } from '@utils/constants';
import { About, CustomerService, Learn, OtherLinks, shop } from '@utils/test';
import AccordionItem from '@ui/molecules/AccordianItem';

const Footer: React.FC = () => {
  // const navigation = useNavigate();
  const navigate = (pageName: string, contentType: string) => {
    console.log('pageName', pageName);
  }
  return <footer className="bg-black text-white ">
    <div className='lg:p-11 lg:mx-8 '>
      {/* Desktop view */}
      <div className='hidden lg:flex xl:flex'>
        <div className=' text-left w-1/4 '>
          <div className='mb-5'><Label className='font-bold text-brand-white-100 ps-3 text-base'>{shop_d}</Label></div>
          <LinkGroup links={shop} className="text-white" onClick={(pageName) => {
            navigate(pageName, 'Shop')
          }} />

        </div>
        <div className='text-left w-1/4'>
          <div className='mb-5'><Label className='font-bold text-brand-white-100 ps-3 text-base'>{learn}</Label></div>
          <LinkGroup links={Learn} className="text-white" onClick={(pageName) => {
            navigate(pageName, 'Learn')
          }} />
        </div>
        <div className='text-left w-1/4'>
          <div className='mb-5'><Label className='font-bold text-brand-white-100 ps-3 text-base'>{about}</Label></div>
          <LinkGroup links={About} className="text-white" onClick={(pageName) => {
            navigate(pageName, 'About')
          }} />
        </div>
        <div className='text-left w-1/4'>
          <div className='mb-5'><Label className='font-bold text-brand-white-100 ps-3 text-base'>{customer_Service}</Label></div>
          <LinkGroup links={CustomerService} className="text-white" onClick={(pageName) => {
            navigate(pageName, 'Customer Service')
          }} />
        </div>
      </div>

      <div className='hidden lg:flex xl:flex'>
        <div className='mb-5'><Label className='hidden'>{otherLinks}</Label></div>
        <LinkGroup links={OtherLinks} className="flex mb-4 footer-item items-center pt-8" onClick={(pageName) => {
          navigate(pageName, 'otherLinks')
        }} />
      </div>

      <div className=' hidden  flex-col items-center py-8 text-brand-white-100 lg:flex-row logo-wrapper h-3  lg:flex xl:flex'>
        <Image src={'https://www.pcaskinpro.com/cms/assets/c2782b46-2b21-4342-87aa-8831260c2f20.svg?key=pca-en-us-footer-brand-logo-medium'} alt={'FooterLogo'} className='ps-3'></Image>
        <Paragraph className='p-8 mb-4'>{Appowner}</Paragraph>
      </div>


      {/* responsive view */}
      <div id="Accordian" className='lg:hidden flex-col text-white bg-black sm:px-6'>
        <AccordionItem title='Shop' className='bg-black' containerClassName='' titleClassName='text-white text-base font-bold pr-4' contentClassName='' >
          <LinkGroup links={shop} className="text-white bg-black" onClick={(pageName) => navigate(pageName, 'Shop')} />
        </AccordionItem>
        <hr className='px-6 mx-4'></hr>
        <AccordionItem title='Learn' className='bg-black' containerClassName="" titleClassName='text-white text-base font-bold' contentClassName=''>
          <LinkGroup links={Learn} className="text-white bg-black" onClick={(pageName) => navigate(pageName, 'Learn')} />
        </AccordionItem>
        <hr className='px-6 mx-4'></hr>
        <AccordionItem title='About' className='bg-black' containerClassName="" titleClassName='text-white text-base font-bold' contentClassName=''>
          <LinkGroup links={About} className="text-white bg-black" onClick={(pageName) => navigate(pageName, 'About')} />
        </AccordionItem>
        <hr className='px-6 mx-4'></hr>
        <AccordionItem title='Customer Service' className='bg-black' containerClassName="" titleClassName='text-white text-base font-bold' contentClassName=''>
          <LinkGroup links={CustomerService} className="text-white bg-black" onClick={(pageName) => navigate(pageName, 'Customer Service')} />
        </AccordionItem>
        <hr className='px-6 mx-4'></hr>
        <AccordionItem title='otherLinks' className='bg-black' containerClassName="" titleClassName='text-white text-base font-bold' contentClassName=''>
          <LinkGroup links={OtherLinks} className="text-white bg-black" onClick={(pageName) => {
            navigate(pageName, 'otherLinks')
          }} />
        </AccordionItem>
        <hr className='px-6 mx-4'></hr>
      </div>

      <div className='lg:hidden sm:text-left py-8 md:text-left px-9'>
        <Image src={'https://www.pcaskinpro.com/cms/assets/c2782b46-2b21-4342-87aa-8831260c2f20.svg?key=pca-en-us-footer-brand-logo-medium'} alt={'FooterLogo'} className=''></Image>
        <Paragraph className='pt-4 text-xs'>{Appowner}</Paragraph>
      </div>
    </div>
  </footer>
};

export default Footer;
