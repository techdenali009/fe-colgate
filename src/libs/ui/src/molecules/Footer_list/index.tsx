import React from 'react';
import Link from '@ui/atoms/Footer_element';
import { Label } from '@ui/atoms/Labels/Label';


type LinkGroupProps = {
  links: { url: string; label: string }[];
  className?: string;
};
 
const LinkGroup: React.FC<LinkGroupProps> = ({ links, className = '' }) => (
 
  <ul className={className}>
    {links.map((link, index) => (
      <Link key={index} url={link.url} className="text-brand-white-100 font-light text-base hover:text-brand-white-100 hover:font-bold focus-visible:text-primary-400 focus-visible:bg-brand-white-100 focus-visible:rounded-3xl link inline-block leading-24 tracking-[0.3px] py-1 px-4 -ml-4 mr-4 dark secondary anchor-wrapper false text-base font-light leading-7  footer-links !mr-0 ">
        <Label text={link.label} className=''/> 
      </Link>
    ))}
  </ul>
 
);

export default LinkGroup;
