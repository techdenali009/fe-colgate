import { ButtonWithText } from '@ui/molecules/ButtonWithText';
import { FilterContainer } from '@ui/molecules/FilterContainer';
import FilterDropdown from '@ui/molecules/FilterDropdown/FilterDropdown';
import PageTitleHeader from '@ui/molecules/PageTitleHeader';
import PlpAccordians from '@ui/molecules/PlpAccordians';
import Product from '@ui/organisms/Product';
import { useMemo, useState, useEffect } from 'react';


import { ProductType } from '@utils/Product';

import QuickViewModal from '@ui/organisms/QuickView';
import { RootState } from '@store/store';
import PopularProductSkeleton from '@ui/molecules/PopularProductSkeleton';
import RecentlyViewedProducts from '@ui/organisms/RecentlyViewedProducts';
import { RecentProduct as products } from '@utils/test';
import LoginModal from '@ui/organisms/LoginModal';

import { useProductContext } from 'src/libs/contexts/PlpContext';
import { toggleLoginModel } from '@store/services/Slices/ModalSlice';
import { Plp_Constants, plpFilters, SortOptions } from '@utils/plpFilterData';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

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
    productsToShow,
    loadMoreProducts,
    selectedSortOption,
    setSelectedSortOption,
    sortProducts,
  } = useProductContext();

  const [, setIsBestSellerState] = useState<boolean>(false);
  const [enableBestSeller, setEnableBestSeller] = useState<boolean>(false);
  const [QuickViewModalOpen, setQuickViewModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);
  const userInfo = useSelector((state: RootState) => state.authSlice.userInfo);
  const isLoggedIn = Boolean(userInfo);
  const closeQuickViewModal = () => setQuickViewModalOpen(false);
  const [toggle, SetToggle] = useState(false);
  // Update URL params when a category is selected

  const handleCategorySelect = (category: string | null) => {
    const newCategory = category ?? 'all products';

    if (newCategory === Plp_Constants.bestSeller) {
      setIsBestSellerState(true);
      setFilters([]);
      navigate('products?category=best-seller');
      setSelectedProductCategory(newCategory);
      return;
    }

    const getAllCategories = () => {
      const categoryFilter = plpFilters.find(filter => filter.title === 'Product Category');
      return categoryFilter ? categoryFilter.options.map(option => option.title) : [];
    };

    if (newCategory === Plp_Constants.AllProducts || newCategory === Plp_Constants.viewAll) {
      setIsBestSellerState(false);
      setFilters(getAllCategories());
      const searchParams = new URLSearchParams(location.search);
      searchParams.delete('category');
      navigate({ search: searchParams.toString() });
      setSelectedProductCategory(newCategory);
      return;
    }

    // Toggle category in filters
    const updatedFilters = filters.includes(newCategory)
      ? filters.filter(filter => filter !== newCategory)
      : [...filters, newCategory];

    setFilters(updatedFilters);

    // Update URL with selected categories as comma-separated list
    const searchParams = new URLSearchParams(location.search);
    if (updatedFilters.length > 0) {
      searchParams.set('category', updatedFilters.join(','));
    } else {
      searchParams.delete('category');
    }
    navigate({ search: searchParams.toString() });

    setSelectedProductCategory(newCategory);
    setIsBestSellerState(false);
  };

  const breadcrumbs = useMemo(() => [
    { label: 'Home', href: '/' },
    { label: 'All Products', href: '/products' },
    ...(selectedProductCategory && selectedProductCategory !== Plp_Constants.AllProducts ? [{ label: selectedProductCategory, href: '#' }] : []),
  ], [selectedProductCategory]);

  const handleSortChange = (option: string) => {
    setSelectedSortOption(option);

    const searchParams = new URLSearchParams(location.search);
    searchParams.set('sort', option);
    navigate({ search: searchParams.toString() });
  };

  const sortedProducts = useMemo(() => sortProducts([...filteredProducts]), [filters, filteredProducts, selectedSortOption]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const categoryFromUrl = searchParams.get('category');
    const sortFromUrl = searchParams.get('sort');

    if (categoryFromUrl) {
      const categories = categoryFromUrl.split(',');
      setSelectedProductCategory(categories[0]);
      setFilters(categories);
    } else if (!categoryFromUrl && enableBestSeller) {
      setEnableBestSeller(false);
      setSelectedProductCategory('All Products');
      setFilters([]);
    }

    if (sortFromUrl && selectedSortOption !== sortFromUrl) {
      setSelectedSortOption(sortFromUrl);
    }
  }, [location.search]);

  //USed to fetch the products from api call but now  we are fetching from test page
   
  const openQuickReviewModal = async (id: number) => {
    const product = sortedProducts.find(p => p.id === id);
    if (product) {
      setSelectedProduct(product);
      setQuickViewModalOpen(true);
    }
  };
  const modalSetToggle = () => {
    SetToggle(!toggle)
  }

  return (
    <div className="relative pr-2 pl-2">
      <div className="!mt-10 text-[2.375rem] font-HeroNewBold font-extrabold plpPageTittle my-0 mx-[30px] py-0 lg:px-6 px-14 tm:px-6  xl:px-14 tm:mx-1">
        <PageTitleHeader className='!text-xs !leading-4 text-tertiary-400 font-HeroNewBold tm:text-[2.375rem]' breadcrumbs={breadcrumbs} />
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
            onproduct={''} />
        </div>
        <div className='w-full'>
          <div className='relative flex items-baseline justify-between'>
            <FilterContainer
              filters={filters}
              onRemoveFilter={(filterToRemove) => {
                const updatedFilters = filters.filter((filter: string) => filter !== filterToRemove);
                setFilters(updatedFilters);
                const searchParams = new URLSearchParams(location.search);
                if (updatedFilters.length > 0) {
                  searchParams.set('category', updatedFilters.join(','));
                } else {
                  searchParams.delete('category');
                }
                navigate({ search: searchParams.toString() });
              }}
              onClearAll={() => {
                setFilters([]);
                const searchParams = new URLSearchParams(location.search);
                searchParams.delete('category');
                navigate({ search: searchParams.toString() });
              }}
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

          <div className="productcard tm:py-[49px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[23px]">
            {sortedProducts
              .map((product, index) => {
                if (index < productsToShow) {
                  return (
                    <Product
                      key={`${product.id}-${product.name}`}
                      product={product}
                      modalSetToggle={() => dispatch(toggleLoginModel())}
                      openQuickView={() => openQuickReviewModal(product.id)}
                      showQuickView={isLoggedIn}

                    />
                  );
                }
                return null;
              })}
          </div>

          {productsToShow < sortedProducts.length && (
            <div className="text-center mt-5">
              <ButtonWithText
                onClick={loadMoreProducts}
                className="px-4 py-2 min-w-[144px] text-appTheme hover:bg-black hover:text-white h-[47px] border-2 hover:underline border-appTheme bg-white text-base font-bold">
                Load More
              </ButtonWithText>
            </div>
          )}
          <div className="text-center mt-4">
            {sortedProducts.length > 0
              ? `Viewing ${Math.min(productsToShow, sortedProducts.length)} out of ${sortedProducts.length} products`
              : 'No products found for this category.'}
          </div>

        </div>

      </div>
      <div className="bg-[#f3f3f3] dark:bg-appModalColor">
        <div className="lg:px-[3.5rem] px-6 xl:w-[90rem] w-full  py-14 xl:mx-auto">
          {products.length === 0 ? (
            <PopularProductSkeleton />
          ) : (
            <RecentlyViewedProducts products={products} modalSetToggle={modalSetToggle} />
          )}
        </div>
      </div>
      {toggle && <LoginModal closeModal={modalSetToggle} />}
      {QuickViewModalOpen && selectedProduct && (
        <QuickViewModal
          closeModal={closeQuickViewModal}
          product={selectedProduct}
          aria-hidden={!QuickViewModalOpen}
          aria-modal="true"
        />
      )}

    </div>
  );
};

export default PlpPageTemplate;
