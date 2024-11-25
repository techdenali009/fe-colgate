import { ButtonWithText } from '@ui/molecules/ButtonWithText';
import { PlpFilterContainer } from '@ui/molecules/PlpFilterContainer';
import FilterDropdown from '@ui/molecules/FilterDropdown/FilterDropdown';
import PageTitleHeader from '@ui/molecules/PageTitleHeader';
import PlpAccordians from '@ui/molecules/PlpAccordians';
import Product from '@ui/organisms/Product';
import { useState } from 'react';
import { ProductType } from '@utils/Product';
import { RootState } from '@store/store';
import PopularProductSkeleton from '@ui/molecules/PopularProductSkeleton';
import RecentlyViewedProducts from '@ui/organisms/RecentlyViewedProducts';
import { RecentProduct as products } from '@utils/test';
import LoginModal from '@ui/organisms/LoginModal';

import { toggleLoginModel } from '@store/services/Slices/ModalSlice';
import { SortOptions } from '@utils/plpFilterData';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { useProductContext } from '../../../../contexts/PlpContext';
import PlpPageSkeleton from '@ui/molecules/PlpPageSkeleton';
import React from 'react';

const PlpPageTemplate: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [isProductsLoading, setIsProductsLoading] = useState(false);

  const {
    selectedProductCategory,
    setSelectedProductCategory,
    filters,
    setFilters,
    filteredProducts,
    loadMoreProducts,
    setSelectedSortOption,
    breadcrumbs,
    enableBestSeller,
    hasMore,
    totalProducts
  } = useProductContext();

  const [, setIsBestSellerState] = useState<boolean>(false);
  const [QuickViewModalOpen] = useState(false);
  const [selectedProduct] = useState<ProductType | null>(null);
  const userInfo = useSelector((state: RootState) => state.authSlice.userInfo);
  const isLoggedIn = Boolean(userInfo);
 
  const [toggle] = useState(false);

  // Initial page load
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleCategorySelect = (category: string | null) => {
    setIsProductsLoading(true); // Only load products section
    const newCategory = category ?? 'All Products';
    const searchParams = new URLSearchParams(location.search);

    const categoryGroups = {
      'skin-type': ['Dry', 'Normal', 'Combination', 'Sensitive', 'Oily'],
      'skin-concern': ['Brightening', 'Acne', 'Aging', 'Discolorations'],
      'product-type': ['Backbar', 'Retail', 'Sample']
    };

    let categoryParam;
    for (const [param, values] of Object.entries(categoryGroups)) {
      if (values.includes(newCategory)) {
        categoryParam = param;
        break;
      }
    }

    if (categoryParam) {
      const existingCategories = searchParams.getAll(categoryParam);
      const updatedCategories = existingCategories.includes(newCategory)
        ? existingCategories.filter(item => item !== newCategory)
        : [...existingCategories, newCategory];

      searchParams.delete(categoryParam);
      updatedCategories.forEach(item => searchParams.append(categoryParam, item));
    } else {
      searchParams.set('category', newCategory);
    }

    // Update URL without page reload
    navigate({ search: searchParams.toString() }, { replace: true });
    setSelectedProductCategory(newCategory);
    
    if (newCategory === 'All Products') {
      navigate('/products', { replace: true });
    }

    setTimeout(() => setIsProductsLoading(false), 800);
  };

  const handleSortChange = (option: string) => {
    setIsProductsLoading(true);
    setSelectedSortOption(option);
    setTimeout(() => setIsProductsLoading(false), 500);
  };

  const handleClearAll = () => {
    setIsProductsLoading(true);
    setFilters([]);
    navigate('/products', { replace: true });
    setTimeout(() => setIsProductsLoading(false), 500);
  };

  // Show skeleton for initial page load only
  if (isInitialLoading) {
    return <PlpPageSkeleton />;
  }

  const ProductGridSkeleton = () => (
    <div className="tm:py-[49px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[23px]">
      {Array.from({ length: 9 }).map((_, index) => (
        <div key={index} className="animate-pulse">
          <div className="h-64 bg-gray-200 rounded-lg mb-4" />
          <div className="space-y-3">
            <div className="h-4 w-3/4 bg-gray-200 rounded" />
            <div className="h-4 w-1/2 bg-gray-200 rounded" />
            <div className="h-4 w-1/4 bg-gray-200 rounded" />
          </div>
        </div>
      ))}
    </div>
  );

  function modalSetToggle(): void {
    throw new Error('Function not implemented.');
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function openQuickReviewModal(_id: string): void {
    throw new Error('Function not implemented.');
  }

  return (
    <div className="relative pr-2 pl-2">
      <div className="!mt-10 text-[2.375rem] font-HeroNewBold font-extrabold plpPageTittle my-0 mx-[30px] py-0 lg:px-6 px-14 tm:px-6  xl:px-14 tm:mx-1">
        <PageTitleHeader 
          className='!text-xs !leading-4 text-tertiary-400 font-HeroNewBold tm:text-[2.375rem]' 
          breadcrumbs={breadcrumbs} 
        />
      </div>

      <div className="tm:block flex gap-[23px] py-0 xl:px-14 mt-5 mb-32 tm:pl-6 tm:pr-6 tl:px-5">
        <div className="relative tm:px-0 pl-[18px] pr-[18px]">
          <PlpAccordians
            className='tm:w-full xl:px-[8px] tl:w-[250px] xl:w-[324px] tm:h-[31px] tm:line[1px] tm:border-2 tm:border-appTheme tm:rounded-none'
            onBestSellerChange={setIsBestSellerState}
            onCategorySelect={handleCategorySelect}
            onSortChange={handleSortChange}
            enableBestSeller={enableBestSeller}
            currentProductCategory={selectedProductCategory}
            onproduct={''} 
          />
        </div>

        <div className='w-full'>
          <div className='relative flex items-baseline justify-between'>
            <PlpFilterContainer
              filters={filters}
              onRemoveFilter={(filterToRemove) =>
                setFilters(filters.filter((filter: string) => filter !== filterToRemove))}
              onClearAll={handleClearAll}
            />
            <div className='flex gap-8 items-baseline pr-12 pl-12 tm:pr-0 tm:pl-0 tm:absolute'>
              <div className="flex gap-1"> {filteredProducts.length} <p>products</p></div>
              <div className='tm:hidden lg:relative'>
                <FilterDropdown
                  options={[
                    SortOptions.ALPHABETICAL_AZ,
                    SortOptions.ALPHABETICAL_ZA,
                    SortOptions.PRICE_LOW_HIGH,
                    SortOptions.PRICE_HIGH_LOW,
                  ]}
                  onSelect={handleSortChange}
                />
              </div>
            </div>
          </div>

          {/* Show skeleton only for product grid during filtering/sorting */}
          {isProductsLoading ? (
            <ProductGridSkeleton />
          ) : (
            <div className="tm:py-[49px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[23px]">
              {filteredProducts.map((product) => (
                <Product
                  key={`${product._id}-${product.name}`}
                  product={{
                    id: product._id,
                    name: product.name,
                    image: product?.images?.length > 0 ? product.images[0]?.url : '',
                    rating: product?.rating || 0,
                    price: product?.price,
                    isBestSeller: product?.isBestSeller || false
                  }}
                  modalSetToggle={() => dispatch(toggleLoginModel())}
                  openQuickView={() => openQuickReviewModal(product._id)}
                  showQuickView={isLoggedIn}
                />
              ))}
            </div>
          )}

          {hasMore && !isProductsLoading && (
            <div className="text-center mt-5">
              <ButtonWithText
                onClick={loadMoreProducts}
                className="px-4 py-2 min-w-[144px] text-appTheme hover:bg-black hover:text-white h-[47px] border-2 hover:underline border-appTheme bg-white text-base font-bold">
                Load More
              </ButtonWithText>
            </div>
          )}
          
          <div className="text-center mt-4">
            {filteredProducts.length > 0
              ? `Viewing ${filteredProducts.length} out of ${totalProducts} products`
              : 'No products found for this category.'}
          </div>
        </div>
      </div>

      <div className="bg-[#f3f3f3] dark:bg-appModalColor">
        <div className="lg:px-[3.5rem] px-6 xl:w-[90rem] w-full py-14 xl:mx-auto">
          {products.length === 0 ? (
            <PopularProductSkeleton />
          ) : (
            <RecentlyViewedProducts products={products} modalSetToggle={modalSetToggle} />
          )}
        </div>
      </div>
      
      {toggle && <LoginModal closeModal={modalSetToggle} />}
      {QuickViewModalOpen && selectedProduct && <></>}
    </div>
  );
};

export default PlpPageTemplate;

 