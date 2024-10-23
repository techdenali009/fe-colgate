export interface ProductType {
    id: number;
    name: string;
    image: string;
    rating: number;
    isBestSeller: boolean;
    price?: number; 
  }
  

export interface ProductProps {
    product: ProductType;
    modalSetToggle: () => void;
    className?:string;
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
  className:string
  }
  