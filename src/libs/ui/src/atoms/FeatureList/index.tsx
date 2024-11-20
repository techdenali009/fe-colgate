// src/ui/atoms/FeatureList.tsx

import React from 'react';

interface FeatureListProps {
  features: string[];
}

const FeatureList: React.FC<FeatureListProps> = ({ features }) => (
  <ul className='list-disc pl-5'>
    {features.map((feature, index) => (
      <li key={index}>{feature}</li>
    ))}
  </ul>
);

export default FeatureList;
