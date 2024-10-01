import { ProductDetailsPage } from '@ui/templates/ProductDetailsPage';

export default function PDPage() {
  return <ProductDetailsPage submitLabel={''} onSubmit={function (): void {
    throw new Error('Function not implemented.');
  }} />
}