// import { useRef, useState } from 'react';
// import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';

// import {  PopularProductsProps } from '@utils/Product';
// import ProductHeader from '@ui/molecules/PopularProductHeading';
// import { useSelector } from 'react-redux';
// import { RootState } from '@store/store';
// import Product from '../Product';

// function RelatedProducts({
//   products,
//   modalSetToggle,
//   onNextPage,
//   hasMore,
// }: PopularProductsProps) {
//   const swiperRef = useRef<SwiperRef | null>(null);
//   const isLoggedIn = useSelector(
//     (state: RootState) => state.authSlice.userInfo
//   );
//   console.log('products',products);
//   const [disableLeftButton, setDisableLeftButton] = useState(true);
//   const [disableRightButton, setDisableRightButton] = useState(!hasMore);

//   const handleScroll = (direction: 'left' | 'right') => {
//     if (swiperRef.current) {
//       if (direction === 'left') {
//         swiperRef.current.swiper.slidePrev();
//       } else {
//         swiperRef.current.swiper.slideNext();
//       }
//     }
//   };
//   // eslint-disable-next-line  @typescript-eslint/no-explicit-any
//   const handleSlideChange = (swiper: any) => {
//     // Check if Swiper is at the start or end
//     const atStart = swiper.activeIndex === 0;
//     const atEnd = swiper.isEnd;

//     setDisableLeftButton(atStart); // Disable left button if at the start
//     setDisableRightButton(atEnd && !hasMore); // Disable right button if at the end and no more items
//   };
//   // eslint-disable-next-line  @typescript-eslint/no-explicit-any
//   const handleSlideChangeEnd = (swiper: any) => {
//     if (swiper.isEnd) {
//       console.log('Reached the end of the swiper');
    
//     }
//   };
//   // eslint-disable-next-line  @typescript-eslint/no-explicit-any
//   const handleSlideChangeWrapper = (swiper: any) => {
//     handleSlideChange(swiper);
//     handleSlideChangeEnd(swiper);
//   };
//   // Swiper settings with responsive breakpoints
//   const swiperSettings = {
//     slidesPerView: 1.2,
//     spaceBetween: 16,
//     loop: false,
//     modules: [Navigation],
//     navigation: false,
//     breakpoints: {
//       640: {
//         slidesPerView: 2.2,
//       },
//       1024: {
//         slidesPerView: 3,
//       },
//       1280: {
//         slidesPerView: 4,
//       },
//     },
//   };

//   return (
//     <div className="w-full">
//       <div className="mb-6">
//       <ProductHeader
//           className='2xs:text-[20px] lg:!text-[28px] !h-[10px]'
//           headingLabel="Related Products"
//           handleScroll={handleScroll}
//           LogInButtonDisable={false} description={''} modalSetToggle={()=>console.log('')} 
//           disableLeftButton={false}
//           disableRightButton={false}
//         />
//       </div>

//       <Swiper
//         ref={swiperRef}
//         {...swiperSettings}
//         onSlideChange={handleSlideChangeWrapper} // Handle slide change dynamically
//         className="mySwiper"
//       >
//         {products?.products.map((product) => (
//           <SwiperSlide key={product._id} className="!items-start">
//             <Product
//               key={`${product._id}-${product.name}`}
//               product={{
//                 id: product._id,
//                 name: product.name,
//                 image: product?.images?.length > 0 ? product.images[0]?.url : '',
//                 rating: product?.rating || 0,
//                 price: product?.price,
//                 isBestSeller: product?.isBestSeller || false,
//               }}
//               modalSetToggle={()=>{}}
//               openQuickView={() => {console.log()}}
//               showQuickView={false}
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

// export default RelatedProducts;