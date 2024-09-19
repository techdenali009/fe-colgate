import React from 'react';
import LinkGroup from '@ui/molecules/Footer_list'; // Adjust the path as needed
import { Label } from '@ui/atoms/Labels/Label';
import Paragraph from '@ui/atoms/Paragraph/paragraph';
import { Image } from '@ui/atoms/LogoImage/logoimg';

const shop = [
  { url: '/home', label: 'All Products' },
  { url: '/about', label: 'Daily Care' },
  { url: '/services', label: 'By Treatment' },
  { url: '/contact', label: 'By Skin Type' },
  { url: '/contact', label: 'By Skin Concern' },
];

const Learn = [
  { url: '/home', label: 'Courses' },
  { url: '/about', label: 'Professional Peels' },
  { url: '/services', label: 'Skin Concerns' },
  { url: '/contact', label: 'Skin Types' },
  { url: '/contact', label: 'Skin Intelligence' },
];

const About = [
  { url: '/home', label: 'Our Story' },
  { url: '/about', label: 'Our Peel Legacy' },
  { url: '/services', label: 'Careers' },
];

const CustomerService = [
  { url: '/home', label: 'Contact Service' },
  { url: '/about', label: 'Contact Us' },
  { url: '/services', label: 'FAQ' },
  { url: '/contact', label: 'Shipping' },
  { url: '/services', label: 'Returns' },
];

const OtherLinks = [
  { url: '/home', label: 'PCA SKIN International' },
  { url: '/about', label: 'Privacy Policy' },
  { url: '/services', label: 'Terms & Conditions' },
  { url: '/contact', label: 'Do Not Sell My Personal Information' },
  { url: '/services', label: 'Product excellence' },
];

const Footer: React.FC = () => (
  <footer className="p-11 bg-black text-white">
    <div className='flex'>
      <div className='text-left w-1/4 '>
        <div className='mb-5'><Label text='' className='font-bold text-brand-white-100 ps-3 text-base'>Shop</Label></div>
        <LinkGroup links={shop} className="text-white" />
      </div>
      <div className='text-left w-1/4'>
        <div className='mb-5'><Label text='' className='font-bold text-brand-white-100 ps-3 text-base'>Learn</Label></div>
        <LinkGroup links={Learn} className="text-white" />
      </div>
      <div className='text-left w-1/4'>
        <div className='mb-5'><Label text='' className='font-bold text-brand-white-100 ps-3 text-base'>About</Label></div>
        <LinkGroup links={About} className="text-white" />
      </div>
      <div className='text-left w-1/4'>
        <div className='mb-5'><Label text='' className='font-bold text-brand-white-100 ps-3 text-base'>Customer Service</Label></div>
        <LinkGroup links={CustomerService} className="text-white" />
      </div>
    </div>

    <div className=''>
      <LinkGroup links={OtherLinks} className="flex mb-4 footer-item items-center pt-8 " />
    </div>

    <div className='flex flex-col items-center py-8 text-brand-white-100 lg:flex-row logo-wrapper h-3'>
      <Image src={'https://www.pcaskinpro.com/cms/assets/c2782b46-2b21-4342-87aa-8831260c2f20.svg?key=pca-en-us-footer-brand-logo-medium'} alt={'FooterLogo'} className='ps-3'></Image>
      <Paragraph className='p-8 mb-4'>© 2023 CP Skin Health Group. All Rights Reserved</Paragraph>
    </div>
  </footer>
);

export default Footer;
