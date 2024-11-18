import React, { useState } from 'react';
import { Button } from '@ui/atoms/Button';
import ReviewReportButton from '../ReviewReportButton';
import ReviewLike from '@ui/atoms/SvgAtoms/ReviewDisLike';
import ReviewDisLike from '@ui/atoms/SvgAtoms/ReviewLike';

interface LikeAndReportProps {
  reviewId: number;
  className?: string;
  initialLikeCount?: number;
  initialDislikeCount?: number;
  onReport: () => void;
}

const LikeAndReport: React.FC<LikeAndReportProps> = ({
  className,
  initialLikeCount = 0,
  initialDislikeCount = 0,
  reviewId,
}) => {
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
    <div className={` ${className}`}>
      <div className={`py-[3px] mr-[10px] text-[14px] ${className}`}>Helpful?</div>
      <div className='mr-[5px] flex space-x-2'>
        <Button
          className='flex items-center'
          onClick={handleLike}
          aria-label={isLiked ? 'Unlike' : 'Like'}
        >

          {isLiked ? <ReviewDisLike></ReviewDisLike> : <ReviewDisLike fillColor='#ffffff' stroke="#000"></ReviewDisLike>}
          <span className='mx-[10px]'>({likeCount})</span>
        </Button>

        <Button
          className='flex items-center'
          onClick={handleDislike}
          aria-label={isDisliked ? 'Remove Dislike' : 'Dislike'}
        >
          {isDisliked ? <ReviewLike></ReviewLike> : <ReviewLike fillColor='#ffffff' stroke="#000"></ReviewLike>}
          <span className='mx-[10px]'>({dislikeCount})</span>
        </Button>

        <ReviewReportButton reviewId={reviewId} />
      </div>
    </div>
  );
};

export default LikeAndReport;
