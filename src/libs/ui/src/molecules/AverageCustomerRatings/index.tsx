import React from 'react';
import ReviewRatings from '../QuantityValueScent';

interface AverageCustomerRatingsProps {
  className?: string; // Optional prop for additional class names
  ReviewRatingclassName?:string;
  headClassName?:string;
}

const AverageCustomerRatings: React.FC<AverageCustomerRatingsProps> = ({ className, ReviewRatingclassName,headClassName }) => {
  return (
    <div className={`!text-left  lg:my-5 mb-5 lg:text-center   ${className}`}>
      <h3 className={`text-left p-2.5  font-[16px] text-base  lg:text-center font-SansSerif ${headClassName}`}>Average Customer Ratings</h3>
      <div className='!text-left   lg:flex  flex- mx-[10px]  mt-[10px]  border-[#EAEAEA] lg:justify-center !lg:items-center'>
        <div>
          <ReviewRatings className={`  lg:flex  lg:flex-row text-black font-SansSerif  ${ ReviewRatingclassName}`}  ratings={{
            quality: {
              score: 5,
              label: 'Quality'
            },
            value: {
              score: 5,
              label: 'Value'
            },
            scent: {
              score: 5,
              label: 'Scent'
            }
          }}  barClassName='w-[62px] lg:w-[30px] md:w-[84px] '>
          </ReviewRatings>
        </div>
      </div>
    </div>
  );
};

export default AverageCustomerRatings;
