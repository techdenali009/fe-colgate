import React from 'react';
import { Button } from '@ui/atoms/Button';
import Paragraph from '@ui/atoms/Paragraph/paragraph';
import StarRating from '@ui/atoms/StarRating';
import LikeAndReport from '../LikeAndReport';
import OriginallyPostReview from '@ui/atoms/OriginallyPostReview';
import ResponseCard from '../ResponsePCASkin';
import { formatTimeAgo } from '@utils/test';

interface ReviewContentProps {
  reviewId: number;
  rating: number;
  reviewTitle: string;
  content: string;
  reviewerName: string;
  timeAgo: string;
  like: number;
  dislike: number;
  consumerAffairsText: string;
  pcaTimeAgo?: string;
  PCA_Responses?: { date: string; response: string }; // Make this optional
}

const ReviewContent: React.FC<ReviewContentProps> = ({
  reviewId,
  rating,
  reviewTitle,
  content,
  reviewerName,
  timeAgo,
  like,
  dislike,
  PCA_Responses,
}) => {
  const handleReport = () => {
    console.log(`Reported review: ID ${reviewId}, Name: ${reviewerName}`);
  };

  return (
    <div className="w-[357px] lg:!w-[663px] inline-block p-[10px] font-SansSerif">
      <StarRating rating={rating} className="!w-[17px]" />
      <h3 className="text-[rgb(112,115,114)]">{reviewTitle}</h3>
      <div className="lg:mt-[5px] lg:flex">
        <Button className="block lg:hidden text-black font-HeroNewBold bg-transparent">
          <h3>{reviewerName}</h3>
        </Button>
        <span className="text-[14px] font-HeroNewLight py-[1px]">{timeAgo}</span>
      </div>
      <Paragraph>{content}</Paragraph>
      <OriginallyPostReview />
      <LikeAndReport className="hidden lg:block" initialLikeCount={like} initialDislikeCount={dislike} reviewId={reviewId} onReport={handleReport} />
      {PCA_Responses && (
        <ResponseCard
          title="Response from PCA SKIN"
          reviewId={reviewId}
          pcaTimeAgo={formatTimeAgo(PCA_Responses.date)}
          iconSrc="responsePCASkin"
          consumerAffairsText={PCA_Responses.response}
        />
      )}
    </div>
  );
};

export default ReviewContent;
