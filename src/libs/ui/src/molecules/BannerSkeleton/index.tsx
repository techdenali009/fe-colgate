import React from 'react';

const BannerSkeleton: React.FC = () => {
  return (
    <div className="bg-gray-200 p-4 shadow-md w-full h-96 md:!flex md:!flex-row items-center 2xs:flex 2xs:flex-col "> {/* Flex and centering */}
      <div className="bg-gray-300 animate-pulse md:!w-1/2 h-full rounded-md 2xs:w-full" /> {/* Left half for the image */}
      <div className="flex flex-col space-y-4 p-8 md:!w-1/2 2xs:w-full"> {/* Adjust padding to match the text area */}
        <div className="bg-gray-300 animate-pulse w-3/4 h-12 rounded" /> {/* Title placeholder */}
        <div className="bg-gray-300 animate-pulse w-full h-8 rounded" /> {/* Subtitle placeholder */}
        <div className="bg-gray-300 animate-pulse w-5/6 h-6 rounded" /> {/* Additional info placeholder */}
        <div className="bg-gray-300 animate-pulse w-1/3 h-10 mt-4 rounded-lg" /> {/* Button placeholder */}
      </div>
    </div>
  );
};

export default BannerSkeleton;
