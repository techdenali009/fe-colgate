import React from 'react';

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

export const Heading: React.FC<HeadingProps> = ({ children, className }) => {
  return (
    <h1 className={`text-primary-400 lg:text-4xl text-appTheme font-HeroNewUltraLight tracking-normal w-full flex justify-center text-center items-center font-extralight leading-10 mb-6 ${className}`}>
      {children}
    </h1>
  );
};
