import React from 'react';

const BusinessCardSkeleton: React.FC = () => {
    return (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg border border-gray-200 animate-pulse">
            <div className="w-full h-48 bg-gray-300"></div>

            <div className="px-6 py-4">
                <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>

                <div className="space-y-2">
                    <div className="h-4 bg-gray-300 rounded w-full"></div>
                    <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                </div>
            </div>
            <div className="px-6 py-4">
                <div className="h-10 bg-gray-300 rounded w-1/2"></div>
            </div>
        </div>
    );
};

export default BusinessCardSkeleton;
