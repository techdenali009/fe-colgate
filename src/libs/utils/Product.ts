
export interface ProductType {
  id: string;
  image: string;
  name: string;
  isBestSeller: boolean;
  rating: number;
}

export interface ProductProps {

    product: ProductType;
  }
  
  export interface PopularProductsProps {
    products: ProductType[];
  }