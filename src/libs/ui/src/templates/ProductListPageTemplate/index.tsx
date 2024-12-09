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

import PlpPageSkeleton, {
  PlpProductCardSkeleton,
} from '@ui/molecules/PlpPageSkeleton';

const PlpPageTemplate: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

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
    totalProducts,
    isLoading,
    isProductLoading,
  } = useProductContext();

  const [, setIsBestSellerState] = useState<boolean>(false);
  const [QuickViewModalOpen] = useState(false);
  const [selectedProduct] = useState<ProductType | null>(null);
  const userInfo = useSelector((state: RootState) => state.authSlice.userInfo);
  const isLoggedIn = Boolean(userInfo);
  const [toggle, SetToggle] = useState(false);

  const handleCategorySelect = (category: string | null) => {
    const newCategory = category ?? 'All Products';
    const searchParams = new URLSearchParams(location.search);

    const categoryGroups = {
      'skin-type': ['Dry', 'Normal', 'Combination', 'Sensitive', 'Oily'],
      'skin-concern': ['Brightening', 'Acne', 'Aging', 'Discolorations'],
      'product-type': ['Backbar', 'Retail', 'Sample'],
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
        ? existingCategories.filter((item) => item !== newCategory)
        : [...existingCategories, newCategory];

      searchParams.delete(categoryParam);
      updatedCategories.forEach((item) =>
        searchParams.append(categoryParam, item)
      );
    } else {
      searchParams.set('category', newCategory);
    }

    navigate({ search: searchParams.toString() });
    setSelectedProductCategory(newCategory);
    if (newCategory === 'All Products') {
      navigate('/products');
    }
  };

  const handleFilterChange = (newFilters: string[]) => {
    setFilters(newFilters);
  };

  // In PlpPageTemplate.tsx - modify handleRemoveFilter
  const handleRemoveFilter = (filterToRemove: string) => {
    const newFilters = filters.filter((filter) => filter !== filterToRemove);
    setFilters(newFilters);

    // Update URL parameters
    const searchParams = new URLSearchParams(location.search);

    // Find which parameter group the filter belongs to
    const categoryGroups = {
      'skin-type': ['Dry', 'Normal', 'Combination', 'Sensitive', 'Oily'],
      'skin-concern': ['Brightening', 'Acne', 'Aging', 'Discolorations'],
      'product-type': ['Backbar', 'Retail', 'Sample'],
    };

    for (const [param, values] of Object.entries(categoryGroups)) {
      if (values.includes(filterToRemove)) {
        // Remove the specific filter from its parameter group
        const existingValues = searchParams.getAll(param);
        searchParams.delete(param);
        existingValues
          .filter((value) => value !== filterToRemove)
          .forEach((value) => searchParams.append(param, value));
      }
    }

    // Update URL without reloading the page
    navigate({ search: searchParams.toString() }, { replace: true });
  };

  const handleSortChange = (option: string) => {
    setSelectedSortOption(option);
  };

  const modalSetToggle = () => {
    SetToggle(!toggle);
  };

  const handleClearAll = () => {
    setFilters([]);
    navigate('/products');
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const openQuickReviewModal = async (_id: string) => {};

  return (
    <>
      {isLoading && <PlpPageSkeleton />}
      {!isLoading && (
        <div className='relative pr-2 pl-2'>
          <div className='!mt-10 text-[2.375rem] font-HeroNewBold font-extrabold plpPageTittle my-0 mx-[30px] py-0 lg:px-6 px-14 tm:px-6  xl:px-14 tm:mx-1'>
            <PageTitleHeader
              className='!text-xs !leading-4 text-tertiary-400 font-HeroNewBold tm:text-[2.375rem]'
              breadcrumbs={breadcrumbs}
            />
          </div>

          <div className="tm:block flex gap-[23px] py-0 xl:px-14 mt-5 mb-32 tm:pl-6 tm:pr-6 tl:px-5">
            <div className="relative tm:px-0 pl-[18px] pr-[18px]">
              <PlpAccordians
                className="tm:w-full xl:px-[8px] tl:w-[250px] xl:w-[324px] tm:h-[31px] tm:line[1px] tm:border-2 tm:border-appTheme tm:rounded-none"
                onBestSellerChange={setIsBestSellerState}
                onCategorySelect={handleCategorySelect}
                onSortChange={handleSortChange}
                enableBestSeller={enableBestSeller}
                currentProductCategory={selectedProductCategory}
                filters={filters}
                onFilterChange={handleFilterChange}
                onproduct={''}
              />
            </div>
            <div className="w-full">
              <div className="relative flex items-baseline justify-between">
                <PlpFilterContainer
                  filters={filters} // This should now update correctly
                  onRemoveFilter={handleRemoveFilter}
                  onClearAll={handleClearAll}
                />
                <div className="flex gap-8 items-baseline pr-12 pl-12 tm:pr-0 tm:pl-0 tm:absolute">
                  <div className="flex gap-1">
                    {' '}
                    {totalProducts} <p>products</p>
                  </div>
                  <div className="tm:hidden lg:relative">
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

              <div className="tm:py-[49px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[23px]">
                {isProductLoading && !hasMore
                  ? // Skeleton loader grid only appears when initial products are being loaded
                  Array.from({ length: 9 }).map((_, index) => (
                    <PlpProductCardSkeleton key={index} />
                  ))
                  : // Actual product grid
                  filteredProducts.map((product) => (
                    <Product
                      key={`${product._id}-${product.name}`}
                      product={{
                        id: product._id,
                        name: product.name,
                        image:
                            product?.images?.length > 0
                              ? product.images[0]?.url
                              : '',
                        rating: product?.rating || 0,
                        price: product?.price,
                        isBestSeller: product?.isBestSeller || false,
                      }}
                      modalSetToggle={() => dispatch(toggleLoginModel())}
                      openQuickView={() => openQuickReviewModal(product._id)}
                      showQuickView={isLoggedIn}
                    />
                  ))}
              </div>

              <div className="text-center mt-4">
                {filteredProducts.length > 0
                  ? `Viewing ${filteredProducts.length} out of ${totalProducts} products`
                  : 'No products found for this category.'}
              </div>
              {hasMore && (
                <div className="text-center mt-5">
                  <ButtonWithText
                    onClick={loadMoreProducts}
                    className="px-4 py-2 min-w-[144px] text-appTheme hover:bg-black hover:text-white h-[47px] border-2 hover:underline border-appTheme bg-white text-base font-bold"
                    disabled={isProductLoading} // Disable button while loading
                  >
                    {isProductLoading ? 'Please Wait...' : 'Load More'}
                  </ButtonWithText>
                </div>
              )}
            </div>
          </div>
          <div className="bg-[#f3f3f3] dark:bg-appModalColor">
            <div className="lg:px-[3.5rem] px-6 xl:w-[90rem] w-full  py-14 xl:mx-auto">
              {products.length === 0 ? (
                <PopularProductSkeleton />
              ) : (
                <RecentlyViewedProducts
                  products={filteredProducts}
                  modalSetToggle={modalSetToggle}
                  hasMore={true}
                  onNextPage={() => {}}
                />
              )}
            </div>
          </div>
          {toggle && <LoginModal closeModal={modalSetToggle} />}
          {QuickViewModalOpen && selectedProduct && <></>}
        </div>
      )}
    </>
  );
};

export default PlpPageTemplate;
