import { ButtonWithText } from '@ui/molecules/ButtonWithText';
import { FilterContainer } from '@ui/molecules/FilterContainer';
import FilterDropdown from '@ui/molecules/FilterDropdown/FilterDropdown';
import PageTitleHeader from '@ui/molecules/PageTitleHeader';
import PlpAccordians from '@ui/molecules/PlpAccordians';
import Product from '@ui/organisms/Product';
import { useMemo, useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { toggleLoginModel } from '@store/services/Slices/ModalSlice';
import { useNavigate, useLocation } from 'react-router-dom';
import { Plp_Constants, plpFilters, SortOptions } from '@utils/plpFilterData';
import { useProductContext } from 'src/libs/contexts/PlpContext';


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
    productsToShow,   // Get productsToShow from context
    loadMoreProducts,
    selectedSortOption,
    setSelectedSortOption,
    sortProducts,

  } = useProductContext();

 
  const [,setIsBestSellerState] = useState<boolean>(false);
  const [enableBestSeller, setEnableBestSeller] = useState<boolean>(false);



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

    // Set selected category to show multiple products within it
    const updatedFilters = filters.includes(newCategory)
      ? filters.filter(filter => filter !== newCategory)  // Remove if it's already in filters
      : [...filters, newCategory];  // Add if not already in filters

    setFilters(updatedFilters);  // Update filters

    // Ensure product filtering happens right after filters update
    useEffect(() => {

    }, [filters]);

    // Update category and reset best seller state
    setSelectedProductCategory(newCategory);  // Update selected category
    setIsBestSellerState(false);

    const searchParams = new URLSearchParams(location.search);
    searchParams.set('category', newCategory);
    navigate({ search: searchParams.toString() });
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


  const sortedProducts = useMemo(() => sortProducts([...filteredProducts]), [filteredProducts, selectedSortOption]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const categoryFromUrl = searchParams.get('category');
    const sortFromUrl = searchParams.get('sort');

    // Check if the category needs to be updated
    if (categoryFromUrl === Plp_Constants.bestSeller || categoryFromUrl === Plp_Constants.viewAll || categoryFromUrl === Plp_Constants.AllProducts) {
      if (!enableBestSeller) {
        setEnableBestSeller(true);
        setSelectedProductCategory(Plp_Constants.AllProducts);
        setIsBestSellerState(true);
        setFilters([]);
      }
    } else if (categoryFromUrl) {
      if (selectedProductCategory !== categoryFromUrl) {
        setSelectedProductCategory(categoryFromUrl);
        setFilters([categoryFromUrl]);
        setEnableBestSeller(false);
      }
    }

    // Only update the sort option if it has changed
    if (sortFromUrl && selectedSortOption !== sortFromUrl) {
      setSelectedSortOption(sortFromUrl);

    }
  }, [location.search, enableBestSeller, selectedProductCategory, selectedSortOption]);

  return (
    <div className="relative pr-2 pl-2">
      <div className="!mt-10 text-[2.375rem] font-HeroNewBold font-extrabold plpPageTittle my-0 mx-[30px] py-0 lg:px-6 px-14 tm:px-6  xl:px-14 tm:mx-1">
        <PageTitleHeader className='!text-xs !leading-4 text-tertiary-400 font-HeroNewBold tm:text-[2.375rem]' breadcrumbs={breadcrumbs} />
      </div>
      <div className="tm:block flex gap-[23px] py-0 xl:px-14 mt-5 mb-32 tm:pl-6 tm:pr-6 tl:px-5">
        <div className="relative tm:px-0 pl-[18px] pr-[18px]">
          <PlpAccordians
            className='tm:w-full xl:px-[8px] tl:w-[250px] xl:w-[324px]  tm:h-[31px] tm:line[1px] tm:border-2 tm:border-appTheme tm:rounded-none'

            onBestSellerChange={setIsBestSellerState}
            onCategorySelect={handleCategorySelect}
            onSortChange={handleSortChange}
            enableBestSeller={enableBestSeller} currentProductCategory={selectedProductCategory} onproduct={''} />
        </div>
        <div className='w-full'>
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

          <div className="productcard tm:py-[49px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[23px]">
            {sortedProducts
              .slice(0, productsToShow)  // Show products based on the productsToShow value
              .map((product) => (
                <Product
                  key={`${product.id}-${product.name}`}
                  product={product}
                  modalSetToggle={() => dispatch(toggleLoginModel())}
                  openQuickView={() => console.log('')}
                  showQuickView={false}
                />
              ))}

          </div>

          {productsToShow < sortedProducts.length && (  // Only show "Load More" 
            <div className="text-center mt-5">
              <ButtonWithText
                onClick={loadMoreProducts}
                className="px-4 py-2 min-w-[144px] hover:bg-black hover:text-white h-[47px] border-2 hover:underline border-appTheme bg-white text-appTheme text-base font-bold">
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
