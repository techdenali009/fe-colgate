import { SubheadingProps } from '@utils/interfaces';
import React from 'react';



export const Subheading: React.FC<SubheadingProps> = ({ text }) => {
  return <p className="text-xl text-gray-500">{text}</p>;
};
