
import React from 'react';

type LinkProps = {
  children: React.ReactNode;
  pageName: string
  className?: string,
  onClick?: (page: string) => void
};

const Link: React.FC<LinkProps> = ({ pageName, children, className = '', onClick }) => (
  <li className={className} onClick={() => {
    if (onClick) {
      onClick(pageName)
    }
  }}>
    {children}
  </li>
);

export default Link;

