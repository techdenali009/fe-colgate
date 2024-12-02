import React, { useMemo, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import FavouriteIcon from '../SvgAtoms/FavouriteIcon';
import FavouriteIconFilled from '../SvgAtoms/FavouriteIconFilled';
import { RootState } from '@store/store';
import { showErrorToast, showSuccessToast } from '@utils/toastUtils';
import { useDispatch, useSelector } from 'react-redux';

import { useAddfavouriteMutation } from '@store/services/Endpoints/UserApi';
import { addFavorite, removeFavorite } from '@store/services/Slices/Favourite';

import AddFavouriteCloseIcons from '@ui/atoms/SvgAtoms/AddFavouriteCloseIcon';


interface FavoriteButtonProps {
  productId: string; // Product ID to be used in API calls
  isFav?: boolean; // Initial favorite state
  customIconUrl?: string;
  showClose?:boolean,
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ productId,showClose = false }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => !!state.authSlice.userInfo);
  const userId = useSelector((state: RootState) => state.authSlice.userInfo?._id); // Get userId from state

  const favoriteProductIds = useSelector((state: RootState) => state.favorites.productIds); // Get favorite products from Redux
  // const isFavorite = favoriteProductIds.includes(productId); // Check if the product is already a favorite
  const isFavorite = useMemo(() => favoriteProductIds.includes(productId), [favoriteProductIds, productId]);
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

      const response = await addFavourite(favoriteData).unwrap();
      if (response?.status === 'Success') {
        dispatch(action === 'add' ? addFavorite(productId) : removeFavorite(productId));
        // showSuccessToast(`${action === 'add' ? 'Added to' : 'Removed from'} Favorites`, 'top-right');
      }
      // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    } catch (err: any) {
      showErrorToast(err?.data?.message || 'Failed to update favorite.', 'top-right');
    }
  };



  return (
    <div className="Product-detailspage favorite-button-container">
      <button
        type="button"
        className="group flex gap-2 items-center justify-center px-2 py-2 fav-icon font-bold text-primary-400 text-sm favorite-cta favorite_favorite-button__XiNVR default-favorite-button relative bottom-3"
        aria-label={isFavorite ? 'Remove from Favorite' : 'Add to Favorite'}
        onClick={() => handleFavoriteAction(isFavorite ? 'remove' : 'add')}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative"
        >
          {!showClose && ((isFavorite || isHovered) ? (
            <FavouriteIconFilled /> // Show filled icon on hover or if marked as favorite
          ) : (
            <FavouriteIcon />
          ))}
          {showClose &&  <AddFavouriteCloseIcons/>}

        </div>
        <div className="font-HeroNewBold cta-label add-favorite-label text-[14px] text-appTheme block group-hover:text-white group-hover:bg-black group-hover:underline">
          {isFavorite ? 'Remove from Favourite' : 'Add to Favourite'}
        </div>
      </button>
      <ToastContainer />
    </div>
  );
};

export default FavoriteButton;
