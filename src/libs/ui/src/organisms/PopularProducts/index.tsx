import { useRef, useState } from 'react';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Product from '../Product';
import { PopularProductsProps, ProductType } from '@utils/Product';
import ProductHeader from '@ui/molecules/PopularProductHeading';
import QuickViewModal from '../QuickView';

function PopularProducts({ products,modalSetToggle }: PopularProductsProps) {
  const swiperRef =  useRef<SwiperRef | null>(null);
  const [QuickViewModalOpen, setQuickViewModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (swiperRef.current) {
      if (direction === 'left') {
        swiperRef.current.swiper.slidePrev(); 
      } else {
        swiperRef.current.swiper.slideNext();
      }
    }
  };

  //USed to fetch the products from api call but now  we are fetching from test page
  const openQuickReviewModal = async (id: number) => {
   
    const product = products.find(p => p.id === id);

    if (product) {
      setSelectedProduct(product);
      setQuickViewModalOpen(true);
    }
  };

  const closeQuickViewModal = () => setQuickViewModalOpen(false);
  // Swiper settings with responsive breakpoints
  const swiperSettings = {
    slidesPerView: 1.2,
    spaceBetween: 16,
    loop: true,
    modules: [Navigation],
    navigation: false, 
    breakpoints: {
      640: {
        slidesPerView: 2.2,
      
      },
      1024: {
        slidesPerView: 3,
      
      },
      1280: {
        slidesPerView: 4,
  
      },
    },
  };

  return (
    <div className="w-full">
      <div className='mb-6'>
        <ProductHeader
          headingLabel="Popular Products"
          description="A selection of our highly recommended products, endorsed by industry professionals, to initiate your professional journey."
          handleScroll={handleScroll}
          LogInButtonDisable={true}
          modalSetToggle={modalSetToggle}
        />
      </div> 

      <Swiper ref={swiperRef} {...swiperSettings} className="mySwiper">
        {products.map((product) => (
          <SwiperSlide key={product.id} className="  !items-start">
            <Product product={product}  modalSetToggle={modalSetToggle}  openQuickView={openQuickReviewModal} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* This is Quickmodal component */}
      {QuickViewModalOpen && selectedProduct && (
        <QuickViewModal
          closeModal={closeQuickViewModal}
          product={selectedProduct} 
        />
      )}
    </div>
  );
}

export default PopularProducts;
