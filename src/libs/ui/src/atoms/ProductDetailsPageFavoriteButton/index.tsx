import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import FavouriteIcon from '../SvgAtoms/FavouriteIcon';
import FavouriteIconFilled from '../SvgAtoms/FavouriteIconFilled';
import { RootState } from '@store/store';
import { showErrorToast, showSuccessToast } from '@utils/toastUtils';
import { useDispatch, useSelector } from 'react-redux';

import { useAddfavouriteMutation } from '@store/services/Endpoints/AuthApi';
import { addFavorite, removeFavorite } from '@store/services/Slices/Favourite';

interface FavoriteButtonProps {
  productId: string; // Product ID to be used in API calls
  isFav: boolean; // Initial favorite state
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ productId }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => !!state.authSlice.userInfo);
  const userId = useSelector((state: RootState) => state.authSlice.userInfo?._id); // Get userId from state

  const favoriteProductIds = useSelector((state: RootState) => state.favorites.productIds); // Get favorite products from Redux
  const isFavorite = favoriteProductIds.includes(productId); // Check if the product is already a favorite

  const [isHovered, setIsHovered] = useState(false);
  const [addFavourite] = useAddfavouriteMutation();

  const handleFavoriteAction = async (action: 'add' | 'remove') => {
    if (!isLoggedIn) {
      showErrorToast('Please log in to add items to favorites.', 'top-right');
      return;
    }

    const favoriteData = {
      userId: userId || '',
      productId,
      action,
    };

    try {
      console.log('dfghyjkjuytrtyujhygtfrtgyhjkjhgfdf',productId)
      const response = await addFavourite(favoriteData).unwrap();
      if (response.status === 'Success') {
        // Dispatch action to update the Redux state
        if (action === 'add') {
        
          dispatch(addFavorite(productId)); // Add to favorites
        } else {
          dispatch(removeFavorite(productId)); // Remove from favorites
        }
        showSuccessToast(
          `${action === 'add' ? 'Added to' : 'Removed from'} Favorites`,
          'top-right'
        );
      }
    } catch (err: any) {
      console.error(`Error ${action === 'add' ? 'adding' : 'removing'} favorite:`, err.data.message);
      showErrorToast(`${err.data.message}`, 'top-right');
    }
  };

  return (
    <div className="Product-detailspage favorite-button-container">
      <button
        type="button"
        className="group flex gap-2 items-center justify-center px-2 py-2 fav-icon font-bold text-primary-400 text-sm favorite-cta favorite_favorite-button__XiNVR default-favorite-button relative bottom-3"
        aria-label="Add to Favorite"
        onClick={() => handleFavoriteAction(isFavorite ? 'remove' : 'add')}
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
          {isFavorite ? 'Remove from Favourite' : 'Add to Favourite'}
        </div>
      </button>
      <ToastContainer />
    </div>
  );
};

export default FavoriteButton;
