import React from 'react';

interface AnchorLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;

}

const AnchorLink: React.FC<AnchorLinkProps> = ({
  href,
  children,
  className = '',
  
}) => {
  return (
    <a
      href={href}
      className={className}
    >
      {children}
    </a>
  );
};

export default AnchorLink;
