import ProductDetailsContent from '@ui/organisms/ProductDetailsContent';
import ProductDetails from '@ui/molecules/ProductDetails';
import { MarketingBannerTwo } from '@ui/organisms/MarketingBannerTwo';
import RelatedProducts from '@ui/organisms/RelatedProducts';
import { marketingBannerTwo } from '@utils/banner';
import { products, relatedProducts } from '@utils/test';
import { useParams } from 'react-router-dom';
import './ProductDetailsPage.styles.scss';
import { ProductDetailsContentProps } from '@utils/Product';
import PageTitleHeader from '@ui/molecules/PageTitleHeader';
import ProductDetailsContentSkeleton from '@ui/molecules/ProductDetailsContentSkeleton';
import { useEffect, useState } from 'react';
import { ReviewProvider } from '@ui/molecules/ReviewUseContext';
import ReviewSection from '@ui/organisms/ReviewSection';

interface PDPage {
  submitLabel: string;
  onSubmit: (value: string) => void;
}
export const ProductDetailsPage: React.FC<PDPage> = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductDetailsContentProps | null>(null);
  const [isLoading, setIsLoading] = useState(true); // Added loading state
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const product = products.find((item) => item.id === Number(id)); 
    if (product) {
      const productDetails: ProductDetailsContentProps = {
        id: String(product.id), 
        name: product.name,
        images: product.images,
        description: product.description,
        features: product.features,
        rating: product.rating,
        reviews: product.reviews,
        restrictedmessage: product.restrictedmessage,
      };
      setSelectedProduct(productDetails);
    }
    
    // Simulate loading delay of 3 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, [id]);

  // Breadcrumbs array, updated dynamically based on the selected product
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'All Products', href: '/products' },
    { label: selectedProduct?.name || '' } // Current product name
  ];

  return (
    <>
      <div className="Product-detailspage">

        <div className='bread-crumbs pt-[40px] px-[50px]'>
          <PageTitleHeader breadcrumbs={breadcrumbs} showTitle={false} />
        </div>

        {isLoading ? (
          // Show skeleton loader while loading
          <ProductDetailsContentSkeleton />
        ) : selectedProduct ? (
          <ProductDetailsContent
            id={selectedProduct.id}
            name={selectedProduct.name}
            images={selectedProduct.images}
            description={selectedProduct.description}
            features={selectedProduct.features}
            rating={selectedProduct.rating}
            reviews={selectedProduct.reviews}
            restrictedmessage={selectedProduct.restrictedmessage}
          />
        ) : (
          <div>Loading...</div>
        )}
        <div className={'w-full bg-lightGray '}>
          <div className='xl:!px-[96px] md:!px-[56px] '>
            <ProductDetails></ProductDetails>
          </div>
          <div className={'w-full  xl:!px-[96px] md:!px-[50px] 2xs:px-[24px]  !m-0'}>
            <RelatedProducts relatedProducts={relatedProducts} className={'xl:!px-[5rem]'} />
          </div>
          <div className='pt-[7.5rem] lg:px-4 !w-full xl:!px-[96px] '>
            <MarketingBannerTwo bannerData={marketingBannerTwo[0]} />
          </div>
         
        </div>
      </div>
      <div>

        <ReviewProvider>
          <ReviewSection ></ReviewSection>
        </ReviewProvider>
      
      </div>
    </>
  );
};
