import React from 'react';

interface BusinessCardSkeletonProps {
  className?: string;
}

const BusinessCardSkeleton: React.FC<BusinessCardSkeletonProps> = ({className}) => {
  return (
    <div className={`w-[500px] h-auto max-w-full rounded-lg overflow-hidden shadow-lg border border-gray-200 animate-pulse1 ${className}`}>    
      <div className="px-8 py-6">
        <div className="w-32 h-8 bg-gray-300 rounded"></div>
      </div>

      <div className="px-8">
        <div className="h-64 bg-gray-300 rounded"></div>
      </div>

      <div className="px-8 py-6">
        <div className="space-y-4">
          <div className="bg-gray-300 animate-pulse w-full h-12 mb-4"></div>
        </div>
        <div className="space-y-4">
          <div className="bg-gray-300 animate-pulse w-full h-12 mb-4"></div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCardSkeleton;
