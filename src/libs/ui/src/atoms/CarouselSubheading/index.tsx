import { SubheadingProps } from '@utils/interface';
import React from 'react';



export const Subheading: React.FC<SubheadingProps> = ({ text }) => {
  return <p className='carousel-subheading text-base font-semibold lg:text-brand-white-100 mb-6 lg:mb-10 font-regular leading-[1.5rem]  hero-desc-wrapper'>{text}</p>;
};
