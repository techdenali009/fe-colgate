import React, { useState } from 'react';
import { showSuccessToast } from '@utils/toastUtils'; // Importing the utility function
import 'react-toastify/dist/ReactToastify.css';
import './ProductDetailsPageFavoriteButton.styles.scss';
import { ToastContainer } from 'react-toastify';
import FavouriteIcon from '../SvgAtoms/FavouriteIcon';
import FavouriteIconFilled from '../SvgAtoms/FavouriteIconFilled';

const FavoriteButton: React.FC = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    setIsFavorite((prev) => !prev);

    // Show success toast using utility function
    showSuccessToast(
      isFavorite ? 'Removed from Favourites!' : 'Added to Favourites!',
      'top-right'
    );
  };

  return (
    <div className="Product-detailspage favorite-button-container">
      <button
        type="button"
        className=" group flex gap-2 items-center justify-center px-2 py-2 fav-icon font-bold text-primary-400 text-sm favorite-cta favorite_favorite-button__XiNVR default-favorite-button relative bottom-3 ml-[53px]"
        aria-label="Add to Favorite"
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)} 
      >
        <div className="relative">
          {isFavorite || isHovered ? (
            <FavouriteIconFilled /> // Show filled icon on hover or if marked as favorite
          ) : (
            <FavouriteIcon /> // Show outline icon
          )}
        </div>
        <div className="cta-label add-favorite-label text-[11px] text-appTheme hidden lg:block group-hover:text-white group-hover:bg-black group-hover:underline">
          Add to Favourite
        </div>
      </button>
      <ToastContainer />
    </div>
  );
};

export default FavoriteButton;
