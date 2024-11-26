import React, { createContext, useContext, useState, ReactNode, useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// Adjust the import as necessary
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
  hasMore:boolean;
  totalProducts:number;

}

// Create the context
const ProductContext = createContext<ProductContextType | undefined>(undefined);

// Create a provider component
export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedProductCategory, setSelectedProductCategory] = useState<string>('All Products');
  const [isBestSeller, setIsBestSeller] = useState<boolean>(false);
  const [filters, setFilters] = useState<string[]>([]);
  const [selectedSortOption, setSelectedSortOption] = useState<string>('Alphabetical A - Z');
  const [enableBestSeller, setEnableBestSeller] = useState<boolean>(false);
  const [allProducts, SetAllProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [totalProducts, SettotalProducts] = useState(0);
  const location = useLocation();

  // Trigger the lazy query to fetch products
  const [triggerGetProducts, { isLoading, error }] = useLazyGetProductsQuery();

  

  const loadMoreProducts = () => {
    setPage(page+1)
  };

  // Define breadcrumbs
  const breadcrumbs = useMemo(() => [
    { label: 'Home', href: '/' },
    { label: 'All Products', href: '/products' },
    ...(selectedProductCategory !== 'All Products'
      ? [{ label: selectedProductCategory, href: '#' }]
      : []),
  ], [selectedProductCategory]);



  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const categoryParam = urlParams.get('category') || 'All Products';
    const filtersParam = Array.from(urlParams.entries()).filter(([key]) => key !== 'category');
    const allFilters = filtersParam.map(([, value]) => value);
    console.log('filtersParam', filtersParam)
    setSelectedProductCategory(categoryParam);
    setFilters(allFilters);

    if (categoryParam === 'All Products' || categoryParam === 'Best Seller') {
      setEnableBestSeller(true);
    } else {
      setEnableBestSeller(false);
    }
    SetAllProducts([])
  }, [location]);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);

    const filtersParam = Array.from(urlParams.entries());

    const sortBy = getSortOption(selectedSortOption)

    let allFilters = filtersParam.reduce((acc, curr) => {
      const hasValue = !!acc;
      const queryString = `${hasValue ? '&' : ''}${curr[0]}=${curr[1]}`
      return `${acc}${queryString}`;
    }, '');
    allFilters = `${allFilters}&sortBy=${sortBy}&page=${page}&limit=10`;

    const getProducts = async () => {
      try {
        const productsData = await triggerGetProducts(allFilters).unwrap();
        const { products, hasMore , totalCount} = productsData;
        console.log('products', products);
        SetAllProducts([...allProducts, ...products]);
        setHasMore(hasMore);
        SettotalProducts(totalCount)
      } catch (err) {
        console.log('err',err);
      }
    }
    getProducts();
  }, [filters, selectedSortOption, page])



  return (
    <ProductContext.Provider value={{
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
      totalProducts
    }}>
      {isLoading ? <div>Loading...</div> : error ? <div>Error loading products</div> : children}
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
