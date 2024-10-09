import React from 'react';

interface AnchorProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const Anchor: React.FC<AnchorProps> = ({ href, children, className }) => {
  return (
    <a 
      href={href} 
      className={`text-sm lg:text-sm text-blue-600 ${className}`} 
    >
      {children}
    </a>
  );
};

export default Anchor;
