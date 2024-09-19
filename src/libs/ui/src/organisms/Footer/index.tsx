import React from 'react';
import LinkGroup from '@ui/molecules/Footer_list'; // Adjust the path as needed
import { Label } from '@ui/atoms/Labels/Label';
import Paragraph from '@ui/atoms/Paragraph/paragraph';

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

const Footer: React.FC = () => (
  <footer className="footer-class">
    <div className='flex'>
      <div>
        <Label text={'Shop'} className='font-bold text-brand-white-100'></Label>
        <LinkGroup links={shop} className="shop" />
      </div>
      <div>
        <Label text={'Learn'} className='w-full text-base font-bold leading-6 tracking-[0.02rem] text-brand-white-100'></Label>
        <LinkGroup links={Learn} className="Learn" />
      </div>
      <div>
        <Label text={'About'} className='w-full text-base font-bold leading-6 tracking-[0.02rem] text-brand-white-100'></Label>
        <LinkGroup links={About} className="About" />
      </div>
      <div>
        <Label text={'Customer Service'} className='w-full text-base font-bold leading-6 tracking-[0.02rem] text-brand-white-100'></Label>
        <LinkGroup links={CustomerService} className="CustomerService" />
      </div>


    </div>

    <div className=''>
      <LinkGroup links={shop} className="flex mb-4 footer-item items-center" />
    </div>

    <div className=''>
      <Paragraph className='text-sm font-light lg:text-base font-white'>© 2023 CP Skin Health Group. All Rights Reserved</Paragraph>
    </div>
  </footer>
);

export default Footer;
