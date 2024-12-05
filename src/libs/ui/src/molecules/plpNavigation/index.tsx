// import React, { useEffect, useState } from 'react';
// import Product from "@ui/organisms/Product"; // Assuming this is your product display component
// import { useProductContext } from "../../contexts/PlpContext"; // Your context for products

// const AllProductsPage = () => {
//   const { filteredProducts, setFilters } = useProductContext(); // Assuming you have a context to get products
//   const [productsToShow, setProductsToShow] = useState<number>(9);

//   // Clear filters to ensure all products are shown
//   useEffect(() => {
//     setFilters([]); // This clears any existing filters
//   }, [setFilters]);

//   const loadMoreProducts = () => setProductsToShow(prev => prev + 9);

//   return (
//     <div className="relative p-4">
//       <h1 className="text-2xl font-bold">All Products</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {filteredProducts.slice(0, productsToShow).map((product) => (
//           <Product key={product.id} product={product} modalSetToggle={function (): void {
//                 throw new Error('Function not implemented.');
//             } } />
//         ))}
//       </div>

//       {productsToShow < filteredProducts.length && (
//         <div className="text-center mt-5">
//           <button
//             onClick={loadMoreProducts}
//             className="px-4 py-2 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
//           >
//             Load More
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AllProductsPage;
