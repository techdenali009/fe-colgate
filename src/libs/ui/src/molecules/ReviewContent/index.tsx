import React from 'react';
import { Button } from '@ui/atoms/Button';
import Paragraph from '@ui/atoms/Paragraph/paragraph';
import StarRating from '@ui/atoms/StarRating';
import LikeAndReport from '../LikeAndReport';

interface ReviewContentProps {
  rating: number;
  reviewTitle: string;
  content: string;
  reviewerName: string;
  timeAgo: string;
}

const ReviewContent: React.FC<ReviewContentProps> = ({ rating, reviewTitle, content, reviewerName, timeAgo }) => (
  <div className='w-[357px] lg:!w-[663px] inline-block p-[10px]'>
    <StarRating rating={rating} />
    <h3 className='text-[rgb(112,115,114)]'>{reviewTitle}</h3>
    <div className='lg:mt-[5px] lg:flex'>
      <Button className='block lg:hidden text-black font-HeroNewBold bg-transparent'>
        <h3>{reviewerName}</h3>
      </Button>
      <span className='text-[14px] font-HeroNewLight py-[1px]'>{timeAgo}</span>
    </div>
    <Paragraph>{content}</Paragraph>
    <LikeAndReport className='hidden lg:block' />
  </div>
);

export default ReviewContent;
