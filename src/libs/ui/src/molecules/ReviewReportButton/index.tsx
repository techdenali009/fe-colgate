import { Button } from '@ui/atoms/Button';
import React from 'react';
import { useReviewContext } from '../ReviewUseContext';

type ReportButtonProps = {
  reviewId: number;
  className?: string;
  label?: string;
};

const ReviewReportButton: React.FC<ReportButtonProps> = ({
  reviewId,
  className = '',
  label = 'Report',
}) => {
  const { productReviews, reportReview } = useReviewContext();
  const isReported = productReviews.find((review) => review.id === reviewId)?.report;

  const handleReportClick = () => {
    console.log(`Reported review ID: ${reviewId}`);
    reportReview(reviewId);
  };

  return (
    <div className={`flex items-center ${className}`}>
      <Button
        className="ml-10 text-appTheme px-[5px] text-[16px] font-SansSerif"
        onClick={handleReportClick}
      >
        {isReported ? 'Reported' : label}
      </Button>
    </div>
  );
};

export default ReviewReportButton;
