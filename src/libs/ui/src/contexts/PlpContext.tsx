import React, { createContext, useContext, useState, ReactNode, useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { viewAllProducts } from '@utils/test'; // Adjust this import as necessary
import { Plp_Constants } from '@utils/plpFilterData';

// Define the Product interface
interface Product {
  id: number;
  name: string;
  image: string;
  rating: number;
  isBestSeller: boolean;
  category: string;
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
  sortedProducts: Product[];
  sortProducts: (products: Product[]) => Product[];
  breadcrumbs: { label: string; href: string }[]; // Add breadcrumbs to the context
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
  const [enableBestSeller, setenableBestSeller] = useState<boolean>(false);

  const location = useLocation();

  // Update selectedProductCategory and filters based on URL changes
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
   
    const categoryParam = urlParams.get('category') || 'All Products' ;
    console.log(categoryParam, 'categoryParam')
    console.log('URL Parameters:', Array.from(urlParams.entries()));
    // Collect filter parameters excluding 'category'
    const filtersParam = Array.from(urlParams.entries()).filter(([key]) => key !== 'category' || true);
    console.log('filtersParam', filtersParam);
    const allFilters = filtersParam.map(([, value]) => value);

    setSelectedProductCategory(categoryParam);
    console.log('Selected Category:', categoryParam);
    setFilters(allFilters);


    if (selectedProductCategory === 'All Products' || selectedProductCategory === 'Best Seller') {
      setenableBestSeller(true);
      setFilters(allFilters);
    } else if (selectedProductCategory != 'All Products') {
      setenableBestSeller(false)
    }


  }, [location, selectedProductCategory]);



  // Define breadcrumbs using useMemo
  const breadcrumbs = useMemo(() => [
    { label: 'Home', href: '/' },
    { label: 'All Products', href: '/products' },
    ...(selectedProductCategory && selectedProductCategory !== Plp_Constants.AllProducts ? [{ label: selectedProductCategory, href: '#' }] : []),
  ], [selectedProductCategory, filters]);

  // Filter products based on selected category, best seller, and filters
  const filteredProducts = useMemo(() => {
    console.log('Filtering products...');  // Debugging log
    console.log('Category:', selectedProductCategory);  // Log category
    return viewAllProducts.filter(product => {
      const matchesCategory = selectedProductCategory === 'All Products' || selectedProductCategory === Plp_Constants.bestSeller || product.category === selectedProductCategory || filters.includes(product.category);
      const matchesBestSeller = isBestSeller ? product.isBestSeller : true;
      const matchesFilters = filters.length === 0 || filters.includes(product.category);

      return matchesCategory && matchesBestSeller && matchesFilters;
    }) as Product[];
  }, [selectedProductCategory, isBestSeller, filters]);


  const loadMoreProducts = () => setProductsToShow(prev => prev + 9);

  // Sort products based on selected sort option
  const sortProducts = (products: Product[]) => {
    const sorted = [...products];
    switch (selectedSortOption) {
    case 'Alphabetical A - Z':
      sorted.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'Alphabetical Z - A':
      sorted.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case 'Price Low - High':
      sorted.sort((a, b) => a.price - b.price);
      break;
    case 'Price High - Low':
      sorted.sort((a, b) => b.price - a.price);
      break;
    default:
      break;
    }
    return sorted;
  };

  const sortedProducts = useMemo(() => sortProducts(filteredProducts), [filteredProducts, selectedSortOption]);

  return (
    <ProductContext.Provider value={{
      selectedProductCategory,
      setSelectedProductCategory,
      isBestSeller,
      setIsBestSeller,
      filters,
      setFilters,
      filteredProducts: sortedProducts,
      productsToShow,
      loadMoreProducts,
      selectedSortOption,
      setSelectedSortOption,
      sortProducts,
      sortedProducts,
      breadcrumbs,
      enableBestSeller// Pass breadcrumbs into the context
    }}>
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
