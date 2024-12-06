import React from 'react';
import CustomPopover from '@ui/atoms/CustomPopover';
import StarRating from '@ui/atoms/StarRating';
import CustomReviewContent from '@ui/molecules/ProductDetailsPopoverContent';
import './StarRatingPopover.styles.scss';

interface StarRatingPopoverProps {
  rating: number;
  reviews: { stars: number; count: number }[];
}

const StarRatingPopover: React.FC<StarRatingPopoverProps> = ({ reviews }) => {
  return (
    <div className='product-detailspage'>
      <CustomPopover
        trigger={
          <button className="flex">
            <StarRating rating={4} />
            <span className="rating p-[0.15em] text-base !text-appTheme leading-5 font-HeroNewRegular  font-hero font-thin">
              <span className=' text-appTheme'>{4} (150)</span>
            </span>
          </button>
        }
        content={
          <div className="popover-content ">
            <CustomReviewContent reviews={reviews} />
          </div>
        }
        positions={['bottom']}
        align="center"
      />
    </div>
  );
};

export default StarRatingPopover;
