import ProductDetailsContent from '@ui/organisms/ProductDetailsContent';
import ProductDetails from '@ui/molecules/ProductDetails';
import { MarketingBannerTwo } from '@ui/organisms/MarketingBannerTwo';

import { marketingBannerTwo } from '@utils/banner';

import { useParams } from 'react-router-dom';
import './ProductDetailsPage.styles.scss';
import PageTitleHeader from '@ui/molecules/PageTitleHeader';
import ProductDetailsContentSkeleton from '@ui/molecules/ProductDetailsContentSkeleton';
import { useEffect } from 'react';
import { ReviewProvider } from '@ui/molecules/ReviewUseContext';
import ReviewSection from '@ui/organisms/ReviewSection';
import { useDispatch } from 'react-redux';
import { addVisitedProduct } from '@store/services/Slices/visitedProductsSlice';
import { useLazyGetProductByIdQuery } from '@store/services/Endpoints/PlpProductsEndPoint';

interface PDPage {
  submitLabel: string;
  onSubmit: (value: string) => void;
}
export const ProductDetailsPage: React.FC<PDPage> = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const [trigger, { data: product, isLoading }] = useLazyGetProductByIdQuery();
  useEffect(() => {
    if (id) {
      dispatch(addVisitedProduct(id));
      trigger(id); // Fetch product data on demand
    }
  }, [id, trigger, dispatch]);

  // Breadcrumbs array, updated dynamically based on the selected product
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'All Products', href: '/products' },
    { label: product?.name || '' }, // Current product name
  ];
  console.log('product', product);
  return (
    <>
      <div className='Product-detailspage'>
        <div className='bread-crumbs pt-[40px] px-[50px]'>
          <PageTitleHeader breadcrumbs={breadcrumbs} showTitle={false} />
        </div>

        {isLoading ? (
          // Show skeleton loader while loading
          <ProductDetailsContentSkeleton />
        ) : product ? (
          <ProductDetailsContent
            id={product?._id}
            name={product?.name ?? 'Unknown Product'}
            images={product.images}
            description={product?.description ?? 'No description available'}
            features={product.features ?? 'No description available'}
            rating={product?.averageRating}
            reviews={product.reviews ?? 'No description available'}
            restrictedmessage={
              product.restrictedmessage ?? 'No description available'
            }
            bySkinConcern={product.bySkinConcern ?? 'No description available'}
            bySkinType={product.bySkinType ?? 'No description available'}
          />
        ) : (
          <div>Loading...</div>
        )}
        <div className={'w-full bg-lightGray '}>
          <div className='xl:!px-[96px] md:!px-[56px] '>
            <ProductDetails></ProductDetails>
          </div>
          <div
            className={
              'w-full  xl:!px-[96px] md:!px-[50px] 2xs:px-[24px]  !m-0'
            }
          >
            {/* <RelatedProducts relatedProducts={relatedProducts} className={'xl:!px-[5rem]'} /> */}
          </div>
          <div className='pt-[7.5rem] lg:px-4 !w-full xl:!px-[96px] '>
            <MarketingBannerTwo bannerData={marketingBannerTwo[0]} />
          </div>
        </div>
      </div>
      <div>
        <ReviewProvider>
          <ReviewSection></ReviewSection>
        </ReviewProvider>
      </div>
    </>
  );
};
