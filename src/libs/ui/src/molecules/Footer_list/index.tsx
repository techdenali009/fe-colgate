import React from 'react';
import Link from '@ui/atoms/Footer_element';
import { Label } from '@ui/atoms/Label/index';


type LinkGroupProps = {
  links: { url: string; label: string }[];
  className?: string;
};
 
const LinkGroup: React.FC<LinkGroupProps> = ({ links, className = '' }) => (
  <ul className={className}>
    {links.map((link, index) => (
      <Link key={index} url={link.url} className="py-2 pr-2 mb-3 hover:bg-[rgba(51,51,51,0.5)] hover:bg-opacity-50 hover:underline hover:underline-offset-4">
        <Label className='py-1 px-3 hover:underline hover:underline-offset-4'>{link.label}</Label> 
      </Link>
    ))}
  </ul>
);

export default LinkGroup;
