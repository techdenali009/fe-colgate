import React, { useState } from 'react';
import { ButtonWithTextAndIcon } from '../ButtonWithTextAndIcon';
import { Button } from '@ui/atoms/Button';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@store/store';
import { ProductCard } from '../ProductCard';

interface FavouritesPageProps {
  className?: string; // Optional class for styling
  subHeading?: string; // Optional subheading text
  buttonText?: string; // Text for the button
  buttonOnClick?: () => void; // Callback for button click
}

const FavouritesPage: React.FC<FavouritesPageProps> = ({
  className = '',
  subHeading = '',
  buttonText = '',
}) => {
  const [activeTab, setActiveTab] = useState<string>('products'); // Default active tab
  const navigate = useNavigate(); 
  const favoriteProductIds = useSelector(
    (state: RootState) => state.favorites.productIds);
  const handleRedirect = () => {
    navigate('/products'); // Redirect to /products
  };
  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <div className={`favourites-page ${className}`}>
      {/* Tab list */}
      <div className="flex space-x-3 border-b tab-list">
        <Button
          className={`w-[200px] text-black font-HeroNewBold tab-button text-l font-bold px-4 lg:px-16 rounded-none py-2 transition-colors duration-300 focus-visible:bg-primary-400 ${
            activeTab === 'products' ? 'border-b-4 border-appTheme' : 'border-b-2 border-none'
          }`}
          onClick={() => handleTabClick('products')}
        >
          Products
        </Button>
        <Button
          className={`w-[200px] text-black font-HeroNewBold tab-button text-l font-bold px-4 lg:px-16 rounded-none py-2 transition-colors duration-300 focus-visible:bg-primary-400 ${
            activeTab === 'courses' ? 'border-b-4 border-appTheme' : 'border-b-2 border-none'
          }`}
          onClick={() => handleTabClick('courses')}
        >
          Courses
        </Button>
      </div>
  {/* Content based on active tab */}
      {activeTab === 'products' ? (
      <div className={`favourites-page ${className}`}>
      <h2 className="mb-7 text-3xl text-appTheme font-bold tracking-wider">Favorites</h2>
      {favoriteProductIds.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {favoriteProductIds.map((id) => (
            <ProductCard key={id} productId={id} name={''} imageSrc={''} altText={''} /> // ProductCard should render product details
          ))}
        </div>
      ) : (
     
      <div className="flex items-center justify-center w-full mt-8 h-[222px] bg-[#f4f4f4] no-favorites-section">
        <div className="flex flex-col items-center justify-center no-favorites-container">
          {/* Subheading */}
          <div className="heading lg:text-normal text-[20px] font-HeroNewRegular text-[#333333] tracking-normal leading-10">
            <h3>{subHeading}</h3>
          </div>

          {/* Button */}
          <ButtonWithTextAndIcon
            type="button"
            onClick={handleRedirect}
            className="w-[143px] h-[40px] lg:w-[162px] lg:h-[40px] !bg-appTheme text-white !border-appTheme hover:!bg-black hover:!border-none font-HeroNewBold text-[14px] !p-0"
          >
            {buttonText}
          </ButtonWithTextAndIcon>
        </div>
      </div>
        )}
    </div>
   ) : (
    <div>
      <h2 className="mb-7 text-3xl text-appTheme font-bold tracking-wider">Courses</h2>
      {/* Add content for courses tab here */}
      <p>No courses added to favorites yet.</p>
    </div>
  )}
</div>
);
};

export default FavouritesPage;
