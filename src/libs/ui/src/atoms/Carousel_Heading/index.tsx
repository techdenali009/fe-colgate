import { HeadingProps } from '@utils/interface';
import React from 'react';



export const Heading: React.FC<HeadingProps> = ({ text }) => {
  return <h1 className=" heading
            text-primary-400
            font-light
           text-4xl mb-4 leading-tight">{text}</h1>;
};
