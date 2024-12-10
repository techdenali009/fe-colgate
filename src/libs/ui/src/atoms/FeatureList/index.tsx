// src/ui/atoms/FeatureList.tsx

import React from 'react';

interface FeatureListProps {
  features: string[];
}

const FeatureList: React.FC<FeatureListProps> = ({ features }) => (
  <ul className='list-disc pl-5'>
    {features.length > 0 ? (
      features.map((feature, index) => <li key={index}>{feature}</li>)
    ) : (
      <li>No features available</li>
    )}
  </ul>
);

export default FeatureList;
