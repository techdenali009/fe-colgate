export interface ProductType {
    id: number;
    name: string;
    image: string;
    rating: number;
    isBestSeller: boolean;
  }
  

export interface ProductProps {
    product: ProductType;
  }

  export interface PopularProductsProps {
    products: ProductType[];
  }
export interface ProductHeaderProps {
    handleScroll: (direction: "left" | "right") => void;
  }
  