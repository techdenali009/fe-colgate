// Molecule.tsx
import React from 'react';
import ReviewBar from '../ReviewBar';

interface ReviewMoleculeProps {
  className?: string; // Optional prop for additional class names
}

const reviews = [
  { stars: 5, count: 11 },
  { stars: 4, count: 1 },
  { stars: 3, count: 1 },
  { stars: 2, count: 2 },
  { stars: 1, count: 4 },
];

const SnapShotRating: React.FC <ReviewMoleculeProps>= ({className}) => {
  return (
    <div className={`${className}`}>
      <h3 className='p-2.5  text-base  font-HeroNewLight'>Rating Snapshot</h3>
      <h3 className='pb-[15px] pt-[5px]  text-base   font-HeroNewLight ml-[9px] '>Select a row below to filter reviews.</h3>
      <div className=''>
        <ReviewBar  reviews={reviews} className='!w-[357px]' />
      </div>
    </div>


  );
};

export default SnapShotRating;
