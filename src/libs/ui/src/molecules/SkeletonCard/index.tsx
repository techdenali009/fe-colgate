import React from 'react';

interface SkeletonProps {
  width?: string; 
  height?: string;
  borderRadius?: string; 
  className?: string; 
}

const Skeleton: React.FC<SkeletonProps> = ({
  width = 'w-full', 
  height = 'h-5', 
  borderRadius = 'rounded', 
  className = '', 
}) => {
  return (
    <div
      className={`bg-gray-300 animate-pulse ${width} ${height} ${borderRadius} ${className}`}
    />
  );
};

export default Skeleton;
