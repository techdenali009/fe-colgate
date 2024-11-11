// FavoriteButton.tsx
import React, { useState } from 'react';
import { toast, ToastContainer, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ProductDetailsPageFavoriteButton.styles.scss';


const FavoriteButton: React.FC = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => {
    setIsFavorite((prev) => !prev);

    // Define toast options
    const toastOptions: ToastOptions = {
      position: "top-right",
      autoClose: 2000, // 2 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      
    };

    // Display toast with custom content
    toast.success(
      <div className='flex items-center'>
        <div className='favorite-icon-outline favorite-icon-filled'></div>
        <span className='ml-2'>
          {isFavorite ? 'Removed from Favourites!' : 'Added to Favourites!'}
        </span>
      </div>,
      toastOptions
    );
  };

  return (
    <div className='favorite-button-container'>
      <button
        type='button'
        className='flex gap-2 items-center justify-center px-2 py-2 fav-icon font-bold text-primary-400 text-sm favorite-cta favorite_favorite-button__XiNVR default-favorite-button relative bottom-3 ml-[53px]'
        aria-label='Add to Favorite'
        onClick={handleClick}
      >
        <div 
          className={`favorite-icon ${isFavorite ? 'favorite-icon-filled' : 'favorite-icon-outline'}`}
        ></div>
        <div className='cta-label add-favorite-label text-[11px] text-[var(--primary-color)] hidden lg:block'>
          Add to Favourite
        </div>
      </button>
      <ToastContainer />
    </div>
  );
};

export default FavoriteButton;
