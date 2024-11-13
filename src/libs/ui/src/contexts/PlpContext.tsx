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
  price:number;
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
}

// Create the context
const ProductContext = createContext<ProductContextType | undefined>(undefined);

// Create a provider component
export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedProductCategory, setSelectedProductCategory] = useState<string>('All Products');
  const [isBestSeller, setIsBestSeller] = useState<boolean>(false);
  const [filters, setFilters] = useState<string[]>([]);

  // Calculate filtered products based on context values
  const filteredProducts = useMemo(() => {
    return viewAllProducts.filter(product => {
      const matchesCategory = selectedProductCategory === 'All Products' || product.category === selectedProductCategory;
      const matchesBestSeller = !isBestSeller || product.isBestSeller;
      return matchesCategory && matchesBestSeller;
    });
  }, [selectedProductCategory, isBestSeller]);

  return (
    <ProductContext.Provider value={{
      selectedProductCategory,
      setSelectedProductCategory,
      isBestSeller,
      setIsBestSeller,
      filters,
      setFilters,
      filteredProducts, // Include filteredProducts in context
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
