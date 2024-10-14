import React from 'react';

// Define a single interface for review ratings
interface ReviewRatingsProps {
  ratings: {
    quality: { score: number; label: string };
    value: { score: number; label: string };
    scent: { score: number; label: string };
  };
}

const ReviewRatings: React.FC<ReviewRatingsProps> = ({ ratings }) => {
  return (
    <div>
      {Object.entries(ratings).map(([key, { score, label }]) => {
        // Determine full and fractional parts of the score
        const fullSegments = Math.floor(score); // Full segments (0-5)
        const hasPartialSegment = score % 1 > 0; // Check if there's a partial segment
        const partialFill = Math.round((score % 1) * 100); // Percentage of the partial fill (0-100)

        return (
          <div className="flex items-center my-2" key={key}>
            <span className="w-20 text-base text-left">{label}</span>
            <div className="flex gap-1 ml-4">
              {/* Create full segments */}
              {Array.from({ length: 5 }, (_, index) => {
                if (index < fullSegments) {
                  return (
                    <div key={index} className="h-2 w-8 bg-blue-600"></div>
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
            <span className="ml-4 font-bold text-base">{score.toFixed(1)}</span>
          </div>
        );
      })}
    </div>
  );
};

export default ReviewRatings;
