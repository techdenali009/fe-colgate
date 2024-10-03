// import React from 'react';

// // Define the Product interface
// interface Product {
//   id: number;
//   name: string;
//   image: string;
//   rating: number;
//   isBestSeller: boolean;
// }
// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// // ProductCard component to display each product
// function ProductCard({ product }: { product: Product }) {
//   return (
//     <div className="product-card border p-4">
//       <img src={product.image} alt={product.name} className="w-full h-auto mb-4" />
//       <h3 className="product-name font-bold mb-2">{product.name}</h3>
//       <p className="product-rating">Rating: {product.rating}</p>
//       {product.isBestSeller && <span className="bestseller-tag text-red-500">Best Seller</span>}
//     </div>
//   );
// }

// // The rest of your PLP code
// import PageTitleHeader from '@ui/molecules/PageTitleHeader';
// import Sidebar from '@ui/organisms/Sidebar/Sidebar';
// import filterData from '@utils/FilterData';
// import { viewAllProducts } from '@utils/test';
// import Product from '@ui/organisms/Product';


// const breadcrumbs = [
//   { label: 'Home', href: '/' },
//   { label: 'All Products', href: '/products' },
// ];

// function PlpPageTemplate() {
//   return (
//     <div className="plp relative">
//       <div className="plpPageTittle mb-[30px] mt-[30px] pl-[90px]">
//         <PageTitleHeader breadcrumbs={breadcrumbs} />
//       </div>
//       <div className="plpContainercontainer flex gap-[23px] pl-[76px] pr-[76px]">
//         <div className="plpSidebar w-[353px] pr-[7px] pl-[7px] relative !box-shadow-none">
//           <Sidebar filterData={filterData} />
//         </div>
//         <div className="productcard grid grid-cols-3 gap-[23px]">
//           {viewAllProducts.map((product: Product) => (
//             <Product key={product.id} product={product} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PlpPageTemplate;
