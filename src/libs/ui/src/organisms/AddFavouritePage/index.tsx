import React from 'react';

import FavouritesPage from '@ui/molecules/FavouritesPage';


interface AddFavouritePageProps {
  className: string;
}

const AddFavouritePage: React.FC<AddFavouritePageProps> = () => {
  return (
    <div className='col-span-12 mt-4 lg:mt-8 w-full'>
      <div className="mb-7 text-3xl text-appTheme font-bold tracking-wider w-full">
        <h2>Favorites</h2>
      </div>
      <div className='flex flex-col lg:flex-row'>
      
        <div className='lg:w-full w-full'>
          <FavouritesPage
            subHeading="Nothing favorited"
            buttonText="Shop Products"
            buttonOnClick={() => console.log('Redirect to items page')}
          />
        </div>
      </div>
    </div>
  );
};

export default AddFavouritePage;

