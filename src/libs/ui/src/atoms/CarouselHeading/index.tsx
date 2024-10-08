import { HeadingProps } from '@utils/interface';
import React from 'react';
import './CarouselHeading.style.scss'


export const Heading: React.FC<HeadingProps> = ({ text }) => {
  return <h1 className='appCarousel-heading pr-[42px]  text-[3rem] leading-[1] text-primary-400 font-light text-4xl mb-4 '>{text}</h1>;
};
