import React, { useState } from 'react';
import { PrimaryButton } from '../PrimaryButton';

interface ScrollBarReviewProps {
  className?: string;
  totalReviews: number; // Total number of reviews
  reviewsPerPage?: number; // Number of reviews to show per page (default is 9)
  showArrows?: boolean; // Control the visibility of arrows
}

const ScrollBarReview: React.FC<ScrollBarReviewProps> = ({
  className = '',
  totalReviews,
  reviewsPerPage = 8, // Default to showing 9 reviews per page
  showArrows = true, // Default to showing arrows
}) => {
  const [currentPage, setCurrentPage] = useState(0);

  // Calculate the start and end of the visible range
  const startReview = currentPage * reviewsPerPage + 1;
  const endReview = Math.min(startReview + reviewsPerPage - 1, totalReviews);
  const visibleRange = `${startReview} – ${endReview}`;

  // Handle scrolling between pages
  const handleScroll = (direction: 'left' | 'right') => {
    if (direction === 'left' && currentPage > 0) {
      setCurrentPage(currentPage - 1);
    } else if (direction === 'right' && endReview < totalReviews) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className={`relative flex flex-nowrap mb-1 text-base font-sans text-black leading-[19.5px] mr-2.5 pr-0 ml-2.5 pl-0 ${className} `}>
      <div className={`relative float-left py-2 mr-auto self-center outline-none font-SansSerif ${className} `}>
        {visibleRange} of {totalReviews} Reviews
      </div>
      {showArrows && (
        <ul className="float-right m-0 flex box-border">
          <li>
            <PrimaryButton
              className="w-10 h-10 relative overflow-hidden !p-0 !bg-white box-border h-14 w-12 border border-gray-400 rounded-md bg-white pt-1.5"
              onClick={() => handleScroll('left')}
              disabled={currentPage === 0} // Disable left button if on the first page
              
            >
            
              <div className='items-center text-gray-400 m-2 w-5'>
                <svg width="20" height="20" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><title></title><defs><filter id="pagination_left"><feColorMatrix in="SourceGraphic" values="0 0 0 0 0.239216 0 0 0 0 0.462745 0 0 0 0 0.749020 0 0 0 1.000000 0"></feColorMatrix></filter></defs><g fill="none" fillRule="evenodd"><path d="M0 0h30v30H0z"></path><g filter="&quot;url(https://www.pcaskinpro.com/products/dual-action-redness-relief-prof/p?variant=Dual%20Action%20Redness%20Relief#pagination_left)&quot;"><path fill="none" d="M29 1v28H1V1z"></path><path stroke="#595959" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M19.5 2.5l-11 12 11 12"></path></g></g></svg>
              </div>
            </PrimaryButton>
          </li>
          <li>
            <PrimaryButton
              className="w-10 h-10 relative overflow-hidden !p-0 !bg-white box-border h-14 w-12 border border-gray-400 rounded-md bg-white pt-1.5"
              onClick={() => handleScroll('right')}
              disabled={endReview >= totalReviews} // Disable right button if on the last page
            >
            
              <div className='items-center text-gray-400 m-2 w-5'>
                <svg width="20" height="20" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><title></title><defs><filter id="pagination_right"><feColorMatrix in="SourceGraphic" values="0 0 0 0 0.239216 0 0 0 0 0.462745 0 0 0 0 0.749020 0 0 0 1.000000 0"></feColorMatrix></filter></defs><g fill="none" fillRule="evenodd"><path d="M0 0h30v30H0z"></path><g filter="&quot;url(https://www.pcaskinpro.com/products/dual-action-redness-relief-prof/p?variant=Dual%20Action%20Redness%20Relief#pagination_right)&quot;"><path fill="none" d="M29 1v28H1V1z"></path><path stroke="#919191" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M10.5 2.5l11 12-11 12"></path></g></g></svg>
              </div>
            </PrimaryButton>
          </li>
        </ul>
      )}
    </div>
  );
};

export default ScrollBarReview;
