// FavoriteButton.tsx
import React, { useState } from 'react';
import { showSuccessToast } from '@utils/toastUtils'; // Importing the utility function
import 'react-toastify/dist/ReactToastify.css';
import './ProductDetailsPageFavoriteButton.styles.scss';
import { ToastContainer } from 'react-toastify';

const FavoriteButton: React.FC = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => {
    setIsFavorite((prev) => !prev);

    // Show success toast using utility function
    showSuccessToast(
      isFavorite ? 'Removed from Favourites!' : 'Added to Favourites!',
      'top-right'
    );
  };

  return (
    <div className='Product-detailspage favorite-button-container'>
      <button
        type='button'
        className='flex gap-2 items-center justify-center px-2 py-2 fav-icon font-bold text-primary-400 text-sm favorite-cta favorite_favorite-button__XiNVR default-favorite-button relative bottom-3 ml-[53px]'
        aria-label='Add to Favorite'
        onClick={handleClick}
      >
        <div 
          className={`favorite-icon ${isFavorite ? 'favorite-icon-filled' : 'favorite-icon-outline'}`}
        />
        <div className='cta-label add-favorite-label text-[11px] text-appTheme hidden lg:block'>
          Add to Favourite
        </div>
      </button>
      <ToastContainer />
    </div>
  );
};

export default FavoriteButton;
