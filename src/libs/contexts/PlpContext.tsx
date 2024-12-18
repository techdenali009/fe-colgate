import React, { createContext, useContext, useState, ReactNode, useMemo, useEffect, } from 'react';
import { useLocation } from 'react-router-dom';
import { useLazyGetProductsQuery } from '@store/services/Endpoints/PlpProductsEndPoint';
import { getSortOption } from '@utils/appFunctions';

// Define the Product interface
interface Product {
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

// Define the context interface
interface ProductContextType {
  selectedProductCategory: string;
  setSelectedProductCategory: (category: string) => void;
  isBestSeller: boolean;
  setIsBestSeller: (checked: boolean) => void;
  filters: string[];
  setFilters: (filters: string[]) => void;
  filteredProducts: Product[];
  loadMoreProducts: () => void;
  selectedSortOption: string;
  setSelectedSortOption: (option: string) => void;
  breadcrumbs: { label: string; href: string }[];
  enableBestSeller: boolean;
  hasMore: boolean;
  totalProducts: number;
  isLoading: boolean;
  isProductLoading: boolean;
  
}

// Create the context
const ProductContext = createContext<ProductContextType | undefined>(undefined);

// Create a provider component
export const ProductProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedProductCategory, setSelectedProductCategory] =
    useState<string>('All Products');
  const [isBestSeller, setIsBestSeller] = useState<boolean>(false);
  const [filters, setFilters] = useState<string[]>([]);
  const [selectedSortOption, setSelectedSortOption] = useState<string>('Alphabetical A - Z');
  const [enableBestSeller, setEnableBestSeller] = useState<boolean>(false);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [totalProducts, setTotalProducts] = useState(0);
  const location = useLocation();
  const [isProductLoading, setProductLoading] = useState<boolean>(true);
  const [triggerGetProducts, { isLoading }] = useLazyGetProductsQuery();

  const loadMoreProducts = () => {
    // Save the current scroll position

    setPage((prev) => prev + 1);


  };


  // Define breadcrumbs
  const breadcrumbs = useMemo(
    () => [
      { label: 'Home', href: '/' },
      { label: 'All Products', href: '/products' },
      ...(selectedProductCategory !== 'All Products'
        ? [{ label: selectedProductCategory, href: '#' }]
        : []),
    ],
    [selectedProductCategory]
  );

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const categoryParam = urlParams.get('category') || 'All Products';
    const filtersParam = Array.from(urlParams.entries()).filter(
      ([key]) => key !== 'category'
    );
    const allFilters = filtersParam.map(([, value]) => value);

    setSelectedProductCategory(categoryParam);
    setFilters(allFilters);

    setEnableBestSeller(
      categoryParam === 'All Products' || categoryParam === 'Best Seller'
    );

    // Reset products and page on category/filter change
    setAllProducts([]);
    setPage(1);
  }, [location, selectedSortOption]);

  const allFilters = useMemo(() => {
    const urlParams = new URLSearchParams(location.search);
    const filtersParam = Array.from(urlParams.entries());
    const sortBy = getSortOption(selectedSortOption);
    const queryString = filtersParam
      .map(([key, value]) => `${key}=${value}`)
      .join('&');
    return `${queryString}&sortBy=${sortBy}&page=${page}&limit=9`;
  }, [filters, selectedSortOption, page, location.search]);


  useEffect(() => {
    const getProducts = async () => {
      try {
        setProductLoading(true);

        // Fetch products from API
        const productsData = await triggerGetProducts(allFilters).unwrap();
        if (productsData) {
          const { products, hasMore, totalCount } = productsData;

          // Append products for "Load More", replace on new filter/sort
          setAllProducts((prev) => (page === 1 ? products : [...prev, ...products]));

          setHasMore(hasMore);
          setTotalProducts(totalCount);
        }
      } catch (err) {
        console.error('Error fetching products:', err);
      } finally {
        setProductLoading(false);
      }
    };

    getProducts();
  }, [allFilters, page, triggerGetProducts]);



  return (
    <ProductContext.Provider
      value={{
        selectedProductCategory,
        setSelectedProductCategory,
        isBestSeller,
        setIsBestSeller,
        filters,
        setFilters,
        filteredProducts: allProducts,
        loadMoreProducts,
        selectedSortOption,
        setSelectedSortOption,
        breadcrumbs,
        enableBestSeller,
        hasMore,
        totalProducts,
        isLoading,
        isProductLoading,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook for using the ProductContext
export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }
  return context;
};
