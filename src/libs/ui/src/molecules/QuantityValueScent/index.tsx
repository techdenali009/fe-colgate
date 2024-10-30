import React from 'react';

// Define a single interface for review ratings
interface ReviewRatingsProps {
  ratings: {
    quality: { score: number; label: string };
    value: { score: number; label: string };
    scent: { score: number; label: string };

  };
  className?: string;
  barClassName?:string;
}

const ReviewRatings: React.FC<ReviewRatingsProps> = ({ ratings, className , barClassName}) => {
  return (
    <div className={className}>
      {Object.entries(ratings).map(([key, { score, label }]) => {
        // Determine full and fractional parts of the score
        const fullSegments = Math.floor(score); // Full segments (0-5)
        const hasPartialSegment = score % 1 > 0; // Check if there's a partial segment
        const partialFill = Math.round((score % 1) * 100); // Percentage of the partial fill (0-100)

        return (
          <div className=" items-center block font-SansSerif" key={key}>
            <span className="w-20  px-[5px] text-base text-left">{label}</span>
            <div className='flex mr-4'>
              <div className="flex gap-px mx-[5px] my-2.5 ">
                {/* Create full segments */}
                {Array.from({ length: 5 }, (_, index) => {
                  if (index < fullSegments) {
                    return (
 
                      <div key={index} className={`h-[16px] w-[30px] bg-appTheme ${barClassName}`}></div>
                    ); // Full segment
                  } else if (index === fullSegments && hasPartialSegment) {
                    return (
                      <div key={index} className="h-2 w-8 bg-gray-300 relative">
                        <div
                          className="h-2 bg-blue-600 absolute"
                          style={{ width: `${partialFill}%` }} // Fill the last segment proportionally
                        />
                      </div>
                    ); // Partial segment
                  } else {
                    return (
                      <div key={index} className="h-2 w-8 bg-gray-300"></div>
                    ); // Empty segment
                  }
                })}
              </div>
              <span className="p-[5px] pt-[6px] font-SansSerif text-base">{score.toFixed(1)}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ReviewRatings;
