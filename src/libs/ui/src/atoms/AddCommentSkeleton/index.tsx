import React from 'react';
import { UserCircle2 } from 'lucide-react';

const AddCommentSkeleton: React.FC = () => {
  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-4 mt-5 animate-pulse">
      <h3 className="text-xl font-semibold mb-4 text-gray-300 text-center">
        Loading Comments...
      </h3>

      {/* Skeleton Comments List */}
      <div className="space-y-4 mb-6">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg"
          >
            <UserCircle2 className="w-10 h-10 text-gray-300" />
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <div className="h-4 w-32 bg-gray-300 rounded"></div>
                <div className="h-3 w-16 bg-gray-300 rounded"></div>
              </div>
              <div className="h-4 w-full bg-gray-300 rounded mb-2"></div>
              <div className="h-4 w-3/4 bg-gray-300 rounded"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Skeleton Comment Input */}
      <div className="flex items-center space-x-3">
        <UserCircle2 className="w-10 h-10 text-gray-300" />
        <div className="flex-1">
          <div className="h-16 w-full bg-gray-300 rounded-lg"></div>
        </div>
        <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
};

export default AddCommentSkeleton;
