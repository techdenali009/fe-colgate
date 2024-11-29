// Define interfaces for the product structure
export interface ProductImage {
    url: string;
    altText: string;
    _id: string;
  }
  
  export interface ProductCategory {
    name: string;
    description: string;
  }
  
  export interface ProductSubCategory {
    name: string;
    description: string;
  }
  
  export interface Product {
    _id: string;
    name: string;
    description: string;
    category: ProductCategory;
    price: number;
    discount: number;
    stock: number;
    images: ProductImage[];
    subCategories?: ProductSubCategory[];
    dailCare?: string[];
    bySkinType?: string[];
    bySkinConcern?: string[];
    productType?: string;
    isPopular?: boolean;
  }
  
  export interface ProductResponse {
    status: string;
    message: string;
    data: {
      products: Product[];
      totalCount: number;
      hasMore: boolean;
      currentPage: number;
      totalPages: number;
    };
  }