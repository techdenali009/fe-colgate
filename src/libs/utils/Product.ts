export interface ProductType {
    id: number;
    name: string;
    image: string;
    rating: number;
    isBestSeller: boolean;
  }
  

export interface ProductProps {
    product: ProductType;
    modalSetToggle: () => void;
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
  }
  