import { Button } from '@ui/atoms/Button';
import React, { useState } from 'react';
import ReviewReportButton from '../ReviewReportButton';

interface LikeAndReportProps {
  reviewId: number;
  className?: string;
  initialLikeCount?: number;
  initialDislikeCount?: number;
  onReport: () => void; // Add onReport callback
}

const LikeAndReport: React.FC<LikeAndReportProps> = ({ className, initialLikeCount = 0, initialDislikeCount = 0,reviewId,}) => {

  const [likeCount, setLikeCount] = useState(initialLikeCount);
  const [dislikeCount, setDislikeCount] = useState(initialDislikeCount);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
      if (isDisliked) {
        setDislikeCount(dislikeCount - 1);
        setIsDisliked(false);
      }
    }
    setIsLiked(!isLiked);
  };

  const handleDislike = () => {
    if (isDisliked) {
      setDislikeCount(dislikeCount - 1);
    } else {
      setDislikeCount(dislikeCount + 1);
      if (isLiked) {
        setLikeCount(likeCount - 1);
        setIsLiked(false);
      }
    }
    setIsDisliked(!isDisliked);
  };

 
  return (
    <div className={`my-[10px] flex ${className}`}>
      <div className='py-[3px] mr-[10px] text-[14px]'>Helpful?</div>
      <div className='mr-[5px] flex space-x-2'>
        <Button className='flex items-center' onClick={handleLike} aria-label={isLiked ? 'Unlike' : 'Like'}>
          {isLiked ? (
            <svg
              aria-hidden="true"
              width="16"
              height="16"
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.6 6.6V3.4A2.4 2.4 0 008.2 1L5 8.2V17h9.024a1.6 1.6 0 001.6-1.36l1.104-7.2a1.6 1.6 0 00-1.6-1.84H10.6zM5 17H2.6A1.6 1.6 0 011 15.4V9.8a1.6 1.6 0 011.6-1.6H5V17z"
                fill="rgb(18, 60, 224)"
              />
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              width="16"
              height="16"
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.6 6.6V3.4A2.4 2.4 0 008.2 1L5 8.2V17h9.024a1.6 1.6 0 001.6-1.36l1.104-7.2a1.6 1.6 0 00-1.6-1.84H10.6zM5 17H2.6A1.6 1.6 0 011 15.4V9.8a1.6 1.6 0 011.6-1.6H5V17z"
                stroke="#111"
                fill="none"
              />
            </svg>
          )}
          <span className='mx-[10px]'>({likeCount})</span>
        </Button>

        <Button className='flex items-center' onClick={handleDislike} aria-label={isDisliked ? 'Remove Dislike' : 'Dislike'}>
          {isDisliked ? (
            <svg
              aria-hidden="true"
              width="16"
              height="16"
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.146 11.4v3.2a2.4 2.4 0 002.4 2.4l3.2-7.2V1H3.722a1.6 1.6 0 00-1.6 1.36l-1.104 7.2a1.6 1.6 0 001.6 1.84h4.528zm5.6-10.4h2.136a1.848 1.848 0 011.864 1.6v5.6a1.848 1.848 0 01-1.864 1.6h-2.136V1z"
                fill="rgb(18, 60, 224)"
              />
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              width="16"
              height="16"
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.146 11.4v3.2a2.4 2.4 0 002.4 2.4l3.2-7.2V1H3.722a1.6 1.6 0 00-1.6 1.36l-1.104 7.2a1.6 1.6 0 001.6 1.84h4.528zm5.6-10.4h2.136a1.848 1.848 0 011.864 1.6v5.6a1.848 1.848 0 01-1.864 1.6h-2.136V1z"
                stroke="#111"
                fill="none"
              />
            </svg>
          )}
          <span className='mx-[10px]'>({dislikeCount})</span>
        </Button>
        <ReviewReportButton reviewId={reviewId} 
        >
        </ReviewReportButton>
      </div>
    </div>
  );
};

export default LikeAndReport;
