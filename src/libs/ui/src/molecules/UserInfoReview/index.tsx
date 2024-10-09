import React from 'react';
import { Button } from '@ui/atoms/Button';

interface UserInfoProps {
  name: string;
  location: string;
  ageGroup: string;
  reviewCount: number;
  votesCount: number;
}

const UserInfoReview: React.FC<UserInfoProps> = ({ name, location, ageGroup, reviewCount, votesCount }) => (
  <div className='inline-block max-w-[22%] min-w-[22%] pt-2.5 mt-0'>
    <div className='mb-[10px] '>
      <Button className='hidden lg:block text-black font-HeroNewBold bg-transparent'>
        <h3>{name}</h3>
      </Button>
    </div>
    <div className='hidden lg:block'>
      <div className='mt-[5px] mb-[10px] mr-[5px]'>
        <span>{location}</span>
      </div>
      <div className='mt-[5px] mb-[10px] block'>
        <div>
          <span className='text-[16px] mr-[5px]'>Review</span>
          <span className='mr-[5px] font-bold'>{reviewCount}</span>
        </div>
        <div>
          <span className='text-[16px] mr-[5px]'>Votes</span>
          <span className='mr-[5px] font-bold'>{votesCount}</span>
        </div>
      </div>
      <div className='my-[5px] mr-[10px]'>
        <span className='text-[16px] mr-[5px]'>Age</span>
        <span className='mr-[5px] font-bold'>{ageGroup}</span>
      </div>
    </div>
  </div>
);

export default UserInfoReview;
