import React, { createContext, useContext, useState, ReactNode, useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// Adjust the import as necessary
import { useLazyGetProductsQuery } from '@store/services/Endpoints/PlpProductsEndPoint';
import { SortOptions } from '@utils/plpFilterData';
import { getSortOption } from '@utils/appFunctions';

// Define the Product interface
interface Product {
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
  productsToShow: number;
  loadMoreProducts: () => void;
  selectedSortOption: string;
  setSelectedSortOption: (option: string) => void;
  // sortedProducts: Product[];
  // sortProducts: (products: Product[]) => Product[];
  breadcrumbs: { label: string; href: string }[];
  enableBestSeller: boolean;
}

// Create the context
const ProductContext = createContext<ProductContextType | undefined>(undefined);

// Create a provider component
export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedProductCategory, setSelectedProductCategory] = useState<string>('All Products');
  const [isBestSeller, setIsBestSeller] = useState<boolean>(false);
  const [filters, setFilters] = useState<string[]>([]);
  const [selectedSortOption, setSelectedSortOption] = useState<string>('Alphabetical A - Z');
  const [productsToShow, setProductsToShow] = useState<number>(9);
  const [enableBestSeller, setEnableBestSeller] = useState<boolean>(false);
  const [allProducts, SetAllProducts] = useState<Product[]>([]);
  const location = useLocation();

  // Trigger the lazy query to fetch products
  const [triggerGetProducts, { data, isLoading, error }] = useLazyGetProductsQuery();

  // Map the fetched data to the product structure
  // const products = useMemo(() => {
  //   if (!data) return [];
  //   return data.data.products.map((product: any) => ({
  //     id: product._id,
  //     name: product.name,
  //     image: product.images[0]?.url || '',
  //     category: product.category.name,
  //     price: product.price,
  //     isBestSeller: false, // Adjust if needed
  //   }));
  // }, [data]);

  // Update selectedProductCategory and filters based on URL changes

  const loadMoreProducts = () => setProductsToShow(prev => prev + 9);

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

    // Trigger the product fetch when category or filters change
    // triggerGetProducts({ category: categoryParam, filters: allFilters });
  }, [location]);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);

    const filtersParam = Array.from(urlParams.entries());

    // console.log('filters Test' ,allFilters)
    const sortBy = getSortOption(selectedSortOption)

    let allFilters = filtersParam.reduce((acc, curr) => {
      const hasValue = !!acc;
      let queryString = `${hasValue ? '&' : ''}${curr[0]}=${curr[1]}`
      return `${acc}${queryString}`;
    }, '');
    allFilters = `${allFilters}&sortBy=${sortBy}`;
    // &sortBy=${sortBy}
    console.log('filters Test curr allFilters', allFilters)
    const getProducts = async () => {
      try {
        const productsData = await triggerGetProducts(allFilters).unwrap();
        const { products } = productsData;
        console.log('products', products);
        SetAllProducts(products);
      } catch (err) {
        console.log('err')
      }
    }
    getProducts();
  }, [filters, selectedSortOption])

  // Filter products based on category, best seller, and filters
  // const filteredProducts = useMemo(() => {
  //   if (!products) return [];
  //   return products.filter((product: { category: string; }) => {
  //     const matchesCategory = selectedProductCategory === 'All Products' || product.category === selectedProductCategory;
  //     const matchesFilters = filters.length === 0 || filters.includes(product.category);
  //     return matchesCategory && matchesFilters;
  //   });
  // }, [filters]);



  // Sort products based on selected sort option
  // const sortProducts = (products: Product[]) => {
  //   const sorted = [...products];
  //   switch (selectedSortOption) {
  //     case 'Alphabetical A - Z':
  //       sorted.sort((a, b) => a.name.localeCompare(b.name));
  //       break;
  //     case 'Alphabetical Z - A':
  //       sorted.sort((a, b) => b.name.localeCompare(a.name));
  //       break;
  //     case 'Price Low - High':
  //       sorted.sort((a, b) => a.price - b.price);
  //       break;
  //     case 'Price High - Low':
  //       sorted.sort((a, b) => b.price - a.price);
  //       break;
  //     default:
  //       break;
  //   }
  //   return sorted;
  // };

  // const sortedProducts = useMemo(() => sortProducts(filteredProducts), [filteredProducts, selectedSortOption]);

  return (
    <ProductContext.Provider value={{
      selectedProductCategory,
      setSelectedProductCategory,
      isBestSeller,
      setIsBestSeller,
      filters,
      setFilters,
      filteredProducts: allProducts,
      productsToShow,
      loadMoreProducts,
      selectedSortOption,
      setSelectedSortOption,
      breadcrumbs,
      enableBestSeller,
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
