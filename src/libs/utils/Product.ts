import { UserInfo } from "@store/services/Slices/authSlice";

export interface ProductType {
  id: string | undefined;
  name: string;
  image: string;
  images?: {url:string}[];
  rating: number;
  isBestSeller: boolean;
  description?: string;  
  features?: string[];
  reviews?: { stars: number; count: number }[];
  restrictedmessage?:string;
}
  

export interface ProductDetailsContentProps {
  id: string | undefined  ;
  name: string ;
  images: string[];
  description: string;
  features: string[];
  rating: number;
  reviews: { stars: number; count: number }[];
  restrictedmessage:string;
}

export interface ProductProps {
  id: string | undefined   ;
  name: string;
  images: string;
  isBestSeller: boolean;
  rating: number;
  modalSetToggle: () => void;
  className?:string;
  openQuickView: (id: string | undefined) => void;
  showQuickView :boolean;
  footerContent?: React.ReactNode
  isLoggedIn ?:  UserInfo | null ;
  
}

export interface RelatedProductsProps{
  relatedProducts: ProductType[];
  className:string
}
export interface PopularProductsProps {
  products: {
   
    data: {
     
      products: ProductType[];
    };
  };
  modalSetToggle: () => void;
 
  onNextPage: () => void;
  hasMore: boolean;
 
}
 export interface RecentlyViewedProductsProps{
  products: ProductType[]; // Array of product objects
  modalSetToggle: () => void; // Function to toggle the modal
 }
export interface ProductHeaderProps {
  handleScroll: (direction: 'left' | 'right') => void;
  headingLabel: string; // For the heading text
  description: string;  // For the label text
  LogInButtonDisable:boolean
  modalSetToggle: () => void;
  disableLeftButton:boolean
  disableRightButton:boolean
  className:string
}
