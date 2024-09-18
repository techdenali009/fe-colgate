import { HeadingProps } from '@utils/interfaces';
import React from 'react';


export const Heading: React.FC<HeadingProps> = ({ text }) => {
  return <h1 className="text-3xl font-bold">{text}</h1>;
};
