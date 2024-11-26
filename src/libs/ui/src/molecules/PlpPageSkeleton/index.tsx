import React from 'react';

const PlpFilterSkeleton: React.FC = () => (
  <div className="animate-pulse">
    <div className="h-12 w-[324px] bg-gray-200 rounded mb-4" />
    <div className="space-y-3">
      {[1, 2, 3].map((i) => (
        <div key={i} className="h-12 w-[324px] bg-gray-200 rounded mb-4" />
      ))}
    </div>
  </div>
);

const PlpHeaderSkeleton: React.FC = () => (
  <div className="animate-pulse mb-8">
    
    <div className="flex justify-between items-center">
      <div className="h-8 w-24 bg-gray-200 rounded-[16.25rem]" />
      <div className="h-10 w-44 bg-gray-200 rounded-[16.25rem]" />
    </div>
  </div>
);

export const PlpProductCardSkeleton: React.FC = () => (
  <div className="animate-pulse bg-[#e4e6eb] px-[25px] py-[14px]">
    <div className="h-64 bg-[#d0d5db] rounded-lg mb-4" />
    <div className="space-y-3">
      <div className="h-4 w-full bg-[#d0d5db] rounded" />
      <div className="h-4 w-1/2 bg-[#d0d5db] rounded" />
      <div className="h-4 w-1/4 bg-[#d0d5db] rounded" />
    </div>
  </div>
);


const PlpPageSkeleton: React.FC = () => (
  <div className="relative pr-2 pl-2">
    <div className="!mt-10 mx-[30px] py-0 lg:px-6 px-14 tm:px-6 xl:px-14 tm:mx-1">
      {/* <div className="h-8 w-72 bg-gray-200 rounded animate-pulse" /> */}
    </div>

    <div className="tm:block flex gap-[23px] py-0 xl:px-14 mt-5 mb-32 tm:pl-6 tm:pr-6 tl:px-5">
      <div className="relative tm:px-0 pl-[18px] pr-[18px] mt-20">
        <PlpFilterSkeleton />
      </div>

      <div className="w-full">bg-[#e4e6eb]  
        <PlpHeaderSkeleton />

        <div className="tm:py-[49px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[23px]">
          {Array.from({ length: 9 }).map((_, index) => (
            <PlpProductCardSkeleton key={index} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default PlpPageSkeleton;