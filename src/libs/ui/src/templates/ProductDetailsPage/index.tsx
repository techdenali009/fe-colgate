import ProductDetailsContent from '@ui/organisms/ProductDetailsContent';
import ProductDetails from '@ui/molecules/ProductDetails';
import { MarketingBannerTwo } from '@ui/organisms/MarketingBannerTwo';
import './ProductDetailsPage.styles.scss';

import { marketingBannerTwo } from '@utils/banner';
import { useParams } from 'react-router-dom';
import './ProductDetailsPage.styles.scss';
import PageTitleHeader from '@ui/molecules/PageTitleHeader';
import ProductDetailsContentSkeleton from '@ui/molecules/ProductDetailsContentSkeleton';
import { useEffect, useState } from 'react';
import { ReviewProvider } from '@ui/molecules/ReviewUseContext';
import ReviewSection from '@ui/organisms/ReviewSection';
import { useDispatch } from 'react-redux';
import { addVisitedProduct } from '@store/services/Slices/visitedProductsSlice';
import {
  useLazyGetProductByIdQuery,
  useLazyGetRelativeProductsQuery,
} from '@store/services/Endpoints/PlpProductsEndPoint';
import RelatedProducts from '@ui/organisms/RelatedProducts';
import { Product } from '../LandingPage';
import { toggleLoginModel } from '@store/services/Slices/ModalSlice';

interface PDPage {
  submitLabel: string;
  onSubmit: (value: string) => void;
}
export const ProductDetailsPage: React.FC<PDPage> = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [productsList, setProductsList] = useState<Product[]>([]); // Store all products
  const [hasMore, setHasMore] = useState<boolean>(true); // State to track if there are more products
  const limit = 10;
  const [trigger, { data: product, isLoading }] = useLazyGetProductByIdQuery();
  const [fetch, { data: relativeproducts }] = useLazyGetRelativeProductsQuery();

  useEffect(() => {
    if (id) {
      dispatch(addVisitedProduct(id));
      trigger(id); // Fetch product data on demand
      fetch({ productId: id, page, limit });
    }
  }, [id, trigger, dispatch]);

  useEffect(() => {
    if (relativeproducts) {
      setProductsList((prevProducts) => [
        ...prevProducts,
        ...relativeproducts.data.products,
      ]);

      // Set the hasMore state based on the response data
      setHasMore(relativeproducts.hasMore); // If fewer products are returned than the limit, no more pages
    }
  }, [relativeproducts]);
  const handleNextPage = () => {
    if (hasMore) {
      setPage((prevPage) => prevPage + 1); // Increment page number only if there are more products
    }
  };
  // Breadcrumbs array, updated dynamically based on the selected product
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'All Products', href: '/products' },
    { label: product?.name || '' }, // Current product name
  ];
  const modalSetToggle = () => {
    dispatch(toggleLoginModel());
  };
  return (
    <>
      <div className="Product-detailspage">
        <div className="bread-crumbs pt-[40px] px-[50px]">
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
              product.restrictedmessage ??
              'The Professional Peel Certification course is required to access professional-only products. If you want to become PCA Certified please call 877.PCA.SKIN, email info@pcaskin.com or click here for more details. If you have completed the course, please email info@pcaskin.com with proof of completion (certificate).'
            }
            bySkinConcern={product.bySkinConcern ?? 'No description available'}
            bySkinType={product.bySkinType ?? 'No description available'}
          />
        ) : (
          <div>Loading...</div>
        )}
        <div className={'w-full bg-lightGray '}>
          <div className="xl:!px-[96px] md:!px-[56px] ">
            <ProductDetails
              howToApply={product?.howToApply}
              regimenInfromation={product?.regimenInfromation}
            >
            </ProductDetails>
          </div>
          <div
            className={
              'w-full  xl:!px-[96px] md:!px-[50px] 2xs:px-[24px]  !m-0'
            }
          >
            <RelatedProducts
              products={productsList}
              modalSetToggle={modalSetToggle}
              hasMore={hasMore}
              onNextPage={handleNextPage}
            />
          </div>
          <div className="pt-[7.5rem] lg:px-4 !w-full xl:!px-[96px] ">
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
