export interface ProductType {
    id: number;
    name: string;
    image: string;
    rating: number;
    isBestSeller: boolean;
    price?: number; 
    discription?: string;
  }
  

export interface ProductProps {
    product: ProductType;
    modalSetToggle: () => void;
    className?:string;
    openQuickView: (id: number) => void;
    showQuickView :boolean;
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
  