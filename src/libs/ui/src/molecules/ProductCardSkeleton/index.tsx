import React from 'react';

const Skeleton: React.FC = () => {
  return (
    <div className="bg-gray-200 p-6 shadow-md w-80"> {/* Increased width to 80 (20rem) */}
      <div className="bg-gray-300 animate-pulse w-32 h-8 mb-4" /> {/* Larger heading skeleton */}
      <div className="bg-gray-300 animate-pulse w-full h-56 mb-6" /> {/* Larger image skeleton */}
      <div className="bg-gray-300 animate-pulse w-full h-12 mb-4" /> {/* Larger content skeleton */}
      <div className="bg-gray-300 animate-pulse w-full h-8 mb-2" /> {/* Smaller content skeleton */}
    </div>
  );
};

export default Skeleton;

