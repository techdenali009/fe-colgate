// src/ui/organisms/ProductDetailsContentSkeleton.tsx

import React from 'react';
import './ProductDetailsContentSkeleton.styles.scss';

const ProductDetailsContentSkeleton: React.FC = () => {
  return (
    <div className='productdetailspage-skeleton-container flex flex-col lg:flex-row w-full lg:w-full bg-gray-200'>
      <div className='productdetailspage-media py-3 px-[35px] w-1/2'>
        <div className='skeleton skeleton-carousel'></div>
        <div className='badges flex mb-6 mt-6'>
          <div className='badge pr-[25px] '>
            <div className='skeleton skeleton-thumbnails'></div>
          </div>
          <div className='badge pr-[25px]'>
            <div className='skeleton skeleton-thumbnails'></div>
          </div>
          <div className='badge pr-[25px]'>
            <div className='skeleton skeleton-thumbnails'></div>
          </div>
          <div className='badge '>
            <div className='skeleton skeleton-thumbnails'></div>
          </div>
        </div>
      </div>
      <div className='productdetailspage-info py-2.5 pl-[5rem] pr-[3rem] lg:w-full'>
        <div className='desktop-container'>
          <div className='skeleton skeleton-heading-desktop mb-4'></div>
        </div>
        <div className='badges flex mb-6 mt-6'>
          <div className='badge pr-[25px] '>
            <div className='skeleton skeleton-badges'></div>
          </div>
          <div className='badge pr-[25px]'>
            <div className='skeleton skeleton-badges'></div>
          </div>
          <div className='badge pr-[25px]'>
            <div className='skeleton skeleton-badges'></div>
          </div>
          <div className='badge '>
            <div className='skeleton skeleton-badges'></div>
          </div>
        </div>
        <div className='table  border border-gray-400 bg-gray-200'>
          <div className='skeleton-table-left w-1/2  '>
          <div className='skeleton skeleton-table-content1 w-[49%] h-[50px] relative top-[21px] left-[21px]'></div>
          <div className='skeleton skeleton-table-content2  w-[100%] h-[15px] relative top-[29px] left-[21px] '></div>
          <div className='skeleton skeleton-table-content3 w-[80%] h-[15px] relative top-[35px] left-[21px]'></div>
          <div className='skeleton skeleton-table-content4 w-[95%] h-[15px] relative top-[41px] left-[21px]'></div>
          </div>
          <div className=' skeleton-table-right w-1/2'>
          <div className='skeleton skeleton-table-content5  w-[49%] h-[50px] relative left-[99px] top-[18px]'></div>
          </div>
        </div>
        <div className='table bg-gray-200 border border-gray-400 '>
          <div className='skeleton-table-left w-1/2  '>
          <div className='skeleton skeleton-table-content1 w-[49%] h-[50px] relative top-[21px] left-[21px]'></div>
          <div className='skeleton skeleton-table-content2  w-[100%] h-[15px] relative top-[29px] left-[21px] '></div>
          <div className='skeleton skeleton-table-content3 w-[80%] h-[15px] relative top-[35px] left-[21px]'></div>
          <div className='skeleton skeleton-table-content4 w-[95%] h-[15px] relative top-[41px] left-[21px]'></div>
          </div>
          <div className=' skeleton-table-right w-1/2'>
          <div className='skeleton skeleton-table-content5  w-[49%] h-[50px] relative left-[99px] top-[18px]'></div>
          </div>
        </div>
        <div className='skeleton skeleton-description mb-4'></div>
      </div>
    </div>
  );
};

export default ProductDetailsContentSkeleton;
