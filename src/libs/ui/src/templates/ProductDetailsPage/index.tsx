import React, { useEffect, useState } from 'react';
import ProductDetailsContent from '@ui/organisms/ProductDetailsContent';
import ProductDetails from '@ui/molecules/ProductDetails';
import { MarketingBannerTwo } from '@ui/organisms/MarketingBannerTwo';
import RelatedProducts from '@ui/organisms/RelatedProducts';
import { marketingBannerTwo } from '@utils/banner';
import { products, relatedProducts } from '@utils/test';
import {  useParams } from 'react-router-dom';
import './ProductDetailsPage.styles.scss';
import { ProductDetailsContentProps } from '@utils/Product';

interface PDPage {
  submitLabel: string;
  onSubmit: (value: string) => void;
}

export const ProductDetailsPage: React.FC<PDPage> = () => {

  const[selectedProduct,setSelectedProduct]=useState<ProductDetailsContentProps | null>(null);
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
        reviews:product.reviews,
        restrictedmessage:product.restrictedmessage,
      };
      setSelectedProduct(productDetails);
    }
  }, [id]);

  
  return (
    <>
      <div className='Product-detailspage'>
      {selectedProduct ? (
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
          <div></div>
        )}
        <div className='w-full bg-[#f4f4f4] lg:pl-[96px] lg:pr-[96px] !m-0'>
          <ProductDetails />
          <RelatedProducts relatedProducts={relatedProducts} className={''} />
          <div className='pt-[7.5rem] lg:px-4'>
            <MarketingBannerTwo bannerData={marketingBannerTwo[0]} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsPage;
