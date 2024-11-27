export interface ProductType {
    id: string | number;
    name: string;
    image: string;
    rating: number;
    isBestSeller: boolean;
    price?: number; 
    discription?: string;
    features?: string[];
    reviews?: { stars: number; count: number }[];
    restrictedmessage?:string;
  }
  

export interface ProductDetailsContentProps {
  id: string ;
  name: string ;
  images: string[];
  description: string;
  features: string[];
  rating: number;
  reviews: { stars: number; count: number }[];
  restrictedmessage:string;
}

export interface ProductProps {
  product: ProductType;
  modalSetToggle: () => void;
  className?:string;
  openQuickView: (id: number) => void;
  showQuickView :boolean;
  footerContent?: React.ReactNode,
  isFav?:boolean
}

export interface RelatedProductsProps{
  relatedProducts: ProductType[];
  className:string
}

export interface PopularProductsProps {
  products: ProductType[];
  modalSetToggle: () => void;
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
