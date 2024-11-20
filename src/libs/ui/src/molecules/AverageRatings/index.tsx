import React from 'react';
import ReviewRatings from '../QuantityValueScent'; 


interface AverageRatingsProps {
  ratings?: { 
    quality: number;
    value: number;
    scent: number;
  };
  className?: string; // Optional class name for styling
  ReviewRatingclassName?: string; // Optional class for the ReviewRatings component
}

const AverageRatings: React.FC<AverageRatingsProps> = ({
  ratings = { quality: 0, value: 0, scent: 0 }, // Default values in case ratings are not provided
  className = '',
}) => {
  return (
    <div className={`!text-left lg:my-5 mb-5 lg:text-center ${className}`}>
      <div className='!text-left lg:flex flex- mx-[10px] mt-[10px] border-[#EAEAEA] lg:justify-center !lg:items-center'>
        <div>
          <ReviewRatings
            className={'lg:flex lg:flex-row text-black font-SansSerif '}
            ratings={{
              quality: { score: ratings.quality, label: 'Quality' },
              value: { score: ratings.value, label: 'Value' },
              scent: { score: ratings.scent, label: 'Scent' }
            }}
          
            barClassName='w-[62px] lg:!w-[30px] md:w-[84px]'
            partialClassName='w-[62px] lg:w-[30px] md:w-[84px]'
            EmptyClassName='w-[62px] lg:w-[30px] md:w-[84px]'
            halfpartialClassName='w-[62px] lg:w-[30px] md:w-[84px]'
          />
        </div>
      </div>
    </div>
  );
};

export default AverageRatings;
