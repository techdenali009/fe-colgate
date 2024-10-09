import React from 'react';

interface AverageCustomerRatingsProps {
  className?: string; // Optional prop for additional class names
}

const AverageCustomerRatings: React.FC<AverageCustomerRatingsProps> = ({ className }) => {
  return (
    <div className={`!text-left  lg:my-5 lg:text-center ${className}`}>
      <h3 className='text-left p-2.5  font-[16px] lg:text-center'>Average Customer Ratings</h3>
      <div className='!text-left   lg:flex  flex-wrap mx-[10px] mb-[20px] mt-[10px] border-b border-[#EAEAEA] lg:justify-center !lg:items-center'>
        <div> <p className=' '>asdsa</p></div>
        <div> <p className=' '>asdsa</p></div>
        <div> <p className=''>asdsa</p></div>
      </div>
    </div>
  );
};

export default AverageCustomerRatings;
