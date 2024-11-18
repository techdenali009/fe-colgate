
import AverageRatings from '../AverageRatings';
import { Reviewproducts } from '@utils/test'; // Reviewproducts is imported from the test module


interface AverageCustomerRatingsProps {
    className?: string; // Optional prop for additional class names
    ReviewRatingclassName?:string;
    headClassName?:string;
    
  }
  
// Function to calculate the average ratings
// eslint-disable-next-line  @typescript-eslint/no-explicit-any
const calculateAverageRatings = (Reviewproducts: any) => {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const total = Reviewproducts.reduce(
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    (acc: any, review: any) => {
      // Check for null or empty values before adding to the total
      if (review.ratings.quality?.score) acc.quality += review.ratings.quality.score;
      if (review.ratings.value?.score) acc.value += review.ratings.value.score;
      if (review.ratings.scent?.score) acc.scent += review.ratings.scent.score;
      return acc;
    },
    { quality: 0, value: 0, scent: 0 }
  );

  const count = Reviewproducts.length;

  // Return the average values for each rating
  return {
    quality: count > 0 ? total.quality / count : 0,
    value: count > 0 ? total.value / count : 0,
    scent: count > 0 ? total.scent / count : 0,
  };
};

const AverageCustomerRatings: React.FC<AverageCustomerRatingsProps> = ({ className, headClassName }) => {

  const averageRatings = calculateAverageRatings(Reviewproducts);

  return (
    
    <div className={`!text-left  lg:my-5 mb-5 lg:text-center   ${className}`}>
      <h3 className={`text-left p-2.5  font-[16px] text-base  lg:text-center font-SansSerif ${headClassName}`}>Average Customer Ratings</h3>
      <div className='!text-left   lg:flex  flex- mx-[10px]  mt-[10px]  border-[#EAEAEA] lg:justify-center !lg:items-center'>
        {/* Pass the average ratings to the AverageCustomerRatings component */}
        <AverageRatings
          ratings={averageRatings}  // The calculated average ratings
          className=""  // Custom class for styling the component
          ReviewRatingclassName=""  // Custom class for the review rating section
        />
      </div>
    </div>
  );
};

export default AverageCustomerRatings;
