import React from 'react';

interface RatingBarProps {
  label: string;
  score: number; // Score out of 5
}

interface ReviewRatingsProps {
  ratings: {
    quality: number;
    value: number;
    scent: number;
  };
}

const RatingBar: React.FC<RatingBarProps> = ({ label, score }) => {
  const barSegments = Array.from({ length: 5 }, (_, index) => (
    <div
      key={index}
      className={`h-2 w-8 ${index < score ? 'bg-blue-600' : 'bg-gray-300'}`}
    ></div>
  ));

  return (
    <div className="flex items-center my-2">
      <span className="w-20 text-base text-left">{label}</span>
      <div className="flex gap-1 ml-4">{barSegments}</div>
      <span className="ml-4 font-bold text-base">{score.toFixed(1)}</span>
    </div>
  );
};

const ReviewRatings: React.FC<ReviewRatingsProps> = ({ ratings }) => {
  return (
    <div>
      <RatingBar label="Quality" score={ratings.quality} />
      <RatingBar label="Value" score={ratings.value} />
      <RatingBar label="Scent" score={ratings.scent} />
    </div>
  );
};

export default ReviewRatings;
