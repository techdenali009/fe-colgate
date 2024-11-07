import React, { createContext, useContext, useState, ReactNode, useMemo } from 'react';
import { viewAllProducts } from '@utils/test'; // Adjust the import as necessary

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
    filteredProducts: Product[]; // Expose filteredProducts here

    productsToShow: number;  // Add productsToShow
    loadMoreProducts: () => void;  // Add loadMoreProducts
    selectedSortOption: string; // Add the sort option state here
    setSelectedSortOption: (option: string) => void; // Provide setter function
    sortProducts: (products: Product[]) => Product[];


}

// Create the context
const ProductContext = createContext<ProductContextType | undefined>(undefined);

// Create a provider component
export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedProductCategory, setSelectedProductCategory] = useState<string>('All Products');
  const [isBestSeller, setIsBestSeller] = useState<boolean>(false);
  const [filters, setFilters] = useState<string[]>([]);
  const [selectedSortOption, setSelectedSortOption] = useState<string>('Alphabetical Z - A');
  const [productsToShow, setProductsToShow] = useState<number>(9);


  const loadMoreProducts = () => setProductsToShow(prev => prev + 9);
  // Calculate filtered products based on context values
  const filteredProducts = useMemo(() => {
    return viewAllProducts.filter(product => {
      const matchesCategory = selectedProductCategory === 'All Products' || product.category === selectedProductCategory;
      const matchesBestSeller = !isBestSeller || product.isBestSeller;

      // Ensure that we are only returning products with a rating
      return (matchesCategory && matchesBestSeller && typeof product.rating === 'number') || filters.includes(product.category);
    }) as Product[]; // Assert the type here
  }, [selectedProductCategory, isBestSeller, filters]);

  const sortProducts = (products: Product[]) => {
    switch (selectedSortOption) {
    case 'Alphabetical A - Z':
      return products.sort((a, b) => a.name.localeCompare(b.name));
    case 'Alphabetical Z - A':
      return products.sort((a, b) => b.name.localeCompare(a.name));
    case 'Price Low - High':
      return products.sort((a, b) => a.price - b.price);
    case 'Price High - Low':
      return products.sort((a, b) => b.price - a.price);
    default:
      return products;
    }
  };
  return (
    <ProductContext.Provider value={{
      selectedProductCategory,
      setSelectedProductCategory,
      isBestSeller,
      setIsBestSeller,
      filters,
      setFilters,
      filteredProducts,
      productsToShow,
      loadMoreProducts,// Include filteredProducts in context
      selectedSortOption,
      setSelectedSortOption,
      sortProducts, // Provide the sort function to the context
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
