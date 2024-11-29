import { useLazyGetProductByIdQuery } from '@store/services/Endpoints/PlpProductsEndPoint';
import ProductEditSkeleton from '@ui/molecules/ProductEditSkeleton';
import ProductEdit from '@ui/organisms/ProductEdit';
import { Product } from '@ui/organisms/ProductEdit'; // Assuming the Product interface is exported
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EditProductTemplate: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [fetchProduct, { data, isLoading, isError, error }] = useLazyGetProductByIdQuery();

  useEffect(() => {
    if (id) {
      fetchProduct(id);
    }
  }, [id, fetchProduct]);

  // Type guard to ensure data matches Product interface
  const isProduct = (obj: any): obj is Product => {
    return (
      obj &&
      typeof obj._id === 'string' &&
      typeof obj.name === 'string' &&
      typeof obj.description === 'string' &&
      typeof obj.category === 'string' &&
      typeof obj.price === 'number' &&
      typeof obj.discount === 'number' &&
      typeof obj.stock === 'number' &&
      Array.isArray(obj.images)
    );
  };

  // Handle loading state
  if (isLoading) return <ProductEditSkeleton></ProductEditSkeleton>;

  // Handle error state
  if (isError) {
    console.error('Error fetching product:', error);
    return <div>Error loading product.</div>;
  }

  // Handle case where product data is not found or doesn't match Product type
  if (!data || !isProduct(data)) {
    return <div>No valid product found.</div>;
  }

  return (
    <div>
      <ProductEdit product={data} />
    </div>
  );
};

export default EditProductTemplate;
