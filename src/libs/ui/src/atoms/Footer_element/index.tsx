
import React, { ReactNode } from 'react';

type LinkProps = {
  children:React.ReactNode;
  url: string;
  className?: string
};

const Link: React.FC<LinkProps> = ({url,children,className = '' }) => (
  <li className='flex mb-4 footer-item items-center'>
    <a href={url} className={className}>
      {children}
    </a>
  </li>
);

export default Link;

 