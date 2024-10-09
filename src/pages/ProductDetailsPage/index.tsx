import { ProductDetailsPage } from '@ui/templates/ProductDetailsPage';
import { Reviewproducts } from '@utils/test';

const selectedProductName = 'Sensi Peel®'; // Example of selected product, adjust this as necessary.

export default function PDPage() {
  
  // Filter reviews for the selected product
  const productReviews = Reviewproducts.filter(
    (review) => review.productName === selectedProductName
  ); 

  return <ProductDetailsPage submitLabel={''} onSubmit={function (): void {
    throw new Error('Function not implemented.');
  }}  productReviews={productReviews}  />
}