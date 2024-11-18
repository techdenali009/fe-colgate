import React from 'react';
import { ProductType } from '@utils/Product';
import { RxStarFilled } from 'react-icons/rx';
import ProductDetailsPopoverbutton from '@ui/atoms/ProductDetailsPopoverbutton';

interface CustomReviewContentProps {
  reviews?: ProductType['reviews'];
}

const CustomReviewContent: React.FC<CustomReviewContentProps> = ({ reviews }) => {
  const safeReviews = reviews ?? [];
  const totalReviews = safeReviews.reduce((total, review) => total + review.count, 0);

  return (
    <div className="w-[220px] mt-[30px] ml-[10px] mr-[10px] mb-[30px]">
      {safeReviews.map((review) => (
        <div
          className="flex items-center bg-rgb(247, 247, 247) hover:bg-gray-200 hover:cursor-pointer"
          key={review.stars}
        >
          <span className="w-2 text-black font-SansSerif">{review.stars}</span>
          <RxStarFilled className="text-appTheme w-[25px] h-[25px]" />
          <div className="w-[0px] flex-grow h-[9px] bg-[#eff2f4] rounded-[3px] mx-2 relative">
            <div
              className="h-full bg-appTheme rounded-[3px]"
              style={{ width: `${(review.count / totalReviews) * 100}%` }}
            />
          </div>
          <div className="text-black-600 font-SansSerif">{review.count}</div>
        </div>
      ))}
      <ProductDetailsPopoverbutton />
    </div>
  );
};

export default CustomReviewContent;
