import React from 'react';

interface SkeletonProps {
    className?: string; // Accepts dynamic class name as a prop
}

const Skeleton: React.FC<SkeletonProps> = ({ className = '' }) => {
  return (
    <div className="w-80">
      <div className={`bg-gray-300 animate-pulse w-full h-8 mb-2 ${className}`} /> 
    </div>    
  );
};

export default Skeleton;
