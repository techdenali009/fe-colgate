import React, { useEffect, useState } from 'react';
import { ButtonWithTextAndIcon } from '../ButtonWithTextAndIcon';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@store/store';
import { useLazyGetFavouriteProductsQuery } from '@store/services/Endpoints/UserApi';
import Product from '@ui/organisms/Product';
import FavoriteButton from '@ui/atoms/ProductDetailsPageFavoriteButton';

interface Product {
  discount: number;
  _id: string;
  name: string;
  images?: { url: string }[];
  rating?: number;
  altText: string;
  price?: number;
  isBestSeller?: boolean;
}

interface FavouritesPageProps {
  className?: string;
  subHeading?: string;
  buttonText?: string;
  buttonOnClick?: () => void;
}

const FavouritesPage: React.FC<FavouritesPageProps> = ({
  className = '',
  subHeading = '',
  buttonText = '',
}) => {
  const [activeTab,] = useState<string>('products');
  const [fetchedProducts, setFetchedProducts] = useState<Product[]>([]);
  const userId = useSelector((state: RootState) => state.authSlice.userInfo?._id);
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleRedirect = () => {
    navigate('/products');
  };
   
  // const handleTabClick = (tabName: string) => {
  //   setActiveTab(tabName);
  // };

  const openQuickReviewModal = (productId: string) => {
    console.log(`Quick review modal opened for product ID: ${productId}`);
  };

  const [triggerGetFavourites, { data }] = useLazyGetFavouriteProductsQuery();

  useEffect(() => {
    triggerGetFavourites(userId);
  }, [triggerGetFavourites]);

  useEffect(() => {
    if (data?.data?.myFavorites?.myFavorites?.favoriteProducts) {
      setFetchedProducts(data?.data?.myFavorites?.myFavorites?.favoriteProducts);
      setIsLoading(false);
    }
  }, [data]);

  return (
    <div className={`favourites-page ${className}`}>
      <div className="flex space-x-3 border-b tab-list">
        {/* <Button
          className={`w-full text-black font-HeroNewBold tab-button text-l font-bold px-4 lg:px-16 rounded-none py-2 transition-colors duration-300 focus-visible:bg-primary-400 ${activeTab === 'products' ? 'border-b-4 border-appTheme' : 'border-b-2 border-none'}`}
          onClick={() => handleTabClick('products')}
        >
          Products
        </Button> */}
      </div>

      {/* Main wrapper div */}
      <div className="main-content">
        {/* First div for the product elements */}
        {activeTab === 'products' ? (
          <div className={`products-container ${className}`}>
            {isLoading ? (
              <p>Loading...</p>
            ) : fetchedProducts.length > 0 ? (
              <div className="flex flex-col lg:!flex-row space-x-8 lg:p-0 px-6">
                {/* Product grid taking the remaining space */}
               
                <div className="tm:py-[49px] w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[23px]">
                  {fetchedProducts.map((product) => (
                    <Product
                      key={`${product._id}-${product.name}`}
                      product={{
                        id: product._id,
                        name: product.name,
                        image: product.images![0]?.url || '',
                        rating: product?.rating || 0,
                        price: product.price,
                        isBestSeller: product?.isBestSeller || false,
                        discount:product?.discount
                      }}
                      modalSetToggle={() => { console.log('dffsdad') }}
                      openQuickView={() => openQuickReviewModal(product._id)}
                      showQuickView={false}
                      showAddToCartButton={false}
                      overallclassName='align-center'
                      ProductImageClassName='sm:place-self-center '
                      footerContent={<FavoriteButton productId={product._id} showClose={true} />}
                    />
                  ))}
                </div>
              </div>
             
            ) : (
              <div className="flex items-center justify-center w-full mt-8 h-[222px] bg-[#f4f4f4] no-favorites-section">
                <div className="flex flex-col items-center justify-center no-favorites-container">
                  <div className="heading lg:text-normal text-[20px] font-HeroNewRegular text-[#333333] tracking-normal leading-10">
                    <h3>{subHeading}</h3>
                  </div>

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
            <p>No courses added to favorites yet.</p>
          </div>
        )}
      </div>

    </div>
  );
};

export default FavouritesPage;
