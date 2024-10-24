import { ButtonWithText } from '@ui/molecules/ButtonWithText';
import { FilterContainer } from '@ui/molecules/FilterContainer';
import FilterDropdown from '@ui/molecules/FilterDropdown/FilterDropdown';
import PageTitleHeader from '@ui/molecules/PageTitleHeader';
import PlpAccordians from '@ui/molecules/PlpAccordians';
import Product from '@ui/organisms/Product';
import filterData from '@utils/FilterData';
import { useMemo, useState, useEffect } from 'react';
import { useProductContext } from '../../contexts/PlpContext';
import { useDispatch } from 'react-redux';
import { toggleLoginModel } from '@store/services/Slices/ModalSlice';
import { useNavigate, useLocation } from 'react-router-dom';

const PlpPageTemplate: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Define sorting options as constants
  const SortOptions = {
    ALPHABETICAL_AZ: 'Alphabetical A - Z',
    ALPHABETICAL_ZA: 'Alphabetical Z - A',
    PRICE_LOW_HIGH: 'Price Low to High',
    PRICE_HIGH_LOW: 'Price High to Low',
  };

  const {
    selectedProductCategory,
    setSelectedProductCategory,
    filters,
    setFilters,
    filteredProducts,
  } = useProductContext();

  const [productsToShow, setProductsToShow] = useState<number>(9);
  const [selectedSortOption, setSelectedSortOption] = useState<string>('Alphabetical A - Z');
  const [isBestSeller, setIsBestSellerState] = useState<boolean>(false);
  const [enableBestSeller, setEnableBestSeller] = useState<boolean>(false);

  // Update URL params when a category is selected
  const handleCategorySelect = (category: string | null) => {
    const newCategory = category ?? 'all products';

    if (newCategory === 'best seller') {
      setIsBestSellerState(true);
      setFilters([]); // Clear filters
      navigate('products?category=best-seller');
      setSelectedProductCategory(newCategory);
      return;
    }

    if (newCategory === 'All Products' || newCategory === 'View All') {
      setIsBestSellerState(false);
      const allCategories = ['antioxidants', 'broad spectrum SPF', 'Cleansers & toners', 'solution sets', 'eye, neck, lip', 'masks', 'moisturizers', 'retinols', 'serums'];
      setFilters(allCategories);
      const searchParams = new URLSearchParams(location.search);
      searchParams.delete('category');
      navigate({ search: searchParams.toString() });
      setSelectedProductCategory(newCategory);
      return;
    }

    const searchParams = new URLSearchParams(location.search);
    if (newCategory !== 'all products') {
      searchParams.set('category', newCategory);
      setFilters([...filters, newCategory]); // Add to filters
    }
    navigate({ search: searchParams.toString() });
  };

  const loadMoreProducts = () => setProductsToShow(prev => prev + 9);

  const breadcrumbs = useMemo(() => [
    { label: 'Home', href: '/' },
    { label: 'All Products', href: '/products' },
    ...(selectedProductCategory && selectedProductCategory !== 'All Products' ? [{ label: selectedProductCategory, href: '#' }] : []),
  ], [selectedProductCategory]);

  const handleSortChange = (option: string) => {
    setSelectedSortOption(option);
    const searchParams = new URLSearchParams(location.search);
    searchParams.set('sort', option);
    navigate({ search: searchParams.toString() });
  };

  const sortProducts = (products: any[]) => {
    switch (selectedSortOption) {
      case SortOptions.ALPHABETICAL_AZ:
        return products.sort((a, b) => a.name.localeCompare(b.name));
      case SortOptions.ALPHABETICAL_ZA:
        return products.sort((a, b) => b.name.localeCompare(a.name));
      case SortOptions.PRICE_LOW_HIGH:
        return products.sort((a, b) => a.price - b.price);
      case SortOptions.PRICE_HIGH_LOW:
        return products.sort((a, b) => b.price - a.price);
      default:
        return products;
    }
  };

  const sortedProducts = sortProducts([...filteredProducts]);

  // Sync category and sort option with URL params
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const categoryFromUrl = searchParams.get('category');
    const sortFromUrl = searchParams.get('sort');

    if (categoryFromUrl === 'Best-Seller' || categoryFromUrl === 'View-All') {
      setEnableBestSeller(true);
      setSelectedProductCategory('All Products');
      setIsBestSellerState(true);
      setFilters([]); // Clear filters to display all products
    } else if (categoryFromUrl) {
      setSelectedProductCategory(categoryFromUrl);
      setFilters([categoryFromUrl]);
    }

    if (sortFromUrl) {
      setSelectedSortOption(sortFromUrl);
    }
  }, [location.search, setFilters, setSelectedProductCategory]);

  return (
    <div className="relative pr-2 pl-2">
      <div className="!mt-10 text-[2.375rem] font-HeroNewBold font-extrabold plpPageTittle my-0 mx-[30px] py-0 lg:px-6 px-14 tm:px-6  xl:px-14 tm:mx-1">
        <PageTitleHeader className='!text-xs !leading-4 text-tertiary-400 font-HeroNewBold tm:text-[2.375rem] font-HeroNewExtraBold' breadcrumbs={breadcrumbs} />
      </div>
      <div className="tm:block flex gap-[23px] py-0 xl:px-14 mt-5 mb-32 tm:pl-6 tm:pr-6 tl:px-5">
        <div className="relative tm:px-0 pl-[18px] pr-[18px]">
          <PlpAccordians
            className='tm:w-full xl:px-[8px] tl:w-[250px] xl:w-[324px]  tm:h-[31px] tm:line[1px] tm:border-2 tm:border-[#2664eb] tm:rounded-none'
            filterData={filterData}
            onBestSellerChange={setIsBestSellerState} // Use the local state
            onCategorySelect={handleCategorySelect}
            onSortChange={handleSortChange}
            enableBestSeller={enableBestSeller}
          />
        </div>
        <div>
          <div className='relative flex items-baseline justify-between'>
            <FilterContainer
              filters={filters}
              onRemoveFilter={(filterToRemove) => setFilters(filters.filter((filter: string) => filter !== filterToRemove))}
              onClearAll={() => setFilters([])}
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

          <div className="productcard tm:py-[49px] grid grid-cols-1 sm:grid-cols-2 tl:grid-cols-3 gap-[23px]">
            {isBestSeller ? (
              sortedProducts.map((product) => (
                <Product key={`${product.id}-${product.name}`} product={product} modalSetToggle={() => dispatch(toggleLoginModel())} />
              ))
            ) : (
              sortedProducts.slice(0, productsToShow).map((product) => (
                <Product key={`${product.id}-${product.name}`} product={product} modalSetToggle={() => dispatch(toggleLoginModel())} />
              ))
            )}
          </div>

          {productsToShow < sortedProducts.length && !isBestSeller && (
            <div className="text-center mt-5">
              <ButtonWithText
                onClick={loadMoreProducts}
                className="px-4 py-2 min-w-[144px] hover:bg-black hover:text-white h-[47px] border-2 hover:underline border-blue-700 bg-white text-blue-500 text-base font-bold">
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
    </div>
  );
};

export default PlpPageTemplate;
