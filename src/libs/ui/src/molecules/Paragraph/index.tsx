import React from 'react';

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

export const Paragraph: React.FC<ParagraphProps> = ({ children, className }) => {
  return (
    <p className={`text-appTextColor mb-6 font-HeroNewLight font-normal text-sm tracking-wide ${className}`}>
      {children}
    </p>
  );
};
