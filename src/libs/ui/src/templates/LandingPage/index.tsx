import { Carousel } from '@ui/organisms/Carousel';
import './landingPage.styles.scss';
import { carouselData } from '@utils/carouselData';
import PopularProducts from '@ui/organisms/PopularProducts';
import { MarketingBannerList } from '@ui/organisms/MarketingBannerList';
import {
  marketingBannersData,
  marketingBannerTwo,
  promotionBannersData,
} from '@utils/banner';
import { MarketingBannerTwo } from '@ui/organisms/MarketingBannerTwo';
import { PromotionBannerSection } from '@ui/organisms/PromotionaBannerSection';
import GreetRegister from '@ui/organisms/GreetingRegister';
import { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLoginModel } from '@store/services/Slices/ModalSlice';
import { RootState } from '@store/store';

import PopularProductSkeleton from '@ui/molecules/PopularProductSkeleton';
import { useLazyGetProductsQuery } from '@store/services/Endpoints/PlpProductsEndPoint';

export interface Product {
  id: string | number | undefined;
  _id: string;
  name: string;
  description: string;
  category: {
    name: string;
    description: string;
  };
  images: {
    url: string;
    altText: string;
  }[];
  rating?: number;
  isBestSeller?: boolean;
  discount: number;
  stock: number;
  price: number;
}

export const LandingTemplatePage = () => {
  const isLoggedIn = useSelector(
    (state: RootState) => state.authSlice.userInfo
  );
  const dispatch = useDispatch();

  const [trigger, { data: newProducts, isLoading, error }] =
    useLazyGetProductsQuery();

  const modalSetToggle = () => {
    dispatch(toggleLoginModel());
  };

  const [page, setPage] = useState(1);
  const [productsList, setProductsList] = useState<Product[]>([]); // Store all products
  const [hasMore, setHasMore] = useState<boolean>(true); // State to track if there are more products

  const limit = 10;

  const handleNextPage = () => {
    if (hasMore) {
      setPage((prevPage) => prevPage + 1); // Increment page number only if there are more products
    }
  };
  const queryParams = useMemo(() => {
    const filters = { isPopular: true, page, limit };
    return Object.entries(filters)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');
  }, [page, limit]);

  useEffect(() => {
    if (page === 1) {
      setProductsList([]); // Reset the products list when on the first page
    }
    trigger(queryParams);
  }, [page, trigger, queryParams]);

  useEffect(() => {
    if (newProducts) {
      setProductsList((prevProducts) => [
        ...prevProducts,
        ...newProducts.products,
      ]);

      // Set the hasMore state based on the response data
      setHasMore(newProducts.hasMore); // If fewer products are returned than the limit, no more pages
    }
  }, [newProducts]);

  // Error handling for failed data fetching
  if (error) {
    return <div>Error loading products. Please try again later.</div>;
  }

  return (
    <>
      {!isLoggedIn && <GreetRegister />}

      {/* marketing-Carousel */}
      <Carousel slides={carouselData} />

      {/* marketing-banner-1 */}
      <div className='px-16 p-12'>
        <MarketingBannerList marketingBannersData={marketingBannersData} />
      </div>

      {/* promotion-banner-1 */}
      <PromotionBannerSection banners={promotionBannersData} />

      {/* marketing-banner-2 */}
      <MarketingBannerTwo bannerData={marketingBannerTwo[0]} />

      {/* popular-products */}
      <div className='lg:pl-appPaddingLeft lg:pr-appPaddingRight pl-6 pr-6 mb-20'>
        {isLoading ? (
          <PopularProductSkeleton />
        ) : (
          <PopularProducts
            products={productsList} // Pass the combined products list to PopularProducts
            modalSetToggle={modalSetToggle}
            onNextPage={handleNextPage}
            hasMore={hasMore} // Pass the hasMore flag to the child component
          />
        )}
      </div>
    </>
  );
};
