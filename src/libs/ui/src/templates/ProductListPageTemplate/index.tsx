import { ButtonWithText } from '@ui/molecules/ButtonWithText';
import { PlpFilterContainer } from '@ui/molecules/PlpFilterContainer';
import FilterDropdown from '@ui/molecules/FilterDropdown/FilterDropdown';
import PageTitleHeader from '@ui/molecules/PageTitleHeader';
import PlpAccordians from '@ui/molecules/PlpAccordians';
import Product from '@ui/organisms/Product';
import { useState } from 'react';

import { ProductType } from '@utils/Product';

import QuickViewModal from '@ui/organisms/QuickView';
import { RootState } from '@store/store';
import PopularProductSkeleton from '@ui/molecules/PopularProductSkeleton';
import RecentlyViewedProducts from '@ui/organisms/RecentlyViewedProducts';
import { RecentProduct as products } from '@utils/test';
import LoginModal from '@ui/organisms/LoginModal';

import { useProductContext } from 'src/libs/ui/src/contexts/PlpContext';
import { toggleLoginModel } from '@store/services/Slices/ModalSlice';
import {  SortOptions } from '@utils/plpFilterData';
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
    setSelectedSortOption,
    breadcrumbs,
    enableBestSeller,
    // eslint-disable-next-line no-empty-pattern
    sortedProducts: [] } = useProductContext();

  
  const [, setIsBestSellerState] = useState<boolean>(false);
  const [QuickViewModalOpen, setQuickViewModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);
  const userInfo = useSelector((state: RootState) => state.authSlice.userInfo);

  const isLoggedIn = Boolean(userInfo);
  // Close the QuickView modal
  const closeQuickViewModal = () => setQuickViewModalOpen(false);
  const [toggle, SetToggle] = useState(false);
  // Update URL params when a category is selected

  const handleCategorySelect = (category: string | null) => {
    const newCategory = category ?? 'All Products';
    const searchParams = new URLSearchParams(location.search);


    const categoryGroups = {
      'skin-type': ['Dry', 'Normal', 'Combination', 'Sensitive', 'Oily'],
      'skin-concern': ['Brightening', 'Acne', 'Aging', 'Discolorations'],
      'product-type': ['Backbar', 'Retail', 'Sample']
    };

    // Find which category group the new category belongs to
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

    navigate({ search: searchParams.toString() });
    setSelectedProductCategory(newCategory);
    if (newCategory === 'All Products') {

      // Redirect to /products if "All Products" is selected
      navigate('/products');
    }
  };



  // Handle sorting options change
  const handleSortChange = (option: string) => {
    setSelectedSortOption(option);
  };

  // Open the Quick View modal with a selected product
  const openQuickReviewModal = async (id: number) => {
    // Find the product by ID
    const product = filteredProducts.find(p => p.id === id);

    // Ensure the product exists and set it only if it's a new product
    if (product && selectedProduct?.id !== product.id) {
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
            <PlpFilterContainer
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
            {filteredProducts
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

          {productsToShow < filteredProducts.length && (
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
              ? `Viewing ${Math.min(productsToShow, filteredProducts.length)} out of ${filteredProducts.length} products`
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
        />
      )}
    </div>
  );
};

export default PlpPageTemplate;
