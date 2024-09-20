
import React, { ReactNode } from 'react';

type LinkProps = {
  children: React.ReactNode;
  url: string;
  className?: string
};

const Link: React.FC<LinkProps> = ({ url, children, className = '' }) => (
  <li className={className}>
    {children}
  </li>
);

export default Link;

